import { Link } from "react-router-dom";

const ServiceCards = ({icon, name, description, path}) => {
    return (
        <div className='flex flex-col gap-4 mx-auto rounded-lg  shadow-xl p-4 bg-white 
        hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl bg-gradient-to-b from-white to-gray-100 '>
            <div className='bg-[#2ecc71] p-4 rounded-full w-20 h-20 mx-auto text-white flex justify-center items-center shadow-md'>
                {icon}
            </div>
            <div className='text-center p-2 md:p-4'>
                <h3 className='text-xl font-semibold text-gray-700'>
                    {name}
                </h3>
                <p className='text-gray-700 mt-4 '>
                    {description}
                </p>
                <button className='bg-[#2ecc71] mt-8 px-6 py-2 rounded-lg text-white font-semibold  hover:bg-[#27ae60] hover:shadow-lg transition duration-300 ease-in-out'>
                    <Link to={path} >Learn More</Link>
                </button>
            </div>
        </div>
    )
}

export default ServiceCards