import MainLayout from "@/layout/MainLayout";
import {zoomIn} from "@/utils/motions";
import {motion} from "framer-motion";
import Link from "next/link";
import React, {useRef} from "react";
import {Autoplay, EffectFade, EffectCoverflow} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

type Props = {};

const Events = (props: Props) => {
  const targetRef = useRef(null);

  return (
    <MainLayout targetRef={targetRef}>
      <main className="text-3xl">
        <div ref={targetRef} className="h-[70vh]  relative">
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
          <div className="absolute  top-0 left-0 w-full h-full p-4 bg-transparent flex flex-col gap-8 justify-center items-center">
            <div className="text-[2.8rem] text-white">Events</div>
          </div>
        </div>
        <div className="font-poppins p-4 text-black bg-white flex flex-col gap-4 pt-12 justify-center items-center">
          <h3 className="font-montserrat text-center">
            BEEHIVE DISCREET BDSM EVENTS
          </h3>
          <div className="p-4 max-w-[60rem]  justify-center rounded-md items-start flex text-[16px] w-full flex-col gap-4 bg-[#b3e4ff]">
            <p className="text-[16px] text-center w-full">
              No Upcoming Events at the moment.
            </p>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Events;
