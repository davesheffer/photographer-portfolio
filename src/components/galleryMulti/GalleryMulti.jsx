

"use client";

import {  useState } from "react";
import images from "@/app/lib/images";

import GalleryMultiLightbox from "./galleryMultiLightbox/GalleryMultiLightbox";
import GalleryMultiSwiper from "./GalleryMultiSwiper";


const GalleryMulti = ({gallery}) => {
    

    const [showGallery, setShowGallery] = useState(false)
    const [selectedLightbox, setSelectedLightbox] = useState(null);

    const handleImageClick = (galleries) => {
        setSelectedLightbox(galleries);
        setShowGallery(true)
      }
      
    return (
        <div className="md:w-[85vw] p-5 md:mr-[15vw] md:mt-0 mt-[7vh]">
            <div className="md:columns-2 columns-1">
                {images[gallery].map((galleries, index) => (
                    <div key={index} className="py-2" onClick={() => handleImageClick(galleries)}>
                        <GalleryMultiSwiper key={index} galleries={galleries} />
                     </div>
                ))}
            </div>        
            {showGallery && (
                <GalleryMultiLightbox selectedLightbox={selectedLightbox} setShowGallery={setShowGallery} />
            )}
            
        </div>
    );
}
export default GalleryMulti;

