import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import { ReturnServiceBtn } from '../../components/ReturnServiceBtn'

const acServices = [
    { title: 'Air Filter Cleaning & Replacement', description: 'Improve air quality and system efficiency by cleaning or replacing your air filters regularly, ensuring optimal airflow.', },
    { title: 'Coil Cleaning', description: 'Keep your system running efficiently by removing dirt and debris from the evaporator and condenser coils, preventing overheating and system strain.', },
    { title: 'Condenser Unit Inspection & Cleaning', description: 'Ensure your AC operates at peak performance by inspecting and cleaning the condenser unit, removing blockages and enhancing cooling efficiency.', },
]

export const ACLearnMore = () => {
    return (
        <>
            <Navbar/>
            <div className='py-16 pt-[100px] md:pt-[140px]'>
                <div className=' relative top-14 left-16'>
                    <ReturnServiceBtn/>
                </div>
                <main className='container mx-auto px-6 lg:px-20'>
                    <section className='text-center mb-12'>
                            <h1 className='text-[#2ecc71] font-semibold text-lg'>AC Maintenance</h1>
                            <h2 className='text-2xl font-bold text-gray-700 md:text-3xl'>Professional AC Maintenance</h2>
                            <p className='mt-4 text-gray-600 text-lg'>Keep your AC running efficiently with our comprehensive maintenance services. From filter replacements to coil cleaning, we ensure your system stays in top condition, offering you comfort and energy savings year-round.</p>
                    </section>
                    <section className='mb-12'>
                        <h3 className='text-2xl font-semibold text-gray-700 mb-6'> Our AC Services</h3>
                        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                acServices.map((service, index) => (
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
