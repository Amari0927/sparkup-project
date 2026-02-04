import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    return (
        <div className='py-12 px-6  flex flex-col items-center bg-[#2C3E50]'>
            <div className='text-center mb-10'>
                <h1 className='text-[#2ecc71] font-semibold uppercase text-lg tracking-wide'>
                    Testimonial
                </h1>
                <h2 className='text-3xl font-bold text-white md:text-4xl'>
                    What Clients Say
                </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg mx-auto'>
                <ReviewCard 
                    review='"Brandon was extremely professional and did a fantastic job. Would highly recommend his services."' 
                    person='- S. EDWARDS' 
                />
                <ReviewCard 
                    review='"Excellent service! Brandon ensured he knew exactly what I wanted to accomplish and worked efficiently, neatly, and swiftly to complete the work."' 
                    person='- S. MAYERS' 
                />
                <div className='md:col-span-2 lg:col-span-1'>
                    <ReviewCard 
                        review='"I found the service that Brandon provided to be professional. He responded timely and was very polite when communicating with me. His customer service is what I expect from a company or individual providing a service."' 
                        person='- D. BATSON' 
                    />
                </div>
                
            </div>
        </div>
    );
}

export default Reviews;