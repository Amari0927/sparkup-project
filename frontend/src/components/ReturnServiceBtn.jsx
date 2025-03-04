import { IoMdArrowRoundBack } from "react-icons/io";
import {Link} from 'react-router-dom';

export const ReturnServiceBtn = () => {
    return (
        <div>
            <Link to='/services'>
                <IoMdArrowRoundBack size={48} className="hover:text-[#2ecc71]"/>
            </Link>
        </div>
    )
}
