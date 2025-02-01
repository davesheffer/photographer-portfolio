import { CiStar } from "react-icons/ci";

import Image from "next/image";

const  GalleryMultiSilde = ({ image }) => {
 
    return (
      <div className="flex text-white item-center justify-center h-[550px] overflow-hidden">
     
          <Image src={image.src} alt={image.alt} quality={100} style={{objectFit: "cover"}} className="w-full h-auto p-4" />  
      </div>
    );
  };
  
  export default GalleryMultiSilde;
  