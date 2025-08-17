import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import GalleryMultiLightboxSlide from "./GalleryMultiLightboxSilde";
import "swiper/css";
import "swiper/css/effect-fade";

const GalleryMultiLightbox = ({ selectedLightbox, showGallery, setShowGallery, realIndex }) => {
    const swiperRef = useRef(null);

    if (!selectedLightbox || !Array.isArray(selectedLightbox)) return null;

    return (
        <div
            className={`fixed top-0 right-0 h-full w-full bg-black z-20 transition-opacity duration-500 ease-in-out ${showGallery ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <IoClose
                className="text-white md:text-6xl text-3xl absolute md:right-10 md:top-10 right-5 top-5 z-10 cursor-pointer"
                onClick={() => setShowGallery(false)}
            />
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                loop={selectedLightbox.length > 1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                initialSlide={Math.max(0, Math.min(realIndex || 0, selectedLightbox.length - 1))}
            >
                {selectedLightbox.map((image, index) => (
                    <SwiperSlide key={`lightbox-${image.id}-${index}`}>
                        <GalleryMultiLightboxSlide index={index} image={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default GalleryMultiLightbox;
