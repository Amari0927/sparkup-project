import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Reviews from "../components/Reviews"
import Services from "../components/Services"
import Why from "../components/Why"
import CTA from "../components/CTA"
import AboutUs from "../components/AboutUs"
import Showcase from "../components/Showcase"
import WhatsappBtn from "../components/WhatsappBtn"


const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <AboutUs/>
            <Why/>
            <Showcase/>
            <Reviews />
            <CTA/>
            <WhatsappBtn/>
            <Footer />
        </>
    )
}

export default LandingPage