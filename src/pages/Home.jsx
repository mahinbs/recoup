import '../styles/home-preview.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppFloat from '../components/layout/WhatsAppFloat'
import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import Philosophy from '../components/sections/Philosophy'
import Treatments from '../components/sections/Treatments'
import HomeStats from '../components/sections/HomeStats'
import TherapyHighlight from '../components/sections/TherapyHighlight'
import PatientJourney from '../components/sections/PatientJourney'
import DoctorProfile from '../components/sections/DoctorProfile'
import Awards from '../components/sections/Awards'
import Appointments from '../components/sections/Appointments'
import Testimonials from '../components/sections/Testimonials'
import CTABand from '../components/sections/CTABand'
// import MediaLogos from '../components/sections/MediaLogos'
// import Impact from '../components/sections/Impact'
// import AICheckupCTA from '../components/sections/AICheckupCTA'
// import BlogPreview from '../components/sections/BlogPreview'
// import AITools from '../components/sections/AITools'
// import Academy from '../components/sections/Academy'

const Home = () => {
    return (
        <div className="home-preview min-h-screen bg-secondary flex flex-col text-gray-800 overflow-x-clip">
            <Navbar />
            <main className="flex-grow pt-0">
                <Hero />
                <TrustBar />
                <Philosophy />
                <Treatments />
                <HomeStats />
                <TherapyHighlight />
                <PatientJourney />
                <DoctorProfile />
                <Awards />
                <Appointments />
                <Testimonials />
                <CTABand />
            </main>
            <Footer />
            <WhatsAppFloat />
        </div>
    )
}

export default Home
