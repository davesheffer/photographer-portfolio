

import { useState } from "react";
import images from "@/app/lib/images";
import GalleryRegularLightbox from "./galleryRegularLightbox/GalleryRegularLightbox";
import Image from "next/image";

const GalleryRegular = ({ gallery }) => {

    const [showGallery, setShowGallery] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImage(index);
        setShowGallery(true , index);
    }

    return (
        <div className="md:columns-2 columns-1">
            {images[gallery].map((image, index) => (
                <Image key={image.id} alt={image.alt} src={image.src} className='h-auto w-full py-2' onClick={() => handleImageClick(index)} />
            ))}
            {showGallery && (
                <GalleryRegularLightbox images={images[gallery]} setShowGallery={setShowGallery} selectedImage={selectedImage} />
            )}
        </div>
    );
}
export default GalleryRegular;

