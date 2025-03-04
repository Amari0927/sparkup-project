import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import { ReturnServiceBtn } from '../../components/ReturnServiceBtn'

const plumbingServices = [
    { title: 'Leaky Faucet Repair', description: 'Say goodbye to drips and water waste. Our experts quickly repair or replace leaky faucets to restore your peace of mind.',},
    { title: 'Damaged Pipe Repair', description: 'Whether it’s a cracked or corroded pipe, we provide efficient replacements to prevent further damage and ensure your plumbing system runs smoothly.',},
]

const PlumbingLearnMore = () => {
    return (
        <>
            <Navbar/>
            <div className='py-16 pt-[100px] md:pt-[140px]'>
                <div className=' relative top-14 left-16'>
                    <ReturnServiceBtn/>
                </div>
                <main className='container mx-auto px-6 lg:px-20'>
                    <section className='text-center mb-12'>
                        <h1 className='text-[#2ecc71] font-semibold text-lg'>PLUMBING MAINTENANCE</h1>
                        <h2 className='text-2xl font-bold text-gray-700 md:text-3xl'>Professional Plumbing Maintenace</h2>
                        <p className='mt-4 text-gray-600 text-lg'>Ensure your plumbing system stays in perfect working order with our expert maintenance services. From leaky faucet repairs to pipe replacements, we provide reliable solutions to prevent costly damage and maintain efficiency.</p>
                    </section>
                    <section className='mb-12'>
                        <h3 className='text-2xl font-semibold text-gray-700 mb-6'>Our Plumbing Services</h3>
                        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {
                                    plumbingServices.map((service, index) => (
                                        <div key={index} className='bg-gray-100 p-6 rounded-lg shadow-md'>
                                            <h4 className='text-lg font-semibold text-[#2ecc71]'>{service.title}</h4>
                                            <p className='text-gray-700 mt-2'>{service.description}</p>
                                        </div>
                                    ))
                                }
                        </div>
                    </section>
                </main>
            </div>
            <CTA/>
            <Footer/>
        </>
    )
}

export default PlumbingLearnMore