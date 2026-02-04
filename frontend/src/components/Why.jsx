import { FaShieldAlt, FaShippingFast, FaHeart, FaCheck, FaLightbulb} from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";


const Why = () => {
    return (
        <div className="py-10 px-8 bg-[#2C3E50]">
            <div className='text-center mb-10'>
                <h1 className='text-[#2ecc71] font-semibold uppercase text-lg tracking-wide'>
                    Why Choose Us?
                </h1>
                <h2 className='text-3xl font-bold text-white md:text-4xl'>
                    Experience Quality, Reliability & Care
                </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {[
                    { icon: <FaShippingFast />, text: "We Deliver" },
                    { icon: <FaHeart />, text: "We Care" },
                    { icon: <FaCheck />, text: "We Are Reliable" },
                    { icon: <FaDollarSign />, text: "Cost Effective" },
                    { icon: <FaShieldAlt />, text: "Quality Services" },
                    { icon: <FaLightbulb/>, text: "Innovative Solutions"}
                ].map((item, index) => (
                    <div key={index} className="bg-white p-6 max-w-sm w-full text-gray-700 font-semibold 
                                                shadow-lg flex items-center gap-4 rounded-lg">
                        <div className="text-[#2ecc71] text-3xl">{item.icon}</div>
                        <h2 className="text-lg">{item.text}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Why;