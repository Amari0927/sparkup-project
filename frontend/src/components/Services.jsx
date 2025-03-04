import { LuCctv } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import { MdPlumbing } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CgEthernet } from "react-icons/cg";
import { GiElectricalResistance } from "react-icons/gi";
import { Link } from "react-router-dom";

const icons = [
    { path: "/services/electrical", icon: <GiElectricalResistance size={38}/>, name: "Electrical Installation" },
    { path: "/services/cctv", icon: <LuCctv size={38}/>, name: "CCTV Installation" },
    { path: "/services/network", icon: <CgEthernet size={38}/>, name: "Network Cabling" },
    { path: "/services/general", icon: <IoMdSettings size={38}/>, name: "General Maintenance" },
    { path: "/services/ac", icon: <TbAirConditioning size={38}/>, name: "AC Maintenance" },
    { path: "/services/plumbing", icon: <MdPlumbing size={38}/>, name: "Plumbing Maintenance" },
]

const Services = () => {
    return (
        <section className="py-16 px-8 bg-[#F9F9F9]">
            <div className='text-center py-8'>
                <h1 className='text-[#2ecc71] font-semibold  uppercase text-lg tracking-wide'>
                    SERVICES
                </h1>
                <h2 className='text-2xl font-bold text-gray-700 md:text-3xl'>
                    What We Offer
                </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center">
                {icons.map(({ icon, name, path }) => (
                    <Link key={name} to={path}>
                        <div  className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                            <div className="text-[#2ecc71]">{icon}</div>
                            <h3 className="mt-2 text-lg font-semibold text-gray-700">{name}</h3>
                        </div>
                    </Link>
                    
                ))}
            </div>
            <div className="mt-10 text-center">
                <a href="/services" className="px-6 py-3 bg-[#2ecc71] text-white font-semibold rounded-lg shadow-md hover:bg-[#27ae60] transition">
                    Learn More
                </a>
            </div>
        </section>
    );
}

export default Services