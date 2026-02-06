

const AboutUs = () => {
    return (
        <section className='py-16 bg-white'>
            <div className='mx-auto px-6 md:px-12 lg:px-20'>
                <div className='text-center mb-10'>
                <h1 className='text-[#2ecc71] font-semibold uppercase text-lg tracking-wide'>
                    About Us
                </h1>
                <h2 className='text-3xl font-bold text-gray-700 md:text-4xl'>
                    SparkUp Maintenance
                </h2>
            </div>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    <div>
                        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                            Founded in <span className="font-bold">2021</span> by{" "}
                            <span className="font-bold">Brandon Ruck</span>,{" "}
                            <span className="text-[#2ecc71] font-semibold">
                                Spark Up Maintenance
                            </span>{" "}
                            is a
                            Barbadian owned electrical and maintenance business.
                            We specialize in <span className="font-medium">Electrical Installations, CCTV Security, Network Cabling and General Maintenance</span>,
                            ensuring homes and businesses run safely and efficiently.
                            </p>

                            <p className="mt-4 text-gray-700 text-lg">
                            Our skilled team is committed to <span className="font-medium">reliability, quality, and customer satisfaction</span>,
                            offering top-tier solutions tailored to your needs.
                            </p>
                            <button className="mt-6">
                                <a
                                    href="/about"
                                    className="px-6 py-3 bg-[#2ecc71] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#28b463] transition"
                                >
                                    Learn More
                                </a>
                            </button>
                    </div>
                    <div className="relative">
                        <img
                        src="/assets/display-pic.jpeg"
                        alt="Spark Up Maintenance Team"
                        className="rounded-lg shadow-lg w-full object-cover h-[600px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs