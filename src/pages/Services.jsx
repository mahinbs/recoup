import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import RecoupDifference from '../components/services/RecoupDifference';
import HealingEcosystems from '../components/services/HealingEcosystems';
import TreatmentPlan from '../components/services/TreatmentPlan';

const Services = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 overflow-x-clip">
      <ServicesHero />
      <RecoupDifference />
      <HealingEcosystems />
      <TreatmentPlan />
    </div>
  );
};

export default Services;
