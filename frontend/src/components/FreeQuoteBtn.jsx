import {NavLink} from 'react-router-dom';

const FreeQuoteBtn = () => {
    return (
        < NavLink to="/form">
            <button className="bg-[#2ecc71] px-6 py-2 rounded-lg text-white font-medium hover:bg-[#27ae60] transition">
                Free Quote
            </button>
        </NavLink>
    )
}

export default FreeQuoteBtn