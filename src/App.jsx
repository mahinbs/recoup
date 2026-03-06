import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import SecondBellOverview from './pages/second-bell/Overview';
import SecondBellFramework from './pages/second-bell/Framework';
import SecondBellSchoolProgram from './pages/second-bell/SchoolProgram';
import SecondBellInterventions from './pages/second-bell/Interventions';
import SecondBellHowItWorks from './pages/second-bell/HowItWorks';
import SecondBellRSHS from './pages/second-bell/RSHS';
import Layout from './pages/second-bell/Layout';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Global Contact Route */}
        <Route path='/contact' element={<Layout />}>
          <Route index element={<ContactPage />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
