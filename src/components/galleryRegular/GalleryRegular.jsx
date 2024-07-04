

import { useState } from "react";
import images from "@/app/lib/images";
import GalleryRegularLightbox from "./galleryRegularLightbox/GalleryRegularLightbox";
import Image from "next/image";

const GalleryRegular = ({ gallery }) => {
    
    const [showGallery, setShowGallery] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImage(index);
        setShowGallery(true)
      }

    return (
        <div className="md:w-[85vw] p-5 md:mr-[15vw] md:mt-0 mt-[7vh]">
            {/* <h1 className="font-amatic text-3xl">{gallery}</h1> */}
            {/* <hr className="border-rose-500 border-2" /> */}
            <div className="md:columns-2 columns-1">
                {images[gallery].map((image, index) => (
                    <Image key={image.id} alt={image.alt} src={image.src} className='h-auto w-full py-2' onClick={()=>handleImageClick(index)}/>
                ))}
            </div>
                    
            {showGallery && (
                <GalleryRegularLightbox images={images[gallery]} setShowGallery={setShowGallery} selectedImage={selectedImage} />
            )}
            
        </div>
    );
}
export default GalleryRegular;

