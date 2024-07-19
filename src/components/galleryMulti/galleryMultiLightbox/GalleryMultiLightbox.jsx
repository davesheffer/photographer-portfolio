import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import GalleryMultiLightboxSilde from "./GalleryMultiLightboxSilde";
import "swiper/css";
import 'swiper/css/effect-fade';

const GalleryMultiLightbox = ({ selectedLightbox ,setShowGallery}) => {  
    return (
        <div className="fixed top-0 right-0 h-full w-full bg-black  z-20">
            <IoClose className="text-white md:text-6xl text-3xl absolute md:right-10 md:top-10 right-5 top-5 z-10" onClick={() => setShowGallery(false)} />
            <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                effect={"fade"}
                // initialSlide={selectedImage}
                fadeEffect={{ crossFade: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}>
                {selectedLightbox.map((image, index) => (
                    <SwiperSlide key={image.id}>
                        <GalleryMultiLightboxSilde index={index} image={image} />
                    </SwiperSlide>      
                ))}
            </Swiper>
        </div>
        
    );
}
export default GalleryMultiLightbox;
