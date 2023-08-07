import MainLayout from "@/layout/MainLayout";
import {zoomIn} from "@/utils/motions";
import {motion} from "framer-motion";
import Link from "next/link";
import React from "react";
import {Autoplay, EffectFade, EffectCoverflow} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <MainLayout>
      <main className="text-3xl">
        <div className="h-[70vh]  relative">
          <div className="absolute  top-0 left-0 h-full w-full -z-10 pointer-events-none">
            <Swiper
              modules={[Autoplay, EffectFade, EffectCoverflow]}
              autoplay={{delay: 10000}} // Add this to enable autoplay and set the delay between slides
              effect="fade" // Add this to enable the fade effect
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <motion.div
                  variants={zoomIn(0, 5)}
                  whileInView="show"
                  initial="hidden"
                  viewport={{once: false, amount: 0}}
                  className="h-[70vh]"
                >
                  <img
                    className="h-full w-full object-cover"
                    src="/slide1.jpg"
                    alt=""
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  variants={zoomIn(0, 5)}
                  whileInView="show"
                  initial="hidden"
                  viewport={{once: false, amount: 0}}
                  className="h-[70vh]"
                >
                  <img
                    className="h-full w-full object-cover"
                    src="/slide2.jpg"
                    alt=""
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  variants={zoomIn(0, 5)}
                  whileInView="show"
                  initial="hidden"
                  viewport={{once: false, amount: 0}}
                  className="h-[70vh]"
                >
                  <img
                    className="h-full w-full object-cover"
                    src="/slide10.png"
                    alt=""
                  />{" "}
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="absolute  top-0 left-0 w-full h-full p-4 bg-transparent flex flex-col gap-8 justify-center items-center">
            <div className="text-[2.8rem] text-white">Gallery</div>
          </div>
        </div>
        Green
        <div className="pt-12">
          <Link href="/" className=" text-3xl">
            Home
          </Link>{" "}
        </div>
      </main>
    </MainLayout>
  );
};

export default Gallery;
