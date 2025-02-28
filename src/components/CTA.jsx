import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="bg-[#2ecc71] text-white text-center py-16 px-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Get Your Free Quote Today!
            </h2>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Experience top-notch electrical and maintenance solutions tailored to your needs. Request your personalized quote today and let our experts ensure your space operates at its best.
            </p>
            <Link to='/form'>
                <button className='bg-white px-8 py-3 rounded-lg text-[#2ecc71] font-medium text-lg 
                                    hover:bg-gray-200 transition duration-300 ease-in-out 
                                    transform hover:scale-105 md:mt-4'>
                    Free Quote
                </button>
            </Link>
            
        </section>
    )
}

export default CTA