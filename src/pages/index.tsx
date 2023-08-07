import Image from "next/image";
import {Inter} from "next/font/google";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";

import {motion} from "framer-motion";

import {Autoplay, EffectCoverflow, EffectFade} from "swiper/modules";
import {zoomIn} from "@/utils/motions";
const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <MainLayout>
      <main className="text-3xl">
        <div className="h-screen borderborder-black relative">
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
                  className="h-screen"
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
                  className="h-screen"
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
                  className="h-screen"
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
            <div className="text-[2.6rem] text-white">
              Connect. Create. Explore
            </div>
            <div className="text-2xl uppercase text-white">
              DISCREET AND INTIMATE
            </div>
            <div>
              <button className="text-white text-2xl bg-red-700 p-4 px-8 rounded-lg transition-all hover:bg-red-600">
                Become a Member
              </button>
            </div>
          </div>
        </div>
        Red
        <div className="pt-12">
          <Link href="/about" className=" text-3xl">
            About
          </Link>{" "}
        </div>
      </main>
    </MainLayout>
  );
}
