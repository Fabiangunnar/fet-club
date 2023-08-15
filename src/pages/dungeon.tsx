import MainLayout from "@/layout/MainLayout";
import {zoomIn} from "@/utils/motions";
import {motion} from "framer-motion";
import Link from "next/link";
import React, {useRef} from "react";
import {Autoplay, EffectFade, EffectCoverflow} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

type Props = {};

const dungeon = (props: Props) => {
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
            <div className="text-[2.8rem] text-white">Rules</div>
          </div>
        </div>
        <div className="font-poppins p-4 text-black bg-white flex flex-col gap-4 pt-12 justify-center items-center">
          <h3 className="font-montserrat text-center">DUNGEON RULES</h3>
          <p className="text-[16px] text-center max-w-[50rem]">
            Beehive Discreet Club was created for the community as a safe space
            for all. Please read through this set of house rules to make sure we
            all can benefit from the security and safety of sanctuary. Keep it
            cute and keep it sexy!
          </p>
          <div className="p-4 max-w-[60rem] justify-center rounded-md items-start flex text-[16px] w-full flex-col gap-4 bg-[#b3e4ff]">
            <p className="text-[15px] ">
              A myriad of activities and a variety of people will be taking
              place and entering the space. Please come in with an open mind and
              respectful demeanor with the safety of all in mind.
            </p>
            <ul className="flex flex-col text-[15px] list-disc px-8">
              <li>No non-consensual activities.</li>
              <li>
                No screaming or loud yelling, except in case of emergency.
              </li>
              <li>No illegal activities.</li>
              <li>No illegal drugs.</li>
              <li>
                No performance-enhancing drugs (can lead to medical emergencies)
              </li>
              <li>No one under 18 years of age.</li>
              <li>
                No play allowed with anyone inebriated or not of sound mind.
              </li>
              <li>No non-consensual photography or video.</li>
              <li>No wax play without a surface cover.</li>
              <li>No fire play.</li>
              <li>No gunplay.</li>
              <li>No sharp knife play.</li>
              <li>No smoking inside.</li>
              <li>No personal locks on the equipment.</li>
            </ul>
            <h4 className="font-bold">Safety First:</h4>
            <ul className="flex flex-col text-[15px] list-disc px-8">
              <li>In the case of an in scene emergency, yell “SAFE WORD”!</li>
              <li>Do not combine performance enhancing drugs and play!</li>
              <li>AED kit (defibrillator) is mounted on the kitchen wall.</li>
              <li>First Aid Kits are in all bathrooms and in the kitchen.</li>
              <li>Fire extinguishers are mounted on the kitchen wall.</li>
              <li>
                Smoke detectors, emergency lighting, and flood lights are
                hardwired.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default dungeon;
