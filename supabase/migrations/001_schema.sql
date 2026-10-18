-- Recoup unified platform: schema, row-level security, business logic
-- Run once in the Supabase SQL editor (safe to re-run: uses IF NOT EXISTS / OR REPLACE where possible).

-- =====================================================================
-- 0. helpers
-- =====================================================================
create or replace function public.set_updated_at() returns trigger
language plpgsql as $$ begin new.updated_at = now(); return new; end $$;

-- =====================================================================
-- 1. admin access (allow-list of verified emails)
-- =====================================================================
create table if not exists public.admin_allowlist (
  email    text primary key,
  note     text,
  added_at timestamptz not null default now()
);
alter table public.admin_allowlist enable row level security;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public, auth as $$
  select exists (
    select 1
    from auth.users u
    join public.admin_allowlist a on lower(a.email) = lower(u.email)
    where u.id = auth.uid() and u.email_confirmed_at is not null
  );
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

drop policy if exists admin_allowlist_admin on public.admin_allowlist;
create policy admin_allowlist_admin on public.admin_allowlist
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- =====================================================================
-- 2. site settings (some keys are public)
-- =====================================================================
create table if not exists public.site_settings (
  key        text primary key,
  value      jsonb not null default 'null'::jsonb,
  is_public  boolean not null default false,
  updated_at timestamptz not null default now()
);
alter table public.site_settings enable row level security;
drop policy if exists settings_public_read on public.site_settings;
create policy settings_public_read on public.site_settings
  for select to anon, authenticated using (is_public);
drop policy if exists settings_admin_all on public.site_settings;
create policy settings_admin_all on public.site_settings
  for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop trigger if exists trg_settings_updated on public.site_settings;
create trigger trg_settings_updated before update on public.site_settings
  for each row execute function public.set_updated_at();

-- =====================================================================
-- 3. website content: blog, testimonials, newsletter
-- =====================================================================
create table if not exists public.blog_posts (
  id               uuid primary key default gen_random_uuid(),
  slug             text not null unique check (slug ~ '^[a-z0-9][a-z0-9-]*$'),
  title            text not null,
  category         text not null default 'General',
  excerpt          text not null default '',
  body_html        text not null default '',
  image_url        text,
  read_time        text not null default '5 min read',
  meta_title       text,
  meta_description text,
  published        boolean not null default true,
  published_at     timestamptz not null default now(),
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);
alter table public.blog_posts enable row level security;
drop policy if exists blog_public_read on public.blog_posts;
create policy blog_public_read on public.blog_posts for select to anon, authenticated using (published);
drop policy if exists blog_admin_all on public.blog_posts;
create policy blog_admin_all on public.blog_posts for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop trigger if exists trg_blog_updated on public.blog_posts;
create trigger trg_blog_updated before update on public.blog_posts for each row execute function public.set_updated_at();

create table if not exists public.testimonials (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  role       text,
  content    text not null,
  image_url  text,
  video_url  text,
  published  boolean not null default true,
  sort_order int not null default 100,
  created_at timestamptz not null default now()
);
alter table public.testimonials enable row level security;
drop policy if exists testimonials_public_read on public.testimonials;
create policy testimonials_public_read on public.testimonials for select to anon, authenticated using (published);
drop policy if exists testimonials_admin_all on public.testimonials;
create policy testimonials_admin_all on public.testimonials for all to authenticated using (public.is_admin()) with check (public.is_admin());

create table if not exists public.newsletter_subscribers (
  id              uuid primary key default gen_random_uuid(),
  email           text not null check (char_length(email) <= 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  source          text,
  created_at      timestamptz not null default now(),
  unsubscribed_at timestamptz
);
create unique index if not exists newsletter_email_uq on public.newsletter_subscribers (lower(email));
alter table public.newsletter_subscribers enable row level security;
drop policy if exists newsletter_admin_all on public.newsletter_subscribers;
create policy newsletter_admin_all on public.newsletter_subscribers for all to authenticated using (public.is_admin()) with check (public.is_admin());

create or replace function public.subscribe_newsletter(p_email text, p_source text default null)
returns void language plpgsql security definer set search_path = public as $$
begin
  insert into public.newsletter_subscribers(email, source)
  values (lower(trim(p_email)), left(p_source, 100))
  on conflict (lower(email)) do update set unsubscribed_at = null;
end $$;
revoke all on function public.subscribe_newsletter(text, text) from public;
grant execute on function public.subscribe_newsletter(text, text) to anon, authenticated;

-- =====================================================================
-- 4. Academy: courses, batches, gallery
-- =====================================================================
create table if not exists public.courses (
  id               uuid primary key default gen_random_uuid(),
  slug             text not null unique check (slug ~ '^[a-z0-9][a-z0-9-]*$'),
  title            text not null,
  category         text not null default 'fellowship' check (category in ('fellowship','short_term','workshop','webinar')),
  summary          text,
  description_html text,
  syllabus         jsonb not null default '[]'::jsonb,
  faculty          jsonb not null default '[]'::jsonb,
  duration         text,
  eligibility      text,
  fees_inr         numeric(10,2) check (fees_inr is null or fees_inr >= 0),
  fees_note        text,
  mode             text,
  brochure_url     text,
  image_url        text,
  published        boolean not null default true,
  sort_order       int not null default 100,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);
alter table public.courses enable row level security;
drop policy if exists courses_public_read on public.courses;
create policy courses_public_read on public.courses for select to anon, authenticated using (published);
drop policy if exists courses_admin_all on public.courses;
create policy courses_admin_all on public.courses for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop trigger if exists trg_courses_updated on public.courses;
create trigger trg_courses_updated before update on public.courses for each row execute function public.set_updated_at();

create table if not exists public.course_batches (
  id               uuid primary key default gen_random_uuid(),
  course_id        uuid references public.courses(id) on delete cascade,
  title            text not null,
  start_date       date,
  end_date         date,
  seats            int check (seats is null or seats >= 0),
  location         text,
  mode             text,
  registration_url text,
  show_banner      boolean not null default true,
  published        boolean not null default true,
  created_at       timestamptz not null default now()
);
alter table public.course_batches enable row level security;
drop policy if exists batches_public_read on public.course_batches;
create policy batches_public_read on public.course_batches for select to anon, authenticated using (published);
drop policy if exists batches_admin_all on public.course_batches;
create policy batches_admin_all on public.course_batches for all to authenticated using (public.is_admin()) with check (public.is_admin());

create table if not exists public.gallery_items (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  caption     text,
  image_url   text not null,
  event_name  text,
  event_date  date,
  published   boolean not null default true,
  sort_order  int not null default 100,
  created_at  timestamptz not null default now()
);
alter table public.gallery_items enable row level security;
drop policy if exists gallery_public_read on public.gallery_items;
create policy gallery_public_read on public.gallery_items for select to anon, authenticated using (published);
drop policy if exists gallery_admin_all on public.gallery_items;
create policy gallery_admin_all on public.gallery_items for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- =====================================================================
-- 5. leads and appointment requests
-- =====================================================================
create table if not exists public.leads (
  id             uuid primary key default gen_random_uuid(),
  kind           text not null default 'contact'
                 check (kind in ('contact','academy_inquiry','booking','callback','brochure','chat','other')),
  full_name      text not null check (char_length(full_name) between 1 and 200),
  email          text check (email is null or (char_length(email) <= 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')),
  phone          text check (phone is null or char_length(phone) <= 40),
  organization   text check (organization is null or char_length(organization) <= 200),
  message        text check (message is null or char_length(message) <= 5000),
  source_page    text check (source_page is null or char_length(source_page) <= 200),
  source_section text check (source_section is null or char_length(source_section) <= 200),
  course_id      uuid references public.courses(id) on delete set null,
  status         text not null default 'new' check (status in ('new','contacted','qualified','closed','spam')),
  admin_notes    text,
  created_at     timestamptz not null default now()
);
create index if not exists leads_created_idx on public.leads (created_at desc);
alter table public.leads enable row level security;
drop policy if exists leads_anon_insert on public.leads;
create policy leads_anon_insert on public.leads for insert to anon, authenticated
  with check (status = 'new' and admin_notes is null);
drop policy if exists leads_admin_all on public.leads;
create policy leads_admin_all on public.leads for all to authenticated using (public.is_admin()) with check (public.is_admin());

create table if not exists public.appointment_requests (
  id             uuid primary key default gen_random_uuid(),
  full_name      text not null check (char_length(full_name) between 1 and 200),
  phone          text not null check (char_length(phone) between 5 and 40),
  email          text check (email is null or (char_length(email) <= 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')),
  service        text check (service is null or char_length(service) <= 200),
  preferred_date date,
  preferred_time text check (preferred_time is null or char_length(preferred_time) <= 40),
  mode           text check (mode is null or mode in ('in_person','online')),
  notes          text check (notes is null or char_length(notes) <= 2000),
  source_page    text check (source_page is null or char_length(source_page) <= 200),
  redirected_to_hms boolean not null default false,
  status         text not null default 'new' check (status in ('new','contacted','booked','closed','spam')),
  admin_notes    text,
  created_at     timestamptz not null default now()
);
alter table public.appointment_requests enable row level security;
drop policy if exists appt_anon_insert on public.appointment_requests;
create policy appt_anon_insert on public.appointment_requests for insert to anon, authenticated
  with check (status = 'new' and admin_notes is null);
drop policy if exists appt_admin_all on public.appointment_requests;
create policy appt_admin_all on public.appointment_requests for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- =====================================================================
-- 6. ecommerce
-- =====================================================================
create table if not exists public.product_categories (
  id         uuid primary key default gen_random_uuid(),
  slug       text not null unique check (slug ~ '^[a-z0-9][a-z0-9-]*$'),
  name       text not null,
  sort_order int not null default 100
);
alter table public.product_categories enable row level security;
drop policy if exists pcat_public_read on public.product_categories;
create policy pcat_public_read on public.product_categories for select to anon, authenticated using (true);
drop policy if exists pcat_admin_all on public.product_categories;
create policy pcat_admin_all on public.product_categories for all to authenticated using (public.is_admin()) with check (public.is_admin());

create table if not exists public.products (
  id                  uuid primary key default gen_random_uuid(),
  slug                text not null unique check (slug ~ '^[a-z0-9][a-z0-9-]*$'),
  sku                 text unique,
  name                text not null,
  category_id         uuid references public.product_categories(id) on delete set null,
  short_description   text,
  description_html    text,
  price_inr           numeric(10,2) not null check (price_inr >= 0),
  compare_at_price_inr numeric(10,2) check (compare_at_price_inr is null or compare_at_price_inr >= 0),
  stock_qty           int not null default 0 check (stock_qty >= 0),
  track_inventory     boolean not null default true,
  low_stock_threshold int not null default 5,
  images              jsonb not null default '[]'::jsonb,
  published           boolean not null default true,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);
alter table public.products enable row level security;
drop policy if exists products_public_read on public.products;
create policy products_public_read on public.products for select to anon, authenticated using (published);
drop policy if exists products_admin_all on public.products;
create policy products_admin_all on public.products for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop trigger if exists trg_products_updated on public.products;
create trigger trg_products_updated before update on public.products for each row execute function public.set_updated_at();

create table if not exists public.inventory_movements (
  id         uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  delta      int not null,
  stock_after int not null,
  reason     text,
  created_at timestamptz not null default now()
);
alter table public.inventory_movements enable row level security;
drop policy if exists invmov_admin_all on public.inventory_movements;
create policy invmov_admin_all on public.inventory_movements for all to authenticated using (public.is_admin()) with check (public.is_admin());

create or replace function public.log_stock_change() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.stock_qty is distinct from old.stock_qty then
    insert into public.inventory_movements(product_id, delta, stock_after, reason)
    values (new.id, new.stock_qty - old.stock_qty, new.stock_qty,
            coalesce(current_setting('recoup.stock_reason', true), 'manual adjustment'));
  end if;
  return new;
end $$;
drop trigger if exists trg_products_stock_log on public.products;
create trigger trg_products_stock_log after update of stock_qty on public.products
  for each row execute function public.log_stock_change();

create table if not exists public.product_reviews (
  id            uuid primary key default gen_random_uuid(),
  product_id    uuid not null references public.products(id) on delete cascade,
  reviewer_name text not null check (char_length(reviewer_name) between 1 and 100),
  rating        int not null check (rating between 1 and 5),
  body          text check (body is null or char_length(body) <= 2000),
  approved      boolean not null default false,
  created_at    timestamptz not null default now()
);
alter table public.product_reviews enable row level security;
drop policy if exists reviews_public_read on public.product_reviews;
create policy reviews_public_read on public.product_reviews for select to anon, authenticated using (approved);
drop policy if exists reviews_anon_insert on public.product_reviews;
create policy reviews_anon_insert on public.product_reviews for insert to anon, authenticated with check (approved = false);
drop policy if exists reviews_admin_all on public.product_reviews;
create policy reviews_admin_all on public.product_reviews for all to authenticated using (public.is_admin()) with check (public.is_admin());

create table if not exists public.coupons (
  code        text primary key check (code = upper(code) and char_length(code) between 3 and 30),
  percent_off int not null check (percent_off between 1 and 90),
  active      boolean not null default true,
  valid_until date,
  created_at  timestamptz not null default now()
);
alter table public.coupons enable row level security;
drop policy if exists coupons_admin_all on public.coupons;
create policy coupons_admin_all on public.coupons for all to authenticated using (public.is_admin()) with check (public.is_admin());

create sequence if not exists public.order_number_seq start 1001;
create sequence if not exists public.invoice_number_seq start 1001;

create table if not exists public.orders (
  id                   uuid primary key default gen_random_uuid(),
  order_number         text not null unique,
  tracking_token       text not null unique default encode(gen_random_bytes(12), 'hex'),
  customer_name        text not null,
  email                text not null,
  phone                text not null,
  shipping_address     jsonb not null default '{}'::jsonb,
  subtotal_inr         numeric(12,2) not null,
  discount_inr         numeric(12,2) not null default 0,
  shipping_inr         numeric(12,2) not null default 0,
  total_inr            numeric(12,2) not null,
  coupon_code          text,
  status               text not null default 'pending_payment'
                       check (status in ('pending_payment','processing','shipped','delivered','cancelled','refunded')),
  payment_method       text not null default 'cod' check (payment_method in ('cod','razorpay','pay_later')),
  payment_status       text not null default 'pending' check (payment_status in ('pending','paid','failed','refunded')),
  razorpay_order_id    text,
  razorpay_payment_id  text,
  courier               text,
  tracking_number      text,
  admin_notes          text,
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);
create index if not exists orders_created_idx on public.orders (created_at desc);
alter table public.orders enable row level security;
drop policy if exists orders_admin_all on public.orders;
create policy orders_admin_all on public.orders for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop trigger if exists trg_orders_updated on public.orders;
create trigger trg_orders_updated before update on public.orders for each row execute function public.set_updated_at();

create table if not exists public.order_items (
  id           uuid primary key default gen_random_uuid(),
  order_id     uuid not null references public.orders(id) on delete cascade,
  product_id   uuid references public.products(id) on delete set null,
  product_name text not null,
  unit_price_inr numeric(10,2) not null,
  qty          int not null check (qty > 0),
  line_total_inr numeric(12,2) not null
);
alter table public.order_items enable row level security;
drop policy if exists order_items_admin_all on public.order_items;
create policy order_items_admin_all on public.order_items for all to authenticated using (public.is_admin()) with check (public.is_admin());

create table if not exists public.invoices (
  id             uuid primary key default gen_random_uuid(),
  order_id       uuid not null unique references public.orders(id) on delete cascade,
  invoice_number text not null unique,
  amount_inr     numeric(12,2) not null,
  issued_at      timestamptz not null default now()
);
alter table public.invoices enable row level security;
drop policy if exists invoices_admin_all on public.invoices;
create policy invoices_admin_all on public.invoices for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- receipt is created automatically once an order is paid
create or replace function public.create_invoice_when_paid() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.payment_status = 'paid' then
    insert into public.invoices(order_id, invoice_number, amount_inr)
    values (new.id, 'INV-' || nextval('public.invoice_number_seq'), new.total_inr)
    on conflict (order_id) do nothing;
  end if;
  return new;
end $$;
drop trigger if exists trg_orders_invoice on public.orders;
create trigger trg_orders_invoice after insert or update of payment_status on public.orders
  for each row execute function public.create_invoice_when_paid();

-- place_order: prices, stock and coupon are decided here, never by the browser
create or replace function public.place_order(
  p_customer jsonb, p_items jsonb, p_payment_method text default 'cod', p_coupon text default null
) returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  r record; prod record;
  v_name text  := trim(coalesce(p_customer->>'name',''));
  v_email text := lower(trim(coalesce(p_customer->>'email','')));
  v_phone text := trim(coalesce(p_customer->>'phone',''));
  v_addr jsonb := coalesce(p_customer->'address', '{}'::jsonb);
  v_subtotal numeric(12,2) := 0; v_discount numeric(12,2) := 0; v_shipping numeric(12,2) := 0; v_total numeric(12,2);
  v_pct int := 0; v_free_above numeric; v_flat numeric;
  v_order_id uuid; v_number text; v_token text; v_status text; v_pay_status text := 'pending';
begin
  if v_name = '' or char_length(v_name) > 200 then raise exception 'Please enter your name'; end if;
  if v_email !~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' then raise exception 'Please enter a valid email'; end if;
  if char_length(v_phone) < 5 or char_length(v_phone) > 40 then raise exception 'Please enter a valid phone number'; end if;
  if p_payment_method not in ('cod','razorpay','pay_later') then raise exception 'Unsupported payment method'; end if;
  if p_items is null or jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) = 0 then raise exception 'Your cart is empty'; end if;
  if jsonb_array_length(p_items) > 50 then raise exception 'Too many items'; end if;

  -- first pass: validate and price (rows locked in a fixed order)
  for r in
    select x.product_id, sum(x.qty)::int as qty
    from jsonb_to_recordset(p_items) as x(product_id uuid, qty int)
    group by x.product_id order by x.product_id
  loop
    if r.qty is null or r.qty < 1 or r.qty > 20 then raise exception 'Invalid quantity'; end if;
    select * into prod from public.products where id = r.product_id and published for update;
    if not found then raise exception 'A product in your cart is no longer available'; end if;
    if prod.track_inventory and prod.stock_qty < r.qty then
      raise exception 'Only % left of %', prod.stock_qty, prod.name;
    end if;
    v_subtotal := v_subtotal + prod.price_inr * r.qty;
  end loop;

  if p_coupon is not null and trim(p_coupon) <> '' then
    select percent_off into v_pct from public.coupons
      where code = upper(trim(p_coupon)) and active and (valid_until is null or valid_until >= current_date);
    if not found then raise exception 'That coupon is not valid'; end if;
    v_discount := round(v_subtotal * v_pct / 100.0, 2);
  end if;

  select (value #>> '{}')::numeric into v_flat from public.site_settings where key = 'shipping_flat_inr';
  select (value #>> '{}')::numeric into v_free_above from public.site_settings where key = 'free_shipping_above_inr';
  v_shipping := coalesce(v_flat, 0);
  if v_free_above is not null and v_free_above > 0 and (v_subtotal - v_discount) >= v_free_above then v_shipping := 0; end if;
  v_total := v_subtotal - v_discount + v_shipping;

  v_status := case when p_payment_method = 'cod' then 'processing' else 'pending_payment' end;
  v_number := 'RC-' || nextval('public.order_number_seq');
  insert into public.orders(order_number, customer_name, email, phone, shipping_address, subtotal_inr, discount_inr,
                            shipping_inr, total_inr, coupon_code, status, payment_method, payment_status)
  values (v_number, v_name, v_email, v_phone, v_addr, v_subtotal, v_discount, v_shipping, v_total,
          nullif(upper(trim(coalesce(p_coupon,''))), ''), v_status, p_payment_method, v_pay_status)
  returning id, tracking_token into v_order_id, v_token;

  -- second pass: lines and stock
  perform set_config('recoup.stock_reason', 'order ' || v_number, true);
  for r in
    select x.product_id, sum(x.qty)::int as qty
    from jsonb_to_recordset(p_items) as x(product_id uuid, qty int)
    group by x.product_id order by x.product_id
  loop
    select * into prod from public.products where id = r.product_id;
    insert into public.order_items(order_id, product_id, product_name, unit_price_inr, qty, line_total_inr)
    values (v_order_id, prod.id, prod.name, prod.price_inr, r.qty, prod.price_inr * r.qty);
    if prod.track_inventory then
      update public.products set stock_qty = stock_qty - r.qty where id = prod.id;
    end if;
  end loop;

  return jsonb_build_object('order_id', v_order_id, 'order_number', v_number, 'tracking_token', v_token,
                            'total', v_total, 'status', v_status, 'payment_method', p_payment_method);
end $$;
revoke all on function public.place_order(jsonb, jsonb, text, text) from public;
grant execute on function public.place_order(jsonb, jsonb, text, text) to anon, authenticated;

-- coupon check for the cart (returns the percentage, or null when the code is not valid)
create or replace function public.validate_coupon(p_code text) returns int
language sql stable security definer set search_path = public as $$
  select percent_off from public.coupons
  where code = upper(trim(p_code)) and active and (valid_until is null or valid_until >= current_date);
$$;
revoke all on function public.validate_coupon(text) from public;
grant execute on function public.validate_coupon(text) to anon, authenticated;

-- order tracking and receipt for the customer (needs the secret token from the confirmation)
create or replace function public.get_order_tracking(p_order_number text, p_token text) returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare o record; inv record; items jsonb;
begin
  select * into o from public.orders where order_number = upper(trim(p_order_number)) and tracking_token = trim(p_token);
  if not found then return null; end if;
  select coalesce(jsonb_agg(jsonb_build_object('name', product_name, 'qty', qty, 'unit_price', unit_price_inr, 'line_total', line_total_inr)), '[]'::jsonb)
    into items from public.order_items where order_id = o.id;
  select * into inv from public.invoices where order_id = o.id;
  return jsonb_build_object(
    'order_number', o.order_number, 'customer_name', o.customer_name, 'status', o.status,
    'payment_method', o.payment_method, 'payment_status', o.payment_status,
    'subtotal', o.subtotal_inr, 'discount', o.discount_inr, 'shipping', o.shipping_inr, 'total', o.total_inr,
    'coupon_code', o.coupon_code, 'courier', o.courier, 'tracking_number', o.tracking_number,
    'created_at', o.created_at, 'shipping_address', o.shipping_address, 'items', items,
    'invoice_number', inv.invoice_number, 'invoice_issued_at', inv.issued_at);
end $$;
revoke all on function public.get_order_tracking(text, text) from public;
grant execute on function public.get_order_tracking(text, text) to anon, authenticated;

-- =====================================================================
-- 7. AI: knowledge base (retrieval), chats, quiz results
-- =====================================================================
create table if not exists public.ai_knowledge (
  id         uuid primary key default gen_random_uuid(),
  title      text not null,
  category   text,
  url        text,
  tags       text not null default '',
  content    text not null default '',
  published  boolean not null default true,
  updated_at timestamptz not null default now(),
  tsv        tsvector generated always as (
               setweight(to_tsvector('english', coalesce(title,'')), 'A') ||
               setweight(to_tsvector('english', coalesce(tags,'')), 'B') ||
               setweight(to_tsvector('english', coalesce(content,'')), 'C')) stored
);
create index if not exists ai_knowledge_tsv_idx on public.ai_knowledge using gin (tsv);
alter table public.ai_knowledge enable row level security;
drop policy if exists aik_admin_all on public.ai_knowledge;
create policy aik_admin_all on public.ai_knowledge for all to authenticated using (public.is_admin()) with check (public.is_admin());

create or replace function public.search_knowledge(q text, max_results int default 5)
returns table (id uuid, title text, category text, url text, snippet text, score real)
language plpgsql stable security definer set search_path = public as $$
declare tq tsquery; cleaned text;
begin
  cleaned := trim(regexp_replace(lower(coalesce(q,'')), '[^a-z0-9 ]', ' ', 'g'));
  if char_length(cleaned) < 3 then return; end if;
  tq := to_tsquery('english', regexp_replace(cleaned, '\s+', ' | ', 'g'));
  return query
    select k.id, k.title, k.category, k.url, left(k.content, 260), ts_rank_cd(k.tsv, tq, 32)::real
    from public.ai_knowledge k
    where k.published and k.tsv @@ tq
    order by 6 desc, k.title
    limit least(greatest(max_results, 1), 10);
end $$;
revoke all on function public.search_knowledge(text, int) from public;
grant execute on function public.search_knowledge(text, int) to anon, authenticated;

create table if not exists public.ai_conversations (
  id          uuid primary key default gen_random_uuid(),
  session_id  text not null unique check (char_length(session_id) between 8 and 64),
  messages    jsonb not null default '[]'::jsonb,
  top_matches jsonb not null default '[]'::jsonb,
  lead_requested boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
alter table public.ai_conversations enable row level security;
drop policy if exists aic_admin_all on public.ai_conversations;
create policy aic_admin_all on public.ai_conversations for all to authenticated using (public.is_admin()) with check (public.is_admin());

create or replace function public.log_ai_chat(p_session text, p_messages jsonb, p_matches jsonb, p_lead boolean default false)
returns void language plpgsql security definer set search_path = public as $$
begin
  if jsonb_typeof(p_messages) <> 'array' or jsonb_array_length(p_messages) > 60 then return; end if;
  insert into public.ai_conversations(session_id, messages, top_matches, lead_requested)
  values (left(p_session, 64), p_messages, coalesce(p_matches, '[]'::jsonb), coalesce(p_lead, false))
  on conflict (session_id) do update
    set messages = excluded.messages, top_matches = excluded.top_matches,
        lead_requested = public.ai_conversations.lead_requested or excluded.lead_requested, updated_at = now();
end $$;
revoke all on function public.log_ai_chat(text, jsonb, jsonb, boolean) from public;
grant execute on function public.log_ai_chat(text, jsonb, jsonb, boolean) to anon, authenticated;

create table if not exists public.quiz_results (
  id         uuid primary key default gen_random_uuid(),
  quiz       text not null check (quiz in ('dosha','metabolic_age','fitness_readiness')),
  answers    jsonb not null default '{}'::jsonb,
  result     jsonb not null default '{}'::jsonb,
  name       text check (name is null or char_length(name) <= 200),
  email      text check (email is null or (char_length(email) <= 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')),
  phone      text check (phone is null or char_length(phone) <= 40),
  created_at timestamptz not null default now()
);
alter table public.quiz_results enable row level security;
drop policy if exists quiz_anon_insert on public.quiz_results;
create policy quiz_anon_insert on public.quiz_results for insert to anon, authenticated with check (true);
drop policy if exists quiz_admin_all on public.quiz_results;
create policy quiz_admin_all on public.quiz_results for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- =====================================================================
-- 8. notification outbox (queued by triggers; a mail sender drains it)
-- =====================================================================
create table if not exists public.notification_outbox (
  id         uuid primary key default gen_random_uuid(),
  kind       text not null,
  to_email   text not null,
  subject    text not null,
  body       text not null,
  ref_table  text,
  ref_id     uuid,
  status     text not null default 'queued' check (status in ('queued','sent','failed')),
  error      text,
  created_at timestamptz not null default now(),
  sent_at    timestamptz
);
create index if not exists outbox_status_idx on public.notification_outbox (status, created_at);
alter table public.notification_outbox enable row level security;
drop policy if exists outbox_admin_all on public.notification_outbox;
create policy outbox_admin_all on public.notification_outbox for all to authenticated using (public.is_admin()) with check (public.is_admin());

create or replace function public.admin_recipients() returns text[]
language sql stable security definer set search_path = public as $$
  select coalesce((select array(select jsonb_array_elements_text(value)) from public.site_settings
                   where key = 'notification_emails' and jsonb_typeof(value) = 'array'), '{}'::text[]);
$$;

create or replace function public.enqueue_lead_notifications() returns trigger
language plpgsql security definer set search_path = public as $$
declare e text;
begin
  foreach e in array public.admin_recipients() loop
    insert into public.notification_outbox(kind, to_email, subject, body, ref_table, ref_id)
    values ('lead_admin', e, 'New ' || new.kind || ' enquiry from ' || new.full_name,
      'Name: ' || new.full_name || E'\nEmail: ' || coalesce(new.email,'-') || E'\nPhone: ' || coalesce(new.phone,'-') ||
      E'\nPage: ' || coalesce(new.source_page,'-') || E'\n\n' || coalesce(new.message,''), 'leads', new.id);
  end loop;
  if new.email is not null then
    insert into public.notification_outbox(kind, to_email, subject, body, ref_table, ref_id)
    values ('lead_ack', new.email, 'We have received your message - RECOUP Health',
      'Hello ' || new.full_name || E',\n\nThank you for contacting RECOUP Health. Our team will get back to you soon.\n\nRECOUP Health, Bangalore', 'leads', new.id);
  end if;
  return new;
end $$;
drop trigger if exists trg_leads_notify on public.leads;
create trigger trg_leads_notify after insert on public.leads for each row execute function public.enqueue_lead_notifications();

create or replace function public.enqueue_appointment_notifications() returns trigger
language plpgsql security definer set search_path = public as $$
declare e text;
begin
  foreach e in array public.admin_recipients() loop
    insert into public.notification_outbox(kind, to_email, subject, body, ref_table, ref_id)
    values ('appointment_admin', e, 'New consultation request from ' || new.full_name,
      'Name: ' || new.full_name || E'\nPhone: ' || new.phone || E'\nEmail: ' || coalesce(new.email,'-') ||
      E'\nService: ' || coalesce(new.service,'-') || E'\nPreferred: ' || coalesce(new.preferred_date::text,'-') || ' ' || coalesce(new.preferred_time,''), 'appointment_requests', new.id);
  end loop;
  if new.email is not null then
    insert into public.notification_outbox(kind, to_email, subject, body, ref_table, ref_id)
    values ('appointment_ack', new.email, 'Your consultation request - RECOUP Health',
      'Hello ' || new.full_name || E',\n\nWe have received your consultation request and will confirm shortly.\n\nRECOUP Health, Bangalore', 'appointment_requests', new.id);
  end if;
  return new;
end $$;
drop trigger if exists trg_appt_notify on public.appointment_requests;
create trigger trg_appt_notify after insert on public.appointment_requests for each row execute function public.enqueue_appointment_notifications();

create or replace function public.enqueue_order_notifications() returns trigger
language plpgsql security definer set search_path = public as $$
declare e text;
begin
  foreach e in array public.admin_recipients() loop
    insert into public.notification_outbox(kind, to_email, subject, body, ref_table, ref_id)
    values ('order_admin', e, 'New order ' || new.order_number || ' (INR ' || new.total_inr || ')',
      'Customer: ' || new.customer_name || E'\nPhone: ' || new.phone || E'\nPayment: ' || new.payment_method, 'orders', new.id);
  end loop;
  insert into public.notification_outbox(kind, to_email, subject, body, ref_table, ref_id)
  values ('order_confirmation', new.email, 'Your order ' || new.order_number || ' - RECOUP Health',
    'Hello ' || new.customer_name || E',\n\nThank you for your order ' || new.order_number || E'. Total: INR ' || new.total_inr ||
    E'.\nTrack your order on the RECOUP website using your order number.\n\nRECOUP Health', 'orders', new.id);
  return new;
end $$;
drop trigger if exists trg_orders_notify on public.orders;
create trigger trg_orders_notify after insert on public.orders for each row execute function public.enqueue_order_notifications();

-- =====================================================================
-- 9. admin dashboard numbers
-- =====================================================================
create or replace function public.admin_stats() returns jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  return jsonb_build_object(
    'leads_total', (select count(*) from public.leads),
    'leads_new', (select count(*) from public.leads where status = 'new'),
    'appointments_new', (select count(*) from public.appointment_requests where status = 'new'),
    'subscribers', (select count(*) from public.newsletter_subscribers where unsubscribed_at is null),
    'orders_total', (select count(*) from public.orders),
    'orders_open', (select count(*) from public.orders where status in ('pending_payment','processing','shipped')),
    'revenue_paid_inr', (select coalesce(sum(total_inr),0) from public.orders where payment_status = 'paid'),
    'products', (select count(*) from public.products),
    'low_stock', (select count(*) from public.products where track_inventory and stock_qty <= low_stock_threshold),
    'courses', (select count(*) from public.courses),
    'quiz_results', (select count(*) from public.quiz_results),
    'chats', (select count(*) from public.ai_conversations),
    'outbox_queued', (select count(*) from public.notification_outbox where status = 'queued'));
end $$;
revoke all on function public.admin_stats() from public;
grant execute on function public.admin_stats() to authenticated;

-- =====================================================================
-- 10. storage buckets (public read by URL, admin-only write)
-- =====================================================================
insert into storage.buckets (id, name, public) values
  ('media','media',true), ('brochures','brochures',true), ('gallery','gallery',true), ('products','products',true)
on conflict (id) do nothing;

drop policy if exists "recoup admin read" on storage.objects;
create policy "recoup admin read" on storage.objects for select to authenticated
  using (bucket_id in ('media','brochures','gallery','products') and public.is_admin());
drop policy if exists "recoup admin insert" on storage.objects;
create policy "recoup admin insert" on storage.objects for insert to authenticated
  with check (bucket_id in ('media','brochures','gallery','products') and public.is_admin());
drop policy if exists "recoup admin update" on storage.objects;
create policy "recoup admin update" on storage.objects for update to authenticated
  using (bucket_id in ('media','brochures','gallery','products') and public.is_admin());
drop policy if exists "recoup admin delete" on storage.objects;
create policy "recoup admin delete" on storage.objects for delete to authenticated
  using (bucket_id in ('media','brochures','gallery','products') and public.is_admin());
