import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import CTA from '../components/CTA'
import WhatsappBtn from '../components/WhatsappBtn'
const PorfolioPage = () => {
    return (
        <>
        <NavBar/>
        <section className='py-16 px-8 md:py-16 pt-[100px] md:pt-[140px]'>
            <Gallery/>
        </section>
        <CTA/>
        <WhatsappBtn/>
        <Footer/>
        </>
    )
}

export default PorfolioPage