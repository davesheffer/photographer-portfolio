import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/effect-fade';
import GalleryMultiSlide from "../galleryMulti/GalleryMultiSlide";

// Helper function to get and sort landscape images from a gallery
const getFilteredImages = (gallery) => {
    return gallery.images
        .filter(image => image.style === "landscape")

};

const GalleryMultiSwiper = ({ galleries, handleImageClick, setRealIndex }) => {
    return (
        <>
            {galleries.sort((a,b) => a.order - b.order).map((gallery,index) => {
                console.log(gallery);
                const filteredImages = getFilteredImages(gallery);

                return (
                    <Swiper
                        key={ index}
                        modules={[EffectFade]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        effect={"fade"}
                        onClick={() => handleImageClick(gallery.images)}
                        onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
                        fadeEffect={{ crossFade: true }}
                    >
                        {filteredImages.map((image, index) => (
                            <SwiperSlide key={image.id}>
                                <GalleryMultiSlide index={index} image={image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                );
            })}
        </>
    );
};

export default GalleryMultiSwiper;
