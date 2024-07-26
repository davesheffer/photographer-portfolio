"use client"; 

import images from "@/app/lib/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import HomeSlide from "@/components/HomeSlide";
import "swiper/css";
import 'swiper/css/effect-fade';

export default function Home() {
  return (
    <main className=" h-screen md:w-[85vw] w-full md:mr-[15vw] md:px-10 py-4 overflow-hidden z-0 " >
      <hr className="mb-2" />
   
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        effect={"fade"}
        // fadeEffect={{ crossFade: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {images.slider.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="h-[95vh] w-full flex justify-center items-center">
              <HomeSlide image={image} />
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
   
      
      <div
        id="footer"
        className=" border-t-2 mt-2 border-gray-300 flex items-center justify-center h-[3vh]">
        <span> כל הזכויות שמורות נופר שפר © 2024</span>
      </div>
    </main>
  );
}
