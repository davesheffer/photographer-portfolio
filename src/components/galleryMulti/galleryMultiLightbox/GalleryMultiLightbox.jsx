import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import GalleryMultiLightboxSilde from "./GalleryMultiLightboxSilde";
import "swiper/css";
import "swiper/css/effect-fade";

const GalleryMultiLightbox = ({ selectedLightbox, showGallery, setShowGallery, realIndex }) => {
    const swiperRef = useRef(null);

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
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                initialSlide={selectedLightbox[realIndex]}
            >
                {selectedLightbox
                    .slice()
                    .sort((a, b) => b.id - a.id)
                    .map((image, index) => (
                        <SwiperSlide key={image.id}>
                            <GalleryMultiLightboxSilde index={index} image={image} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default GalleryMultiLightbox;
