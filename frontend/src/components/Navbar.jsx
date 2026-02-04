import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import FreeQuoteBtn from "./FreeQuoteBtn";

const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className='flex justify-between items-center px-6 bg-white text-gray-700 fixed w-full  z-50'>
            <div className='flex items-center text-[#2ecc71] text-xl font-bold'>
                <NavLink
                    to="/">
                    <img src="/assets/logo.jpeg" alt="" className='h-[100px] md:h-[140px]' />
                </NavLink> 
                
            </div>

            {/* Desktop Menu */}
            <ul className='hidden lg:flex gap-8 font-medium'>
                {NAV_LINKS.map(({ name, path }) => (
                    <li key={name} className='p-2'>
                        <NavLink
                            to={path}
                            className={({ isActive }) => 
                                isActive
                                ? "text-[#2ecc71] font-semibold"
                                : "hover:text-[#2ecc71] hover:font-semibold"
                            }
                        >
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className='hidden lg:block'>
                <FreeQuoteBtn />
            </div>

            {/* Mobile Menu */}
            <div className='lg:hidden relative' ref={menuRef}>
                <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} aria-label="Toggle menu" />
                {isOpen && (
                    <div className="fixed left-0 top-0 w-full h-screen z-40 bg-white text-center transition-transform duration-300 ease-in-out">
                        {/* Close Button Inside Menu */}
                        <div className="absolute top-5 right-5">
                            <Hamburger toggled={isOpen} toggle={() => setOpen(false)} />
                        </div>

                        <ul className="flex flex-col gap-8 uppercase font-medium text-xl mt-20">
                            {NAV_LINKS.map(({ name, path }) => (
                                <li key={name} className="p-4">
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#2ecc71]" : "hover:text-[#2ecc71]"
                                        }
                                        onClick={() => setOpen(false)}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                            <li className="p-4">
                                <FreeQuoteBtn />
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;