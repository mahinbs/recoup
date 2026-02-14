import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import Philosophy from '../components/sections/Philosophy'
import Impact from '../components/sections/Impact'
import Treatments from '../components/sections/Treatments'
import TherapyHighlight from '../components/sections/TherapyHighlight'
import DoctorProfile from '../components/sections/DoctorProfile'
import AICheckupCTA from '../components/sections/AICheckupCTA'
import BlogPreview from '../components/sections/BlogPreview'
import Footer from '../components/layout/Footer'

const Home = () => {
    return (
        <div className="min-h-screen bg-secondary flex flex-col text-gray-800">
            <Navbar />
            <main className="flex-grow pt-0">
                <Hero />
                <Philosophy />
                <Impact />
                <Treatments />
                {/* <PatientJourney /> */}
                <DoctorProfile />
                <TherapyHighlight />
                {/* <Testimonials /> */}
                <AICheckupCTA />
                {/* <AITools /> */}
                {/* <Academy /> */}
                <BlogPreview />
                {/* <CTABand /> */}
            </main>
            <Footer />
        </div>
    )
}

export default Home