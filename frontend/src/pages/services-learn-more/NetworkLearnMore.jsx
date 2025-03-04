import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import { ReturnServiceBtn } from '../../components/ReturnServiceBtn'

const networkServices = [ 
    { title: 'Data Point Installation', description: 'Strategic placement of data outlets for seamless connectivity.' },
    { title: 'Ethernet Cabling', description: 'Professional wiring using high-quality cables.' },
    { title: 'Network Rack Setup', description: 'Installation of structured racks for organized networking equipment.' },
    { title: 'Wi-Fi Access Points', description: 'Mounting and configuring wireless access points for optimal coverage.' },
    { title: 'Patch Panel Installation', description: 'Efficient cable management and structured network connectivity.' },
    { title: 'Switch & Router Setup', description: 'Installation and configuration of switches and routers for network efficiency.' },
    { title: 'Network Testing & Optimization', description: 'Ensuring high-speed and stable connections with professional testing.' }
]

const steps = [ 
    { step: 'Assessment', detail: 'We evaluate your networking requirements and site layout.' },
    { step: 'Planning', detail: 'A customized cabling plan is designed for efficiency and scalability.' },
    { step: 'Installation', detail: 'Expert cabling and network point installation by professionals.' },
    { step: 'Testing & Support', detail: 'Comprehensive testing and ongoing support for optimal performance.' }
]

const NetworkCablingLearnMore = () => {
    return (
        <>
            <Navbar/>
            <div className='py-16 pt-[100px] md:pt-[140px]'>
                <div className=' relative top-14 left-16'>
                    <ReturnServiceBtn/>
                </div>
                <main className='container mx-auto px-6 lg:px-20'>
                        <section className='text-center mb-12'>
                            <h1 className='text-[#2ecc71] font-semibold text-lg'>NETWORK CABLING</h1>
                            <h2 className='text-2xl font-bold text-gray-700 md:text-3xl'>Professional Network Installation</h2>
                            <p className='mt-4 text-gray-600 text-lg'>We offer expert network cabling solutions, ensuring a reliable and high-performance infrastructure for homes and businesses.</p>
                        </section>
                        <section className='mb-12'>
                            <h3 className='text-2xl font-semibold text-gray-700 mb-6'>Our Network Services</h3>
                            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                                {
                                    networkServices.map((service, index) => (
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

export default NetworkCablingLearnMore
