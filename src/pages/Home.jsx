import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import Philosophy from '../components/sections/Philosophy'
import Impact from '../components/sections/Impact'
import Treatments from '../components/sections/Treatments'
import TherapyHighlight from '../components/sections/TherapyHighlight'
import DoctorProfile from '../components/sections/DoctorProfile'
import AICheckupCTA from '../components/sections/AICheckupCTA'
import BlogPreview from '../components/sections/BlogPreview'
import Testimonials from '../components/sections/Testimonials'
import MediaLogos from '../components/sections/MediaLogos'
import Footer from '../components/layout/Footer'

const Home = () => {
    return (
        <div className="min-h-screen bg-secondary flex flex-col text-gray-800">
            <Navbar />
            <main className="flex-grow pt-0">
                <Hero />
                <MediaLogos />
                <Philosophy />
                <Impact />
                <Treatments />
                {/* <PatientJourney /> */}
                <DoctorProfile />
                <TherapyHighlight />
                <AICheckupCTA />
                {/* <AITools /> */}
                {/* <Academy /> */}
                <BlogPreview />
                <Testimonials />
                {/* <CTABand /> */}
            </main>
            <Footer />
        </div>
    )
}

export default Home