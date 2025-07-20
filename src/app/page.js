"use client"; 

import images from "@/app/lib/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import HomeSlide from "@/components/HomeSlide";
import "swiper/css";
import 'swiper/css/effect-fade';

export default function Home() {
  return (
    <main className="h-screen md:w-[85vw] w-full md:mr-[15vw] overflow-hidden z-0 flex flex-col md:px-10 md:pl-10 px-4 pl-4 py-4">
      <hr className="mb-2 border-gray-200 flex-shrink-0" />
   
      <div className="flex-1 min-h-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
          className="h-full w-full">
          {images.slider.map((image, index) => (
            <SwiperSlide key={index}>
              <HomeSlide image={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div
        id="footer"
        className="border-t border-gray-200 mt-2 flex items-center justify-center h-[3vh] flex-shrink-0">
        <span className="text-gray-600 text-sm"> כל הזכויות שמורות נופר שפר © 2024</span>
      </div>
    </main>
  );
}
