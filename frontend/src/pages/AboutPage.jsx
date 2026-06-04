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
                            <span className="text-[#2ecc71] font-semibold">Spark Up Electrical, Cooling & Security</span> is a
                            Barbadian owned electrical and maintenance business. Built on{" "}
                            <span className="font-medium text-gray-900">expertise, dedication, and trust</span>,
                            we provide top-quality services to residential and commercial clients across the island.
                            </p>

                            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                                Brandon, a certified electrician progressing
                                toward full licensing, leads a distinguished team committed to delivering exceptional electrical
                                and maintenance solutions. With a focus on{" "}
                                precision, reliability, and craftsmanship,
                                every project is executed to the highest professional standard.
                            </p>

                            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                                Our expertise spans complete rewiring, isolator
                                installations, tankless electric water heaters, sub-panel upgrades, and bespoke lighting solutions.
                                We also specialize in advanced services including{" "}
                                CCTV systems, air conditioning installations,
                                and structured network cabling.
                            </p>

                            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                                We also offer integrated property maintenance services,
                                positioning us as the go-to choice for seamless, all-in-one solutions. Our commitment to{" "}
                                reliability, quality, and professionalism has
                                earned us the trust of our clients and fostered long-lasting relationships built on consistent results.
                            </p>

                            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                                Serving both residential and commercial clients, we take pride in creating{" "}
                                safe, efficient, and seamlessly functioning environments{" "}
                                where quality is never compromised and excellence remains the standard.
                            </p>

                            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                                Whether it's a small repair or a large installation,{" "}
                                we respect your budget and timelines, ensuring
                                every project is completed with care and expertise.
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
                        src="/assets/boss.jpeg"
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