-- Removes the test records created while testing. Run once in the Supabase SQL editor before go-live.
-- The database had no real customer data when this was written; every row below came from testing.
delete from public.notification_outbox;
delete from public.invoices;
delete from public.order_items;
delete from public.orders;
delete from public.inventory_movements;
delete from public.leads;
delete from public.appointment_requests;
delete from public.newsletter_subscribers;
delete from public.ai_conversations;
delete from public.quiz_results;
delete from public.products where name like 'TEST%';
delete from public.product_categories where name like 'TEST%';
