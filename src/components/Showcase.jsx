import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive =  {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
    tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
    mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
}

const slides = [
    {key:'slide1', path:'/src/assets/light-img1.jpeg', alt:'Basket Light'},
    {key:'slide2', path:'/src/assets/camera-img.jpeg', alt:'CCTV Camera'},
    {key:'slide3', path:'/src/assets/light-img2.jpeg', alt:'Black Light'},
    {key:'slide4', path:'/src/assets/camera-img2.jpeg', alt:'CCTV Camera'},
    {key:'slide5', path:'/src/assets/tree-light-img.jpeg', alt:'Tree Light'},
    {key:'slide6', path:'/src/assets/camera-img3.jpeg', alt:'CCTV Camera'},
]

const Showcase = () => {
    return (
        <section className='bg-white py-16 px-8'>
            <div className='text-center mb-10'>
                <h1 className='text-[#2ecc71] font-semibold uppercase text-lg tracking-wide'>
                    Projects
                </h1>
                <h2 className='text-3xl font-bold text-gray-700 md:text-4xl'>
                    Our Work in Action
                </h2>
            </div>
            <Carousel 
                responsive={responsive}
                autoPlay
                autoPlaySpeed={3000}
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                pauseOnHover 
                >
                {
                    slides.map(
                        ({key, path, alt}) => (
                            <div key={key}
                            className='mx-4'>
                                <img src={path} alt={alt} className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
                            </div>
                        )
                    )
                }
            </Carousel>
        </section>
    )
}

export default Showcase