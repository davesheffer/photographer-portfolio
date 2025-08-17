"use client";
import Image from "next/image";

const HomeSlide = ({image}) => {
    return (
        <div className="relative h-full w-full">
            <Image
                src={image.src}
                quality={100}
                alt={image.alt}
                fill={true}
                className="object-cover object-center"
                sizes="100vw"
                priority
            />
        </div>
    )
}

export default HomeSlide;
