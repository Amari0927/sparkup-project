import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import { ReturnServiceBtn } from '../../components/ReturnServiceBtn'

const acInstallationServices = [
    {
        category: 'Assessment and Consultation',
        items: [
            { title: 'Site Survey', description: 'Comprehensive on-site evaluation to assess room size, layout, insulation, and the most suitable location for the indoor and outdoor units.' },
            { title: 'Cooling Requirements Analysis', description: 'Assessment of cooling needs to determine the appropriate air conditioning capacity (BTU rating) for maximum comfort and efficiency.' },
            { title: 'Installation Planning', description: 'Strategic planning of indoor and outdoor unit placement to optimize airflow, performance, accessibility, and aesthetics.' },
        ],
    },
    {
        category: 'Air Conditioning Unit Selection',
        items: [
            { title: 'Residential and Commercial Applications', description: 'Recommendations based on the specific cooling requirements of homes, offices, retail spaces, and commercial facilities.' },
            { title: 'Inverter vs. Non-Inverter Systems', description: 'Guidance on selecting the most suitable system, with inverter units offering greater energy efficiency and temperature control.' },
            { title: 'Capacity and Efficiency Selection', description: 'Assistance in choosing the correct unit size and energy-efficiency rating to ensure reliable performance and lower operating costs.' },
        ],
    },
    {
        category: 'Split Unit Installation',
        items: [
            { title: 'Indoor Unit Mounting', description: 'Secure installation of the indoor unit in the optimal location to provide even air distribution and efficient cooling.' },
            { title: 'Outdoor Unit Placement', description: 'Proper positioning and mounting of the outdoor condenser unit to ensure adequate airflow, accessibility for maintenance, and minimal noise impact.' },
            { title: 'Refrigerant Piping Installation', description: 'Professional installation of refrigerant lines, insulation, and drainage piping to ensure efficient operation and prevent leaks.' },
            { title: 'Electrical Connections', description: 'Safe installation of power supplies, disconnects, and control wiring in accordance with electrical standards and manufacturer specifications.' },
        ],
    },
    {
        category: 'System Setup and Commissioning',
        items: [
            { title: 'Vacuum and Pressure Testing', description: 'Thorough testing of refrigerant lines to remove moisture and verify system integrity before commissioning.' },
            { title: 'System Start-Up', description: 'Complete system commissioning, including performance checks, temperature testing, and operational verification.' },
            { title: 'Remote Control Configuration', description: 'Setup and demonstration of system controls, operating modes, timers, and energy-saving features.' },
        ],
    },
]

export const ACInstallationLearnMore = () => {
    return (
        <>
            <Navbar/>
            <div className='py-16 pt-[100px] md:pt-[140px]'>
                <div className=' relative top-14 left-16'>
                    <ReturnServiceBtn/>
                </div>
                <main className='container mx-auto px-6 lg:px-20'>
                    <section className='text-center mb-12'>
                        <h1 className='text-[#2ecc71] font-semibold text-lg'>AC Installation</h1>
                        <h2 className='text-2xl font-bold text-gray-700 md:text-3xl'>Professional Split Unit Air Conditioning Installation Services</h2>
                        <p className='mt-4 text-gray-600 text-lg'>We provide high-quality split unit air conditioning installation services, ensuring efficient cooling, energy savings, and long-lasting performance for your home or business.</p>
                    </section>
                    {
                        acInstallationServices.map((group, index) => (
                            <section key={index} className='mb-12'>
                                <h3 className='text-2xl font-semibold text-gray-700 mb-6'>{group.category}</h3>
                                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                                    {
                                        group.items.map((service, i) => (
                                            <div key={i} className='bg-gray-100 p-6 rounded-lg shadow-md'>
                                                <h4 className='text-lg font-semibold text-[#2ecc71]'>{service.title}</h4>
                                                <p className='text-gray-700 mt-2'>{service.description}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </section>
                        ))
                    }
                </main>
            </div>
            <CTA/>
            <Footer/>
        </>
    )
}