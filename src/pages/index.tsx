import Image from "next/image";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";

import {motion} from "framer-motion";

import {Autoplay, EffectCoverflow, EffectFade} from "swiper/modules";
import {zoomIn} from "@/utils/motions";
import {useRef} from "react";
import Head from "next/head";

export default function Home() {
  const targetRef = useRef(null);

  return (
    <>
      <Head>
        <title>Beehive</title>
      </Head>

      <MainLayout targetRef={targetRef}>
        <main className="text-3xl">
          <div ref={targetRef} className="h-screen borderborder-black relative">
            <div className="absolute  top-0 left-0 h-full w-full -z-10 pointer-events-none">
              <div className="h-screen">
                <img
                  className="h-full w-full object-cover"
                  src="/slide10.png"
                  alt=""
                />{" "}
              </div>
            </div>
            <div className="absolute  top-0 left-0 w-full h-full p-4 bg-transparent flex flex-col gap-8 justify-center items-center">
              <div className="text-[2.6rem] text-white text-center">
                Connect. Create. Explore
              </div>
              <div className="text-2xl uppercase text-white">
                DISCREET AND INTIMATE
              </div>
              <div>
                <Link
                  className="text-white font-montserrat text-2xl bg-red-700 p-4 px-8 rounded-lg transition-all hover:bg-[#0175b2]"
                  href={"/membership"}
                >
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
          <div
            id="about"
            className="font-poppins bg-white text-black p-4 flex flex-col gap-4 pt-12 justify-center items-center"
          >
            <h3 className="font-montserrat text-center">
              ABOUT BEEHIVE DISCREET CLUB
            </h3>
            <div className="flex flex-col  w-full gap-4 max-w-[70rem]">
              <p className="text-sm">
                Beehive Discreet Club was founded in 2018 by award-winning
                professional dominatrix and kink educator Head mistress Garcia
                after over 12 years working in the industry.
              </p>
              <p className="text-sm">
                Till date, hundreds of power exchange fantasies have been
                enacted and explored within the walls of its authentic and
                immaculate play rooms.
              </p>
              <p className="text-sm">
                The club’s vision of elevating professional BDSM to a higher
                level of service provision extends beyond the creation of an
                exceptional space, presenting our massive collection of
                hand-crafted BDSM toys, equipments and custom designed bondage
                furnitures in our various well designed play rooms many of which
                have been hand-crafted by local artisans .
              </p>
              <p className="text-sm">
                The club is suited for almost any type of play you can imagine
                so that no fantasy goes unfulfilled, and our playspace has been
                designed to satisfy your most decedent and devious desires.
              </p>
              <p className="text-sm">
                We believe strongly that the complementary but opposing roles
                explored within erotic power exchange are symbiotic. Both
                Dominant and submissive are powerful in their own unique ways,
                and the experience that the two consensually engage in together
                should become greater than the sum of its parts, fulfilling both
                deeply.
              </p>
              <p className="text-sm">
                Whether you visit Beehive Discreet Club for a session, an event,
                a consultation, kink counselling, or any of our other services,
                we hope the experience becomes a memorable milestone in your own
                personal journey into kink.
              </p>
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
}
