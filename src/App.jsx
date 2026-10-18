import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import RouteDocumentMeta from './seo/RouteDocumentMeta';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import SecondBellOverview from './pages/second-bell/Overview';
import SecondBellFramework from './pages/second-bell/Framework';
import SecondBellSchoolProgram from './pages/second-bell/SchoolProgram';
import SecondBellInterventions from './pages/second-bell/Interventions';
import SecondBellHowItWorks from './pages/second-bell/HowItWorks';
import SecondBellRSHS from './pages/second-bell/RSHS';
import Layout from './pages/second-bell/Layout';
import Conditions from './pages/Conditions';
import ConditionDetail from './pages/ConditionDetail';
import EphrPage from './pages/EphrPage';
import HypermobilityPage from './pages/HypermobilityPage';
import FunctionalNutritionPage from './pages/FunctionalNutritionPage';
import Academy from './pages/Academy';
import Services from './pages/Services';
import RequireAdmin from './pages/admin/RequireAdmin';
import AdminLogin from './pages/admin/AdminLogin';
import BatchBanner from './components/academy/BatchBanner';
import ChatWidget from './components/ai/ChatWidget';

// new modules are code-split so the public pages stay light
const l = (loader) => lazy(loader);
const Testimonials = l(() => import('./pages/Testimonials'));
const Book = l(() => import('./pages/Book'));
const AcademyCourses = l(() => import('./pages/AcademyCourses'));
const AcademyCourseDetail = l(() => import('./pages/AcademyCourseDetail'));
const Shop = l(() => import('./pages/shop/Shop'));
const ProductPage = l(() => import('./pages/shop/ProductPage'));
const CartPage = l(() => import('./pages/shop/CartPage'));
const OrderPage = l(() => import('./pages/shop/OrderPage'));
const ToolsHub = l(() => import('./pages/tools/ToolsHub'));
const DoshaQuiz = l(() => import('./pages/tools/DoshaQuiz'));
const MetabolicAge = l(() => import('./pages/tools/MetabolicAge'));
const FitnessReadiness = l(() => import('./pages/tools/FitnessReadiness'));

const AdminLayout = l(() => import('./pages/admin/AdminLayout'));
const AdminDashboard = l(() => import('./pages/admin/AdminDashboard'));
const AdminBlogs = l(() => import('./pages/admin/AdminBlogs'));
const AdminLeads = l(() => import('./pages/admin/AdminLeads'));
const AdminAppointments = l(() => import('./pages/admin/AdminAppointments'));
const AdminTestimonials = l(() => import('./pages/admin/AdminTestimonials'));
const AdminNewsletter = l(() => import('./pages/admin/AdminNewsletter'));
const AdminOutbox = l(() => import('./pages/admin/AdminOutbox'));
const AdminSiteConfig = l(() => import('./pages/admin/AdminSiteConfig'));
const AdminSiteSettings = l(() => import('./pages/admin/AdminSiteSettings'));
const AdminSettings = l(() => import('./pages/admin/AdminSettings'));
const AdminCourses = l(() => import('./pages/admin/academy/AdminCourses'));
const AdminBatches = l(() => import('./pages/admin/academy/AdminBatches'));
const AdminGallery = l(() => import('./pages/admin/academy/AdminGallery'));
const AdminProducts = l(() => import('./pages/admin/shop/AdminProducts'));
const AdminCategories = l(() => import('./pages/admin/shop/AdminCategories'));
const AdminCoupons = l(() => import('./pages/admin/shop/AdminCoupons'));
const AdminOrders = l(() => import('./pages/admin/shop/AdminOrders'));
const AdminInventory = l(() => import('./pages/admin/shop/AdminInventory'));
const AdminReviews = l(() => import('./pages/admin/shop/AdminReviews'));
const AdminKnowledge = l(() => import('./pages/admin/ai/AdminKnowledge'));
const AdminChats = l(() => import('./pages/admin/ai/AdminChats'));
const AdminQuizResults = l(() => import('./pages/admin/ai/AdminQuizResults'));

const Loading = () => <div className="flex min-h-[40vh] items-center justify-center text-slate-400">Loading…</div>;

/** Floating extras shown on public pages only (never in the admin). */
function SiteExtras() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/admin')) return null;
  return (
    <>
      <BatchBanner />
      <ChatWidget />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RouteDocumentMeta />
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/contact' element={<Layout />}>
            <Route index element={<ContactPage />} />
          </Route>

          <Route path='/book' element={<Layout />}>
            <Route index element={<Book />} />
          </Route>

          <Route path='/blog' element={<Layout />}>
            <Route index element={<Blog />} />
            <Route path=':id' element={<BlogPost />} />
          </Route>

          <Route path='/testimonials' element={<Layout />}>
            <Route index element={<Testimonials />} />
          </Route>

          <Route path='/services' element={<Layout />}>
            <Route index element={<Services />} />
          </Route>

          <Route path='/conditions' element={<Layout />}>
            <Route index element={<Conditions />} />
            <Route path=':slug' element={<ConditionDetail />} />
          </Route>

          <Route path='/ephr' element={<Layout />}>
            <Route index element={<EphrPage />} />
          </Route>

          <Route path='/hypermobility' element={<Layout />}>
            <Route index element={<HypermobilityPage />} />
          </Route>

          <Route path='/functional-nutrition' element={<Layout />}>
            <Route index element={<FunctionalNutritionPage />} />
          </Route>

          <Route path='/academy' element={<Layout />}>
            <Route index element={<Academy />} />
            <Route path='courses' element={<AcademyCourses />} />
            <Route path='courses/:slug' element={<AcademyCourseDetail />} />
          </Route>

          <Route path='/shop' element={<Layout />}>
            <Route index element={<Shop />} />
            <Route path=':slug' element={<ProductPage />} />
          </Route>
          <Route path='/cart' element={<Layout />}>
            <Route index element={<CartPage />} />
          </Route>
          <Route path='/order' element={<Layout />}>
            <Route index element={<OrderPage />} />
          </Route>

          <Route path='/tools' element={<Layout />}>
            <Route index element={<ToolsHub />} />
            <Route path='dosha-quiz' element={<DoshaQuiz />} />
            <Route path='metabolic-age' element={<MetabolicAge />} />
            <Route path='fitness-readiness' element={<FitnessReadiness />} />
          </Route>

          <Route path='/second-bell' element={<Layout />}>
            <Route index element={<SecondBellOverview />} />
            <Route path='framework' element={<SecondBellFramework />} />
            <Route path='program' element={<SecondBellSchoolProgram />} />
            <Route path='interventions' element={<SecondBellInterventions />} />
            <Route path='how-it-works' element={<SecondBellHowItWorks />} />
            <Route path='rshs' element={<SecondBellRSHS />} />
          </Route>

          <Route path='/admin/login' element={<AdminLogin />} />
          <Route
            path='/admin'
            element={
              <RequireAdmin>
                <AdminLayout />
              </RequireAdmin>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path='blogs' element={<AdminBlogs />} />
            <Route path='leads' element={<AdminLeads />} />
            <Route path='appointments' element={<AdminAppointments />} />
            <Route path='testimonials' element={<AdminTestimonials />} />
            <Route path='newsletter' element={<AdminNewsletter />} />
            <Route path='outbox' element={<AdminOutbox />} />
            <Route path='config' element={<AdminSiteConfig />} />
            <Route path='site' element={<AdminSiteSettings />} />
            <Route path='settings' element={<AdminSettings />} />
            <Route path='academy/courses' element={<AdminCourses />} />
            <Route path='academy/batches' element={<AdminBatches />} />
            <Route path='academy/gallery' element={<AdminGallery />} />
            <Route path='shop/products' element={<AdminProducts />} />
            <Route path='shop/categories' element={<AdminCategories />} />
            <Route path='shop/coupons' element={<AdminCoupons />} />
            <Route path='shop/orders' element={<AdminOrders />} />
            <Route path='shop/inventory' element={<AdminInventory />} />
            <Route path='shop/reviews' element={<AdminReviews />} />
            <Route path='ai/knowledge' element={<AdminKnowledge />} />
            <Route path='ai/chats' element={<AdminChats />} />
            <Route path='ai/quizzes' element={<AdminQuizResults />} />
            <Route path='*' element={<Navigate to='/admin' replace />} />
          </Route>
        </Routes>
      </Suspense>
      <SiteExtras />
    </BrowserRouter>
  );
}

export default App;
