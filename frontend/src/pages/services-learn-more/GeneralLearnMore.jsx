import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import { ReturnServiceBtn } from '../../components/ReturnServiceBtn'

const GeneralLearnMore = () => {
    const services = [
        { 
            title: "Power Pressure Washing", 
            description: "We use high-powered pressure washing techniques to remove dirt, grime, mold, and mildew from various surfaces. This service restores the fresh look of your property and prevents long-term damage caused by buildup.",
            details: [
                "Exterior Walls and Siding – Removes dirt, algae, and mold for a cleaner, fresher look.",
                "Driveways and Walkways – Eliminates stains, oil spots, and dirt buildup to improve curb appeal.",
                "Decks and Patios – Prevents wood rot and discoloration by removing mildew and stains."
            ]
        },
        { 
            title: "Smoke Detector/Carbon Monoxide Detector Testing", 
            description: "Your safety is our priority. We test the battery life of your smoke and carbon monoxide detectors to ensure they are working properly. If needed, we replace old batteries to keep your home protected from potential hazards."
        },
        { 
            title: "Furniture Assembly", 
            description: "Avoid the hassle of complicated instructions and missing tools. We professionally assemble a variety of furniture, from bookshelves to office desks, ensuring stability and durability."
        },
        { 
            title: "TV Mounting", 
            description: "Get the perfect viewing experience with our secure TV mounting service. We handle everything from finding the right placement to securing the mount to the wall, ensuring your TV is safely installed.",
            details: [
                "Stud-finding and wall mounting",
                "Cable management for a clean look",
                "Secure and level installation"
            ]
        },
        { 
            title: "Shelves Installation", 
            description: "Enhance your space with functional and stylish shelves. Whether you need floating shelves, bookshelves, or custom storage solutions, we ensure proper alignment, secure mounting, and a polished finish."
        }
    ];

    return (
        <>
            <Navbar/>
            <div className='py-16 pt-[100px] md:pt-[140px]'>
                <div className=' relative top-14 left-16'>
                    <ReturnServiceBtn/>
                </div>
                <main className='container mx-auto px-6 lg:px-20'>
                    <section className='text-center mb-12'>
                        <h1 className='text-[#2ecc71] font-semibold text-lg'>GENERAL MAINTENANCE SERVICES</h1>
                        <h2 className='text-2xl font-bold text-gray-700 md:text-3xl'>Reliable Home and Commercial Maintenance</h2>
                        <p className='mt-4 text-gray-600 text-lg'>We provide professional maintenance services to keep your home and business in top condition.</p>
                    </section>
                    <section className='mb-12'>
                        <h3 className='text-2xl font-semibold text-gray-700 mb-6'>Our Services</h3>
                        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                            {services.map((service, index) => (
                                <div key={index} className='bg-gray-100 p-6 rounded-lg shadow-md'>
                                    <h4 className='text-lg font-semibold text-[#2ecc71]'>{service.title}</h4>
                                    <p className='text-gray-700 mt-2'>{service.description}</p>
                                    {service.details && (
                                        <ul className='mt-2 list-disc list-inside text-gray-600'>
                                            {service.details.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
            <CTA/>
            <Footer/>
        </>
    );
}

export default GeneralLearnMore