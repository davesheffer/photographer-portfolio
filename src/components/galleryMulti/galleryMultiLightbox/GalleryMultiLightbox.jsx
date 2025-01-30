import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import GalleryMultiLightboxSilde from "./GalleryMultiLightboxSilde";
import "swiper/css";
import "swiper/css/effect-fade"; 

const GalleryMultiLightbox = ({ selectedLightbox, setShowGallery, realIndex }) => {
    const selectedImageIndex = selectedLightbox.findIndex(image => image.featured);
    const initialSlideIndex = selectedImageIndex !== -1 ? selectedImageIndex : 0;
    
    const [swiperReady, setSwiperReady] = useState(false);
    const [activeSlideIndex, setActiveSlideIndex] = useState(initialSlideIndex);
    const swiperRef = useRef(null);

    // Set initial slide on Swiper mount
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.on('init', () => {
                swiperRef.current.slideToLoop(initialSlideIndex, 0);
                setSwiperReady(true);
            });
            swiperRef.current.init();
        }
    }, [initialSlideIndex]);

    // Update Swiper when realIndex changes (e.g., when an image is clicked)
    useEffect(() => {
        if (swiperRef.current && realIndex !== undefined && realIndex !== activeSlideIndex) {
            swiperRef.current.slideToLoop(realIndex);
            setActiveSlideIndex(realIndex);
        }
    }, [realIndex, activeSlideIndex]);

    // Track Swiper's active slide after swiping
    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.realIndex);
    };

    return (
        <div className="fixed top-0 right-0 h-full w-full bg-black z-20">
            <IoClose 
                className="text-white md:text-6xl text-3xl absolute md:right-10 md:top-10 right-5 top-5 z-10 cursor-pointer" 
                onClick={() => setShowGallery(false)} 
            />
            <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={swiperReady ? { delay: 3000, disableOnInteraction: false } : false}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                onSlideChange={handleSlideChange}
            >
                {selectedLightbox.map((image, index) => (
                    <SwiperSlide key={image.id}>
                        <GalleryMultiLightboxSilde index={index} image={image} />
                    </SwiperSlide>      
                ))}
            </Swiper>
        </div>
    );
};

export default GalleryMultiLightbox;
