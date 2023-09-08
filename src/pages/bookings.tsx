import {OpenModal3} from "@/app-slice/AppSlice";
import {AppDispatch} from "@/app/store";
import Modal3 from "@/components/Modal3";
import Spinner from "@/components/Spinner";
import {countries} from "@/data/data";
import MainLayout from "@/layout/MainLayout";
import {zoomIn} from "@/utils/motions";
import {motion} from "framer-motion";
import Head from "next/head";
import React, {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {Autoplay, EffectFade, EffectCoverflow} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

type Props = {};

const Bookings = (props: Props) => {
  const targetRef = useRef(null);
  const dispatch: AppDispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    city: "",
    state_province_region: "",
    zip_postalcode: "",
    country: "",
    phone: "",
    email: "",
    check_in_date: "",
    check_in_time: "",
    check_in_hour: "",
    no_of_guests: "",
    special_instructions: "",
  });

  const handleInputChange = (e: any) => {
    setFormData((prev: any) => ({...prev, [e.target.name]: e.target.value}));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch(OpenModal3());
    }, 2000);
  };
  return (
    <>
      <Head>
        <title>Beehive | Bookings</title>
      </Head>

      <MainLayout targetRef={targetRef}>
        <main className="text-3xl">
          {isLoading && <Spinner />}
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
              <div className="text-[2.8rem] text-white">Bookings</div>
            </div>
          </div>
          <div className="font-poppins p-4 text-black bg-white flex flex-col gap-4 pt-12 justify-center items-center">
            <h3 className="font-montserrat text-center">
              BEEHIVE DISCREET BDSM BOOKING
            </h3>
            <form
              onSubmit={handleSubmit}
              className="p-4 py-6 max-w-[60rem] border bg-white justify-center rounded-md items-start flex flex-col text-[16px] w-full gap-4"
            >
              <p className="text-md font-bold">
                Name <span className="text-red-900">*</span>{" "}
              </p>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4  w-full justify-between items-center">
                <div className="flex flex-col">
                  <input
                    required
                    className="p-4 py-3 rounded-md border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                  />
                  <small>First</small>
                </div>
                <div className="flex flex-col ">
                  <input
                    required
                    className="p-4 py-3 rounded-md border outline-none focus-within:border-red-400 transition-all border-gray-400 text-sm"
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                  />
                  <small>Last</small>
                </div>
              </div>
              <p className="text-md font-bold">
                Address <span className="text-red-900">*</span>{" "}
              </p>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4  w-full justify-between items-center">
                <div className="flex flex-col">
                  <input
                    required
                    className="p-4 py-3 rounded-md border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <small>City</small>
                </div>
                <div className="flex flex-col ">
                  <input
                    required
                    className="p-4 py-3 rounded-md border outline-none focus-within:border-red-400 transition-all border-gray-400 text-sm"
                    type="text"
                    name="state_province_region"
                    value={formData.state_province_region}
                    onChange={handleInputChange}
                  />
                  <small>State / Province / Region</small>
                </div>
                <div className="flex flex-col">
                  <input
                    required
                    className="p-4 py-3 rounded-md border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                    type="text"
                    name="zip_postalcode"
                    value={formData.zip_postalcode}
                    onChange={handleInputChange}
                  />
                  <small>ZIP / Postal Code</small>
                </div>
                <div className="flex flex-col ">
                  <select
                    required
                    className="p-4 py-3 rounded-md border outline-none focus-within:border-red-400 transition-all border-gray-400 text-sm"
                  >
                    <option value="" className="text-gray-700">
                      Select Country
                    </option>

                    {countries.map((country, i) => (
                      <option value="" key={i}>
                        {country.name}{" "}
                      </option>
                    ))}
                  </select>
                  <small>Country</small>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4  w-full justify-between items-center">
                <div className="flex flex-col gap-2 ">
                  <p className="text-sm font-bold">
                    Phone <span className="text-red-900">*</span>{" "}
                  </p>
                  <input
                    required
                    className="p-4 py-3 rounded-md marker:rounded-md border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <p className="text-sm font-bold">
                    Email
                    <span className="text-red-900">*</span>{" "}
                  </p>
                  <input
                    required
                    className="p-4 py-3 rounded-md border outline-none focus-within:border-red-400 transition-all border-gray-400 text-sm"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-3 grid-cols-1 gap-4  w-full justify-between items-center">
                <div className="flex flex-col gap-2 ">
                  <p className="text-sm font-bold">
                    Check-in Date <span className="text-red-900">*</span>{" "}
                  </p>
                  <input
                    required
                    className="p-4 py-3 rounded-md border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                    type="date"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-bold">
                    Check-in Time
                    <span className="text-red-900">*</span>{" "}
                  </p>
                  <select
                    required
                    className="p-4 py-3 rounded-md border outline-none focus-within:border-red-400 transition-all border-gray-400 text-sm"
                  >
                    <option value="" className="text-gray-700">
                      select check-in time
                    </option>
                    <option value="">Morning</option>
                    <option value="">Afternoon</option>
                    <option value="">Evening</option>
                  </select>{" "}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-bold">
                    Check-in Hour
                    <span className="text-red-900">*</span>{" "}
                  </p>
                  <input
                    required
                    className="p-4 py-3 rounded-md border outline-none focus-within:border-red-400 transition-all border-gray-400 text-sm"
                    type="text"
                    name="check_in_hour"
                    value={formData.check_in_hour}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4  w-full justify-between items-start">
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-sm font-bold">
                    Room Preference <span className="text-red-900">*</span>{" "}
                  </p>
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="flex justify-start items-center gap-2">
                      <input
                        required
                        className="p-2 rounded-md border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                        type="radio"
                        name="rad1"
                      />
                      <p className="text-sm">Professional/regular</p>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <input
                        required
                        className="p-2 rounded-md border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                        type="radio"
                        name="rad1"
                      />
                      <p className="text-sm">Photo shoot session</p>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <input
                        required
                        className="p-2 rounded-md border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                        type="radio"
                        name="rad1"
                      />
                      <p className="text-sm">Content making</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-sm font-bold">
                    Rental duration
                    <span className="text-red-900">*</span>{" "}
                  </p>
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="flex justify-start items-center gap-2">
                      <input
                        required
                        className="p-2 border  border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                        type="radio"
                        name="rad2"
                      />
                      <p className="text-sm"> 3 hours ($300)</p>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <input
                        required
                        className="p-4 py-3 border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                        type="radio"
                        name="rad2"
                      />
                      <p className="text-sm"> 5 hours ($400)</p>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <input
                        required
                        className="p-4 py-3 border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                        type="radio"
                        name="rad2"
                      />
                      <p className="text-sm">7 hours ($500)</p>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                      <input
                        required
                        className="p-4 py-3 border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                        type="radio"
                        name="rad2"
                      />
                      <p className="text-sm">Overnight ($600)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 w-full justify-between items-center">
                <div className="flex flex-col gap-2 ">
                  <p className="text-sm font-bold">
                    No of Guests <span className="text-red-900">*</span>{" "}
                  </p>
                  <input
                    required
                    className="p-4 py-3 rounded-md border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                    type="text"
                    name="no_of_guests"
                    value={formData.no_of_guests}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 w-full justify-between items-center">
                <div className="flex flex-col gap-2 ">
                  <p className="text-sm font-bold">Special Instructions</p>
                  <textarea
                    required
                    cols={10}
                    rows={10}
                    name="special_instructions"
                    value={formData.special_instructions}
                    onChange={handleInputChange}
                    className="p-4 py-3 rounded-md border border-gray-400 outline-none focus-within:border-red-400 transition-all text-sm"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <button className="text-white rounded-md font-montserrat text-[18px] bg-red-700 p-3 px-4 w-full  transition-all hover:bg-red-500">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </main>
        <Modal3 setFormData={setFormData} />
      </MainLayout>
    </>
  );
};

export default Bookings;
