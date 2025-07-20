

import Image from "next/image";

const GalleryMultiSlide = ({ image }) => {
    return (
        <div className="flex items-center justify-center h-full md:h-[550px] overflow-hidden">
            <Image 
                src={image.src} 
                alt={image.alt} 
                quality={100} 
                className="w-full h-auto object-cover p-4" 
            />  
        </div>
    );
};
  
  export default GalleryMultiSlide;
  