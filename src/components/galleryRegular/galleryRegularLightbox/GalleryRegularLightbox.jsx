import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import GalleryRegularLightboxSlide from "./GalleryRegularLightboxSilde";
import "swiper/css";
import 'swiper/css/effect-fade';

const GalleryRegularLightbox = ({ images, setShowGallery, setSelectedImage, selectedImage }) => {

    if (!images || !Array.isArray(images)) return null;

    return (
        <div className="fixed top-0 right-0 h-full w-full bg-black z-20 transition-opacity duration-500 ease-in-out">
            <IoClose
                className="text-white md:text-6xl text-3xl absolute md:right-10 md:top-10 right-5 top-5 z-10 cursor-pointer"
                onClick={() => setShowGallery(false)}
            />
            <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                loop={images.length > 1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                initialSlide={Math.max(0, Math.min(selectedImage || 0, images.length - 1))}
                onSwiper={(swiper) => {}}>
                {images.map((image, index) => (
                    <SwiperSlide key={`regular-lightbox-${image.id}-${index}`}>
                        <GalleryRegularLightboxSlide index={index} setSelectedImage={setSelectedImage} image={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
export default GalleryRegularLightbox;
