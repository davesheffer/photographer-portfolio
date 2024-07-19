import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/effect-fade';
import GalleryMultiSlide from "../galleryMulti/GalleryMultiSlide";

// Helper function to get and sort landscape images from a gallery
const getFilteredImages = (gallery) => {
    return gallery.images
        .filter(image => image.style === "landscape")
        .sort((a, b) => a.order - b.order); // Ensure images are sorted in ascending order
};

const GalleryMultiSwiper = ({ galleries,handleImageClick}) => {
    // Sort galleries by their order property
    const sortedGalleries = galleries.sort((a, b) => a.order - b.order);

    return (
        <>
          {sortedGalleries.map((gallery, galleryIndex) => {
                const filteredImages = getFilteredImages(gallery);
                console.log("filteredImages", filteredImages);
                const initialSlideIndex = filteredImages.findIndex(image => image.featured);

                return (
                    <Swiper
                        key={galleryIndex}
                        modules={[EffectFade]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        effect={"fade"}
                        onClick={() => handleImageClick(gallery.images)}
                        initialSlide={initialSlideIndex}
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
