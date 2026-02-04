import data from '../portfolioData.js'
import { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Gallery = () => {
    const [category, setCategory] = useState(data);
    const [activeCategory, setActiveCategory] = useState('Show All');
    const [zoomedImage, setZoomedImage] = useState(null);
    const [imageIndex, setImageIndex] = useState(null)


    function fliterMedia(e) {
        let info = e.target.value;
        setActiveCategory(info);

        if (info === 'Show All') {
            setCategory(data);

        } else if(info === 'Electrical') {
            const filtered = data.filter(item => item.category === 'electrical')
            setCategory(filtered);

        } else if(info === 'CCTV') {
            const filtered = data.filter(item => item.category === 'cctv')
            setCategory(filtered);

        } else if (info === 'Maintenance' ) {
            const filtered = data.filter(item => item.category === 'maintenance')
            setCategory(filtered);
        }
    }

    function handleZoomIn(imageSrc, index) {
        setZoomedImage(imageSrc);
        setImageIndex(index);
    }

    function closeZoom() {
        setZoomedImage(null);
        setImageIndex(null);
    }

    function handleNextImage() {
    if (imageIndex !== null && imageIndex < category.length-1) {
        const newIndex = imageIndex + 1;
        setImageIndex(newIndex);
        setZoomedImage(category[newIndex].path);
    }
        
    }

    function handlePreviousImage() {
        if (imageIndex !== null && imageIndex > 0) {
            const newIndex = imageIndex - 1;
            setImageIndex(newIndex);
            setZoomedImage(category[newIndex].path)
        }
    }

    return (
        <>
            <div className='text-center mb-10'>
                <h1 className='text-[#2ecc71] font-semibold uppercase text-lg tracking-wide'>
                    Projects
                </h1>
                <h2 className='text-3xl font-bold text-gray-700 md:text-4xl'>
                    Our Work in Action
                </h2>
            </div>
            <div>
                <div className='flex gap-4 mb-10 '>
                    {['Show All', 'Electrical', 'CCTV', 'Maintenance'].map((btn) => (
                        <button 
                            key={btn}
                            value={btn} 
                            onClick={fliterMedia}
                            className={`px-6 py-2 rounded-full font-medium transition transform
                                ${activeCategory === btn ? 'bg-[#27ae60] text-white shadow-lg scale-105' : 'bg-[#2ecc71] text-white hover:bg-[#27ae60] hover:scale-105 shadow-md'}`}
                        >
                            {btn.toUpperCase()}
                        </button>
                    ))}
                </div>
                <div className='grid  gap-8 
                                grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {category.map((item, index) => (
                        <div key={item.id}>
                            <div>
                                {item.type === 'image' ? (
                                        <img src={item.path} alt=""
                                            onClick={() => handleZoomIn(item.path, index)}
                                            className='w-full h-[400px] object-cover rounded-lg cursor-pointer 
                                            hover:shadow-2xl hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out'/>
                                    ) : (
                                        <video controls muted
                                            className='w-full h-[400px] object-cover rounded-lg cursor-pointer 
                                            hover:shadow-2xl hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out'>
                                            <source src={item.path} type='video/mp4' />
                                        </video>
                                )}
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
            {zoomedImage && (
                <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-50 transition-opacity duration-300 ease-in-out'>
                    <div className='relative p-4 flex justify-center items-center'>
                        <img src={zoomedImage} alt="" className=" H max-w-[400px] max-h-[800px]  rounded-lg shadow-lg"/>
                        <button onClick={closeZoom} 
                                className='absolute top-4 right-4 hover:bg-red-600 p-2 rounded-full'>
                            <IoCloseSharp 
                                color='white'
                                size={38}
                            />
                        </button>
                        <button 
                                onClick={handlePreviousImage}
                                disabled={imageIndex === 0}
                                className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition 
                                    ${imageIndex === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-600'}`}>
                                <FaArrowLeft
                                    color='white'
                                    size={32}
                                />
                            </button>

                            <button 
                                onClick={handleNextImage}
                                disabled={imageIndex === category.length - 1}
                                className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition 
                                    ${imageIndex === category.length - 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-600'}`}>
                                <FaArrowRight
                                    color='white'
                                    size={32}
                                />
                            </button>
                        
                    </div>
                </div>
            )}
        </>
    )
}

export default Gallery