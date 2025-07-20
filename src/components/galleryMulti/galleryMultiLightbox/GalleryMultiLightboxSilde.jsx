import Image from "next/image";

const GalleryMultiLightboxSlide = ({ image }) => {
    return (
        <div className="flex items-center justify-center h-screen w-full p-4">
            <Image 
                src={image.src} 
                alt={image.alt} 
                quality={100}  
                priority={true} 
                className="max-h-full max-w-full object-contain" 
                width={1200}
                height={800}
            />
        </div>
    );
};

export default GalleryMultiLightboxSlide;
