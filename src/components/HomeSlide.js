"use client";
import Image from "next/image";

const HomeSlide = ({image}) => {
    return (
        <div
            className="flex text-white items-end justify-start bg-no-repeat h-[80vh] w-[80vw] bg-cover bg-center"
            >
            <Image src={image.src} quality={100}  alt={image.alt} fill={true} className="object-cover object-center"/>
        </div>
    )
}

export default HomeSlide;
