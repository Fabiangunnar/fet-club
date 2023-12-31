import MainLayout from "@/layout/MainLayout";
import {zoomIn} from "@/utils/motions";
import {motion} from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, {useRef} from "react";
import {Autoplay, EffectFade, EffectCoverflow} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

type Props = {};

const Rentals = (props: Props) => {
  const targetRef = useRef(null);

  return (
    <>
      <Head>
        <title>Beehive | Membership</title>
      </Head>

      <MainLayout targetRef={targetRef}>
        <main className="text-3xl">
          <div ref={targetRef} className="h-[70vh]  relative">
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
              <div className="text-[2.8rem] text-white">Rentals</div>
            </div>
          </div>
          <div className="font-poppins p-4  bg-white text-black flex flex-col gap-6 pt-12 justify-center items-center w-full text-start">
            <h3 className="font-montserrat text-start w-full max-w-[50rem] text-2xl md:text-3xl">
              BEEHIVE DISCREET CLUB MEMBERSHIP FORM
            </h3>
            <div className="flex flex-col  w-full gap-4 max-w-[50rem]">
              <h4 className="font-bold text-2xl ">HOURLY RATES :</h4>
              <ul className="flex flex-col text-start text-[15px] list-disc px-8">
                <li>3 Hours/$300</li>
                <li>5 hours /$400</li>
                <li>7 hours /$500</li>
              </ul>
              <h4 className="font-bold text-2xl ">All NIGHT BOOKING:</h4>
              <ul className="flex flex-col text-[15px] list-disc px-8">
                <li>Overnight /$600</li>
              </ul>
              <div>
                <Link
                  href={"/bookings"}
                  className="text-white font-montserrat text-[18px] bg-red-600 p-3 px-4   rounded-lg transition-all hover:bg-red-500"
                >
                  Book Now
                </Link>
              </div>
              <p className="text-sm">
                The club features five private playrooms, including a
                feminization room, a domestic room perfect for your coffee,
                lunch and dinner dates.
              </p>
              <p className="text-sm">
                All of our rooms are fully equipped and air-conditioned as well
                as an extensive collection of BDSM toys and equipments for your
                exploration. Our rooms features low lighting and music to give
                your scene that special ambiance that is so important. We also
                have a guest room, private shower and laundry facilities.
              </p>
              <p className="text-sm">
                Rentals are always exclusive you will have the entire space to
                yourself inclusive of all the BDSM furniture, toys, cleaning
                supplies, towels and lot’s more{" "}
              </p>
              <p className="text-sm">
                Reservations must be made with at least a 12 hours notice.
              </p>
              <p className="text-sm">
                Reservation tickets will be forwarded to you immediately your
                booking is confirmed.
              </p>
              <p className="text-sm">
                To ensure the privacy and safety of other guests, the address
                will given only to those who have confirmed bookings.
              </p>
              <p className="text-sm font-bold">Please note:</p>
              <p className="text-sm">
                This is not a commercial dungeon with a sitting staff or
                receptionist. We do not train Dommes, we do not hire switches,
                slaves, or subs.
              </p>
              <p className="text-sm">
                Contact for more information about booking your reservation.
              </p>
              <div>
                <Link
                  href={"/bookings"}
                  className="text-white font-montserrat text-[18px] bg-red-600 p-3 px-4  rounded-lg transition-all hover:bg-red-500"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default Rentals;
