import { FaStar } from 'react-icons/fa6';

const ReviewCard = ({review, person}) => {
    return (
        <div className='bg-white  h-[20rem] w-[20rem] mx-auto rounded-lg shadow-lg flex flex-col 
                        justify-between gap-4 p-4 '>
            <p className='text-center text-gray-700 text-lg '>
                {review}
            </p>
            <div className='flex flex-col items-center gap-2'>   
                <div className='flex justify-center gap-2 text-[#FFD700]'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p className='text-[#2ecc71] text-center font-semibold text-xl'>
                    {person}
                </p>
            </div>
        </div>
    );
}

export default ReviewCard