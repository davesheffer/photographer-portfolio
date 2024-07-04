import Image from "next/image";

const GalleryMultiLightboxSilde = ({ image }) => {
  return (
    <div className="flex text-white items-center justify-center md:h-[100vh] h-screen p-4 w-full z-0">
      <Image src={image.src} alt={image.alt} quality={75}  priority={true} className="md:h-screen h-auto w-auto " /> 
    </div>
  );
};

export default GalleryMultiLightboxSilde;
