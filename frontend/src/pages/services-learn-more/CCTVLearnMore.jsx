import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import { ReturnServiceBtn } from '../../components/ReturnServiceBtn'

const assessmentSteps = [
    { step: "Site Survey", detail: "On-site evaluation to assess the property’s layout, security needs, and best camera placements." },
    { step: "Security Needs Analysis", detail: "Discuss security concerns to determine the number and type of cameras required." },
    { step: "Camera Placement", detail: "Strategic placement to ensure optimal coverage, minimizing blind spots." }
];

const cameraSelection = [
    { title: "Indoor vs. Outdoor Cameras", description: "Outdoor cameras need to be weather-resistant, while indoor cameras focus on internal security." },
    { title: "Wired vs. Wireless", description: "Wired cameras require cables for power and data, while wireless cameras use Wi-Fi for flexibility." }
];

const installationSteps = [
    { step: "Mounting Cameras", detail: "Technicians mount cameras strategically for optimal security coverage." },
    { step: "Wiring and Power", detail: "Proper setup of cables for wired cameras, ensuring stable power and network connections." },
    { step: "Network Setup", detail: "Connecting IP-based or wireless systems to enable remote viewing and control." }
];



const CCTVLearnMore = () => {
    return (
        <>
            <Navbar/>
            <div className='py-16 pt-[100px] md:pt-[140px]'>
                <div className=' relative top-14 left-16'>
                    <ReturnServiceBtn/>
                </div>
                <main className='container mx-auto px-6 lg:px-20'>
                    <section className='text-center mb-12'>
                        <h1 className='text-[#2ecc71] font-semibold text-lg'>CCTV INSTALLATION</h1>
                        <h2 className='text-2xl font-bold text-gray-700 md:text-3xl'>Professional CCTV Services</h2>
                        <p className='mt-4 text-gray-600 text-lg'>We provide high-quality CCTV installation services, ensuring your property remains secure with the latest surveillance technology.</p>
                    </section>
                    <section className='mb-10'>
                    <h3 className='text-2xl font-semibold text-gray-700 mb-6'>Assessment and Consultation</h3>
                        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                            {assessmentSteps.map((item, index) => (
                                <div key={index} className='bg-gray-100 p-6 rounded-lg shadow-md'>
                                    <h4 className='text-lg font-semibold text-[#2ecc71]'>{item.step}</h4>
                                    <p className='text-gray-700 mt-2'>{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className='text-2xl font-semibold text-gray-700 mb-6'>Camera Selection</h3>
                        <div className='grid gap-6 md:grid-cols-2'>
                            {cameraSelection.map((item, index) => (
                                <div key={index} className='bg-gray-100 p-6 rounded-lg shadow-md'>
                                    <h4 className='text-lg font-semibold text-[#2ecc71]'>{item.title}</h4>
                                    <p className='text-gray-700 mt-2'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className='text-2xl font-semibold text-gray-700 mb-6 mt-8'>Installation of CCTV Cameras</h3>
                        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                            {installationSteps.map((item, index) => (
                                <div key={index} className='bg-gray-100 p-6 rounded-lg shadow-md'>
                                    <h4 className='text-lg font-semibold text-[#2ecc71]'>{item.step}</h4>
                                    <p className='text-gray-700 mt-2'>{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
            <CTA/>
            <Footer/>
        </>
    )
}

export default CCTVLearnMore