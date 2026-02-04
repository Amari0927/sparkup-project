import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsappBtn from '../components/WhatsappBtn'
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <>
            <Navbar/>
            <section className=" py-16 pt-[100px] md:pt-[140px]">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    
                    <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-[#2ecc71] font-semibold md:text-lg">ABOUT US</h1>
                    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">Who We Are</h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Electrical & Maintenance solutions you can trust.
                    </p>
                    </div>

                    
                    <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
                    
                        <div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                            Founded in <span className="font-bold text-gray-900">2021</span> by{" "}
                            <span className="font-bold text-gray-900">Brandon Ruck</span>,{" "}
                            <span className="text-[#2ecc71] font-semibold">Spark Up Maintenance</span> is a
                            Barbadian owned electrical and maintenance business. Built on{" "}
                            <span className="font-medium text-gray-900">expertise, dedication, and trust</span>,
                            we provide top-quality services to residential and commercial clients across the island.
                            </p>

                            <p className="mt-6 text-gray-700 text-lg">
                            As a <span className="font-medium text-gray-900">certified electrician</span> working
                            towards full licensing, Brandon leads a skilled team delivering{" "}
                            <span className="font-medium text-gray-900">tailored electrical and maintenance solutions</span>.
                            From installing isolators, tankless electric heaters, sub-panels, and light fixtures
                            to <span className="font-medium text-gray-900">CCTV Installation</span>, network cabling, outlet repairs, and{" "}
                            <span className="font-medium text-gray-900">General Maintenance </span>— we ensure your home or business
                            operates efficiently and safely.
                            </p>

                            <p className="mt-6 text-gray-700 text-lg">
                            We also offer <span className="font-medium text-gray-900">handyman services</span>, making us the go-to choice
                            for comprehensive maintenance solutions. Our commitment to{" "}
                            <span className="font-medium text-gray-900">reliability, quality, and professionalism</span> has
                            helped us build lasting relationships with our clients.
                            </p>

                            <p className="mt-6 text-gray-700 text-lg">
                            Whether it’s a small repair or a large installation,{" "}
                            <span className="font-medium text-gray-900">we respect your budget and timelines</span>,
                            ensuring every project is completed with care and expertise.
                            </p>

                        
                            <div className="mt-8">
                                <Link to='/form'>
                                    <button  className="px-6 py-3 bg-[#2ecc71] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#28b463] transition">
                                        Contact Us Today
                                    </button>
                                </Link>
                            </div>
                    </div>

                   
                    <div className="relative">
                        <img
                        src="/src/assets/display-pic2.jpeg"
                        alt="Spark Up Maintenance Team"
                        className="rounded-lg shadow-lg w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-lg"></div>
                    </div>
                    </div>
                </div>
                </section>
                <WhatsappBtn/>
            <Footer/>
        </>
    )
}

export default AboutPage