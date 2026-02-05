import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Conditions from './components/sections/Conditions';
import PatientJourney from './components/sections/PatientJourney';
import TherapyHighlight from './components/sections/TherapyHighlight';
import DoctorProfile from './components/sections/DoctorProfile';
import Testimonials from './components/sections/Testimonials';
import AITools from './components/sections/AITools';
import Academy from './components/sections/Academy';
import BlogPreview from './components/sections/BlogPreview';
import CTABand from './components/sections/CTABand';

function App() {
  return (
    <div className="min-h-screen bg-secondary flex flex-col text-gray-800">
      <Navbar />
      <main className="flex-grow pt-0">
        <Hero />
        <Philosophy />
        <Conditions />
        <PatientJourney />
        <TherapyHighlight />
        <DoctorProfile />
        <Testimonials />
        <AITools />
        <Academy />
        <BlogPreview />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}

export default App;
