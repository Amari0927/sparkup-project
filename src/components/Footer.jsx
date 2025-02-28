import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { NavLink, Link } from "react-router";
import { FaWhatsapp } from "react-icons/fa6";

const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
]

const Footer = () => {
    return (
        <footer className="bg-[#1DA64E] text-white py-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10 md:flex-row md:justify-between ">
                
                {/* Contact Section */}
                <div className="md:w-1/3 md:mr-8">
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <div className="space-y-3">
                        <p className="flex items-center">
                            <FaPhoneAlt size={18} className="mr-2" />
                            +1 (246) 269-3100
                        </p>
                        <p className="flex items-center">
                            <IoMdMail size={18} className="mr-2" />
                            <a href="mailto:sparkupelectricalservices@hotmail.com" className="hover:text-[#2ecc71]">
                                sparkupelectricalservices@hotmail.com
                            </a>
                        </p>
                    </div>
                    <Link to='/form'>
                        <button className="bg-[#2ecc71] px-6 py-3 rounded-lg text-white font-medium mt-4
                                        hover:bg-[#27ae60] transition">
                            Free Quote
                        </button>
                    </Link>
                    
                </div>

                {/* Quick Links Section */}
                <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {NAV_LINKS.map(({name, path}) => (
                            <li key={name} className="text-lg hover:text-[#2ecc71]">
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex  gap-5 md:flex-col">
                        <a href="https://www.facebook.com/profile.php?id=100083371145641" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 hover:text-[#3b5998] transition">
                            <FaFacebook size={24} />
                            <span>Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/sparkupmaintenance/" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-2 hover:text-[#e4405f] transition">
                            <FaInstagram size={24} />
                            <span>Instagram</span>
                        </a>
                        <a href="https://wa.me/12462693100" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-green-500 transition">
                            <FaWhatsapp size={24} /> 
                            <span>WhatsApp</span> 
                            </a>
                    </div>
                </div>
            </div>
            <div className="mt-10 border-t border-white pt-4 text-center">
                <p>© 2025 SparkUp Maintenance. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;