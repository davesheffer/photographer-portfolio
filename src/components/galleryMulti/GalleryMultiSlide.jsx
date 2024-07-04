import Image from "next/image";

const GalleryMultiSilde = ({ image }) => {
    
    return (
      <div className="flex text-white item-center justify-center ">
          <Image src={image.src} alt={image.alt} quality={75} className="" />  
      </div>
    );
  };
  
  export default GalleryMultiSilde;
  