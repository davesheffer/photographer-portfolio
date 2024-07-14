import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/effect-fade';
import GalleryMultiSlide from "../galleryMulti/GalleryMultiSlide";
const GalleryMultiSwiper = ({ galleries }) => {
    console.log(galleries)
    return (
        <div>
            <Swiper
                modules={[EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                effect={"fade"}
                initialSlide={galleries.filter(e => e.style === "landscape").findIndex((gal) => gal.featured === true)}
                fadeEffect={{ crossFade: true }}
                >
                {galleries.filter(e => e.style === "landscape").map((gal, index) => (
                    <SwiperSlide key={index}>
                         <GalleryMultiSlide index={index} image={gal} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
}
export default GalleryMultiSwiper;