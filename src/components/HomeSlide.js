"use client";
import Image from "next/image";

const HomeSlide = ({image}) => {
    return (
        <div
            className="flex text-white items-end justify-start bg-no-repeat h-[90vh] w-full bg-cover bg-center"
            >
            <Image src={image.src}  alt={image.alt} fill={true} className="object-cover"/>       
        </div>
    )
}

export default HomeSlide;