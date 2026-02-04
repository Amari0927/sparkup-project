import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCards from '../components/ServiceCards';
import CTA from "../components/CTA"
import { LuCctv } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import { MdPlumbing } from "react-icons/md";
import { GiElectricalResistance } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";
import { CgEthernet } from "react-icons/cg";
import WhatsappBtn from "../components/WhatsappBtn";


const services = [
    { path: "/services/electrical", icon: <GiElectricalResistance size={38} />, name: "Electrical Installation", description: "Expert electrical installation services for homes and businesses, ensuring safety, efficiency, and compliance with industry standards. " },
    { path: "/services/cctv", icon: <LuCctv size={38} />, name: "CCTV Installation", description: "Secure your property with professional  CCTV installation, offering high-definition surveillance for enhanced safety and peace of mind. " },
    { path: "/services/general", icon: <MdElectricalServices size={38} />, name: "General Maintenance", description: "General maintenance involves small-scale repairs and improvements around the home or office, offering convenience and expertise for everyday maintenance needs." },
    { path: "/services/network", icon: <CgEthernet size={38}/>, name: "Network Cabling", description: "Seamless network cabling solutions for fast and efficient data connections, ensuring smooth communication and connectivity. " },
    { path: "/services/ac", icon: <TbAirConditioning size={38} />, name: "AC  Maintenance", description: "Keep your air conditioning system running efficiently with our expert maintenance services, reducing energy costs and breakdowns. " },
    { path: "/services/plumbing", icon: <MdPlumbing size={38} />, name: "Plumbing Maintenance", description: "From leak repairs to full system checks, our professional plumbing maintenance ensures your pipes and fixtures work flawlessly. " },
];


const ServicePage = () => {
    return (
        <>
            <Navbar />
            <section className="md:py-16 pt-[100px] md:pt-[140px] bg-[#2C3E50]">
                <div className='text-center py-8'>
                    <h1 className='text-[#2ecc71] font-semibold md:text-lg'>SERVICES</h1>
                    <h2 className='text-2xl font-bold text-white md:text-3xl'>What We Do</h2>
                </div>
                <div className="container mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {services.map((service, index) => (
                            <ServiceCards 
                                key={index} 
                                icon={service.icon} 
                                name={service.name} 
                                description={service.description} 
                                path={service.path}
                            />
                    ))}
                </div>
            </section>
            <CTA/>
            <WhatsappBtn/>
            <Footer />
        </>
    );
}

export default ServicePage;