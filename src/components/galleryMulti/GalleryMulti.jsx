

"use client";

import { useState } from "react";
import images from "@/app/lib/images";

import GalleryMultiLightbox from "./galleryMultiLightbox/GalleryMultiLightbox";
import GalleryMultiSwiper from "./GalleryMultiSwiper";


const GalleryMulti = ({ gallery }) => {
    
    const [showGallery, setShowGallery] = useState(false)
    const [selectedLightbox, setSelectedLightbox] = useState(null);
    const [realIndex, setRealIndex] = useState(0);
    const handleImageClick = (galleries) => {
        setSelectedLightbox(galleries);
        setShowGallery(true)
    }

    return (
        <div className="md:columns-2 columns-1" dir="ltr">
            {images[gallery].map(( galleries, index) => (
             <GalleryMultiSwiper key={index} galleries={galleries} handleImageClick={handleImageClick} setRealIndex={setRealIndex}/>
            ))}
            {showGallery && (
                <GalleryMultiLightbox selectedLightbox={selectedLightbox} setShowGallery={setShowGallery} realIndex={realIndex} setRealIndex={setRealIndex}  />
            )}
        </div>
    );
}
export default GalleryMulti;

