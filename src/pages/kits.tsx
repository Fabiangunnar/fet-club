import MainLayout from "@/layout/MainLayout";
import {zoomIn} from "@/utils/motions";
import {motion} from "framer-motion";
import Link from "next/link";
import React, {useRef} from "react";
import {Autoplay, EffectFade, EffectCoverflow} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

type Props = {};

const kits = (props: Props) => {
  const targetRef = useRef(null);

  return (
    <MainLayout targetRef={targetRef}>
      <main className="text-3xl">
        <div ref={targetRef} className="h-[70vh] border relative">
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
            <div className="text-[2.8rem] text-white">Kits</div>
          </div>
        </div>
        <div className="font-poppins p-4 flex flex-col gap-4 pt-12 justify-center items-center">
          <h3 className="font-montserrat">STARTER KITS</h3>
          <div className="p-4 max-w-[60rem] justify-center rounded-md items-start flex text-[16px] w-full flex-col gap-4 bg-red-200">
            <h4>DESCRIPTION</h4>
            <ol className="flex flex-col gap-2 text-[15px]">
              <li>1. Silicone Slave Collar-$200</li>
              <li>2. Position Stool-$300</li>
              <li>3. E Pay Cock rings set-$200</li>
              <li>4. Soft touch hog tie with 4 cuffs-$350</li>
              <li>5. Exo-$400</li>
              <li>6. Orgasm control chastity belt-$300</li>
              <li>
                7. Elektra nipple teasers & nipple play vacuum twist
                suckers-$750
              </li>
              <li>8. Chastity cages-$205</li>
              <li>9. Ball gang-$115</li>
              <li>10. Anal plug -$315</li>
            </ol>
          </div>
        </div>
        <div className="pt-12">
          <Link href="/" className=" text-3xl">
            Home
          </Link>{" "}
        </div>
      </main>
    </MainLayout>
  );
};

export default kits;
