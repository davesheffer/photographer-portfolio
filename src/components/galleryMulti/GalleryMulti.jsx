"use client";

import { useState } from "react";
import images from "@/app/lib/images";
import GalleryMultiLightbox from "./galleryMultiLightbox/GalleryMultiLightbox";
import GalleryMultiSwiper from "./GalleryMultiSwiper";

const GalleryMulti = ({ gallery }) => {
    const [showGallery, setShowGallery] = useState(false);
    const [selectedLightbox, setSelectedLightbox] = useState(null);
    const [realIndexes, setRealIndexes] = useState(0); // Store realIndex per gallery

    const handleImageClick = (gallery) => {
        setRealIndexes({}); // Reset realIndexes when a new gallery is selected
        setSelectedLightbox(gallery);
        setShowGallery(true);
    };

    // Function to update realIndex for a specific gallery
    const setGalleryRealIndex = ( index) => {
        setRealIndexes(prev => ({
            ...prev,
            index
        }));
    };

    return (
        <div className="md:columns-2 columns-1" dir="ltr">
            {images[gallery].map((galleries, index) => (
                <GalleryMultiSwiper
                    key={index}
                    galleries={galleries}
                    handleImageClick={handleImageClick}
                    setRealIndex={(index) => setGalleryRealIndex(index)}
                />
            ))}
            {showGallery && (
                <GalleryMultiLightbox
                    selectedLightbox={selectedLightbox}
                    setShowGallery={setShowGallery}
                    realIndex={realIndexes[selectedLightbox?.[0]?.id] || 0} // Pass the correct realIndex
                />
            )}
        </div>
    );
};

export default GalleryMulti;
