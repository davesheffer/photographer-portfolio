import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/effect-fade';
import GalleryMultiSlide from "./GalleryMultiSlide";

// Helper function to get and sort landscape images from a gallery
const getFilteredImages = (gallery) => {
    return gallery.images
        .filter(image => image.style === "landscape")

};

const GalleryMultiSwiper = ({ galleries, handleImageClick, setRealIndex }) => {
    return (
        <>
            {galleries.sort((a,b) => a.order - b.order).map((gallery,index) => {
                const filteredImages = getFilteredImages(gallery);
                const galleryId = gallery.name || `gallery-${index}`;

                return (
                    <Swiper
                        key={index}
                        modules={[EffectFade]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        onClick={() => handleImageClick(filteredImages, galleryId)}
                        onSlideChange={(swiper) => setRealIndex(galleryId, swiper.realIndex)}
                        className="cursor-pointer"
                    >
                        {filteredImages.map((image, imageIndex) => (
                            <SwiperSlide key={image.id}>
                                <GalleryMultiSlide index={imageIndex} image={image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                );
            })}
        </>
    );
};

export default GalleryMultiSwiper;
