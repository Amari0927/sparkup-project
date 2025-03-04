import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="text-gray-700  text-center p-8 flex flex-col justify-center items-center md:py-16 pt-[100px]  md:pt-[140px]">
            <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#2ecc71] leading-tight mb-4">
                    Lighting the Way to a <span className="animate-brighter text-[#2ecc71]">Brighter</span> Future
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-xl mx-auto">
                    Offering advanced CCTV surveillance systems alongside electrical and maintenance solutions, 
                    we prioritize safety, efficiency, and customer satisfaction.
                </p>
                <Link to='/form'>
                    <button 
                        className="bg-[#2ecc71] px-8 py-3 rounded-lg text-white font-semibold text-lg 
                                    hover:bg-[#27ae60] hover:shadow-lg transition duration-300 mt-6">
                        Free Quote
                    </button>
                </Link>
                
            </div>
        </section>
    )
}

export default Hero