"use client";

import { useState } from "react";
import images from "@/app/lib/images";
import GalleryMultiLightbox from "./galleryMultiLightbox/GalleryMultiLightbox";
import GalleryMultiSwiper from "./GalleryMultiSwiper";

const GalleryMulti = ({ gallery }) => {
    const [showGallery, setShowGallery] = useState(false);
    const [selectedLightbox, setSelectedLightbox] = useState(null);
    const [realIndexes, setRealIndexes] = useState({}); // Store realIndex per gallery
    const [currentGalleryId, setCurrentGalleryId] = useState(null);

    const handleImageClick = (galleryImages, galleryId) => {
        setSelectedLightbox(galleryImages);
        setCurrentGalleryId(galleryId);
        setShowGallery(true);
    };

    // Function to update realIndex for a specific gallery
    const setGalleryRealIndex = (galleryId, index) => {
        setRealIndexes(prev => ({
            ...prev,
            [galleryId]: index
        }));
    };

    return (
        <div className="md:columns-2 columns-1" dir="ltr">
            {images[gallery].map((galleries, index) => (
                <GalleryMultiSwiper
                    key={index}
                    galleries={galleries}
                    handleImageClick={handleImageClick}
                    setRealIndex={setGalleryRealIndex}
                    className="overflow-hidden h-40"
                />
            ))}
            {showGallery && (
                <GalleryMultiLightbox
                    selectedLightbox={selectedLightbox}
                    showGallery={showGallery}
                    setShowGallery={setShowGallery}
                    realIndex={realIndexes[currentGalleryId] || 0}
                />
            )}
        </div>
    );
};

export default GalleryMulti;
