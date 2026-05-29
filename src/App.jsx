import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RouteDocumentMeta from './seo/RouteDocumentMeta';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminBlogs from './pages/admin/AdminBlogs';
import AdminSiteSettings from './pages/admin/AdminSiteSettings';
import AdminSettings from './pages/admin/AdminSettings';
import RequireAdmin from './pages/admin/RequireAdmin';
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
import Academy from './pages/Academy';

function App() {
  return (
    <BrowserRouter>
      <RouteDocumentMeta />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Global Contact Route */}
        <Route path='/contact' element={<Layout />}>
          <Route index element={<ContactPage />} />
        </Route>

        {/* Blog Routes */}
        <Route path='/blog' element={<Layout />}>
          <Route index element={<Blog />} />
          <Route path=':id' element={<BlogPost />} />
        </Route>

        {/* Conditions / Programs */}
        <Route path='/conditions' element={<Layout />}>
          <Route index element={<Conditions />} />
          <Route path=':slug' element={<ConditionDetail />} />
        </Route>

        {/* EPHR Route */}
        <Route path='/ephr' element={<Layout />}>
          <Route index element={<EphrPage />} />
        </Route>

        {/* Academy Route */}
        <Route path='/academy' element={<Layout />}>
          <Route index element={<Academy />} />
        </Route>

        {/* Second Bell Routes */}
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
          <Route index element={<Navigate to='blogs' replace />} />
          <Route path='blogs' element={<AdminBlogs />} />
          <Route path='site' element={<AdminSiteSettings />} />
          <Route path='settings' element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
