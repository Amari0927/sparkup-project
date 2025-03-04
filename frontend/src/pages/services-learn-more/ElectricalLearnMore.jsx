import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import { ReturnServiceBtn } from '../../components/ReturnServiceBtn'

const electricalServices = [ 
    { title: 'Wiring', description: 'Connecting circuits, power outlets, lighting, and appliances.' },
    { title: 'Panel Installation', description: 'Setting up main electrical panels, subpanels, and breakers.' },
    { title: 'Interior & Exterior Lighting', description: 'Installing indoor and outdoor lights, including garden and security lighting.' },
    { title: 'Socket Installation', description: 'Adding power outlets, USB charging ports, and high-power device outlets.' },
    { title: 'Switches & Dimmers', description: 'Installing standard and dimmer switches for customized lighting control.' },
    { title: 'Appliance Connections', description: 'Setting up large household appliances such as ovens and washing machines.' },
    { title: 'Electrical Upgrades', description: 'Upgrading electrical systems to handle higher loads and improve efficiency.' }
]
const steps = [ 
    { step: 'Inspection', detail: 'We assess your electrical needs and safety requirements.' },
    { step: 'Planning', detail: 'Our experts design a tailored solution for your space.' },
    { step: 'Installation', detail: 'Professional and efficient electrical installation by certified technicians.' },
    { step: 'Testing & Support', detail: 'We test all installations and provide ongoing support.' }
]
const ElectricalLearnMore = () => {
    return (
        <>
            <Navbar/>
            <div className='py-16 pt-[100px] md:pt-[140px]'>
                <div className=' relative top-14 left-16'>
                    <ReturnServiceBtn/>
                </div>
                <main className='container mx-auto px-6 lg:px-20'>
                        <section className='text-center mb-12'>
                            <h1 className='text-[#2ecc71] font-semibold text-lg'>ELECTRICAL INSTALLATION</h1>
                            <h2 className='text-2xl font-bold text-gray-700 md:text-3xl'>Professional Electrical Services</h2>
                            <p className='mt-4 text-gray-600 text-lg'>We provide reliable and safe electrical installation services, ensuring your home or business meets modern standards and efficiency requirements.</p>
                        </section>
                        <section className='mb-12'>
                            <h3 className='text-2xl font-semibold text-gray-700 mb-6'>Our Electrical Services</h3>
                            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                                {
                                    electricalServices.map((service, index) => (
                                        <div key={index} className='bg-gray-100 p-6 rounded-lg shadow-md'>
                                            <h4 className='text-lg font-semibold text-[#2ecc71]'>{service.title}</h4>
                                            <p className='text-gray-700 mt-2'>{service.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                        <section className='mb-12'>
                        <h3 className='text-2xl font-semibold text-gray-700 mb-6'>How It Works</h3>
                        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
                            {
                                steps.map((process, index) => (
                                    <div key={index} className='bg-gray-100 p-6 rounded-lg shadow-md'>
                                        <h4 className='text-lg font-semibold text-[#2ecc71]'>{process.step}</h4>
                                        <p className='text-gray-700 mt-2'>{process.detail}</p>
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

export default ElectricalLearnMore