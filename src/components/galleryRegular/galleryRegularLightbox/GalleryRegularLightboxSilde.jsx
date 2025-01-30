import Image from "next/image";

const GalleryRegularLightboxSilde = ({ image,selectedImage}) => {
  return (
    <div className="flex text-white items-center justify-center md:h-[100vh] h-screen p-4 w-full z-0">
      <Image src={image.src} alt={image.alt} className="md:h-screen h-auto w-auto"/> 
    </div>
  );
};

export default GalleryRegularLightboxSilde;
