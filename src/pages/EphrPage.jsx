import React from 'react'
import '../styles/ephr-preview.css'
import { EphrIntro, EphrClosing } from '../components/ephr-page/EphrContent'
import SampleReportSection from '../components/ephr-page/SampleReportSection'
import WhatsAppFloat from '../components/layout/WhatsAppFloat'
// import HeroSection from '../components/ephr-page/HeroSection'
// import HealthAreasSection from '../components/ephr-page/HealthAreasSection'
// import EphrJourney from '../components/ephr-page/EphrJourney'
// import SixPillars from '../components/ephr-page/SixPillars'
// import LabIntelligence from '../components/ephr-page/LabIntelligence'
// import BiologicalAge from '../components/ephr-page/BiologicalAge'
// import WhoCanBenefit from '../components/ephr-page/WhoCanBenefit'
// import FinalCTA from '../components/ephr-page/FinalCTA'

const EphrPage = () => {
    return (
        <div className="ephr-preview bg-white min-h-screen text-slate-900 font-sans overflow-x-clip selection:bg-primary selection:text-white pb-8">
            <main>
                <div className="ephr-preview">
                    <EphrIntro />
                </div>
                <SampleReportSection />
                <div className="ephr-preview">
                    <EphrClosing />
                </div>
            </main>
            <WhatsAppFloat />
        </div>
    )
}

export default EphrPage
