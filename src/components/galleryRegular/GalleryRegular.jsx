

import { useState } from "react";
import images from "@/app/lib/images";
import GalleryRegularLightbox from "./galleryRegularLightbox/GalleryRegularLightbox";
import Image from "next/image";

const GalleryRegular = ({ gallery }) => {

    const [showGallery, setShowGallery] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImage(index);
        setShowGallery(true);
    }

    const sortedImages = images[gallery].sort((a, b) => a.id - b.id);

    return (
        <div className="md:columns-2 columns-1">
            {sortedImages.map((image, index) => (
                <Image key={`${image.id}-${index}`} alt={image.alt} src={image.src} className='h-auto w-full py-2' onClick={() => handleImageClick(index)} />
            ))}
            {showGallery && (
                <GalleryRegularLightbox images={sortedImages} setShowGallery={setShowGallery} selectedImage={selectedImage} />
            )}
        </div>
    );
}
export default GalleryRegular;
