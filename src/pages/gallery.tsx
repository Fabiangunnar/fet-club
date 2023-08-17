import {OpenModal} from "@/app-slice/AppSlice";
import {AppDispatch} from "@/app/store";
import {gallery_images} from "@/data/data";
import MainLayout from "@/layout/MainLayout";
import {zoomIn} from "@/utils/motions";
import {motion} from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {Autoplay, EffectFade, EffectCoverflow} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

type Props = {};

const Gallery = (props: Props) => {
  const targetRef = useRef(null);
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Beehive | Gallery</title>
      </Head>

      <MainLayout targetRef={targetRef}>
        <main className="text-3xl">
          <div className="h-[70vh]  relative">
            <div
              ref={targetRef}
              className="absolute  top-0 left-0 h-full w-full -z-10 pointer-events-none"
            >
              <Swiper
                modules={[Autoplay, EffectFade, EffectCoverflow]}
                autoplay={{delay: 10000}} // Add this to enable autoplay and set the delay between slides
                effect="fade" // Add this to enable the fade effect
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {/* <SwiperSlide>
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
              </SwiperSlide> */}
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
            <div className="absolute    top-0 left-0 w-full h-full p-4 bg-transparent flex flex-col gap-8 justify-center items-center">
              <div className="text-[2.8rem] text-white">Gallery</div>
            </div>
          </div>
          <div className="grid bg-white grid-cols-mine gap-2 md:px-8 sm:px-4 py-4 px-2 lg:px-24 justify-center items-center">
            {gallery_images.map((image, index) => (
              <div
                className="w-full h-full cursor-pointer overflow-hidden  transition-all rounded-md"
                key={index}
                onClick={() => dispatch(OpenModal(index))}
              >
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                  src={image}
                  alt={image}
                />
              </div>
            ))}
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default Gallery;
