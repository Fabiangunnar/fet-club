import {setNavData} from "@/app-slice/AppSlice";
import {AppDispatch, RootState} from "@/app/store";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import {NavType, navData} from "@/data/data";
import Link from "next/link";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoMdClose} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";

type Props = {};

const MainLayout = ({targetRef, children}: any) => {
  const {navdata} = useSelector((state: RootState) => state.app);
  const dispatch: AppDispatch = useDispatch();

  const [isOpenNav, setIsOpenNav] = useState(false);
  const router = useRouter();
  const [isElementAtTop, setIsElementAtTop] = useState(false);

  // Function to update the state based on the element's position
  const handleScroll = () => {
    if (!targetRef.current) return;

    const elementTop = targetRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // You can adjust this threshold as needed
    const threshold = 40; // In pixels

    if (
      elementTop < windowHeight &&
      elementTop - threshold >= -targetRef.current.clientHeight
    ) {
      setIsElementAtTop(false);
    } else {
      setIsElementAtTop(true);
    }
  };
  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          isElementAtTop ? "nav-bar_black" : ""
        }  transition-all z-20 backdrop-blur-[4px] nav-bar fixed top-0 left-0 w-full flex  justify-center items-center`}
      >
        <nav className="flex p-3 h-16 justify-between relative items-center w-full gap-3 max-w-[70rem]">
          <div className="h-10">
            <img
              className="h-full w-full object-cover"
              src="/logo.png"
              alt=""
            />
          </div>
          <div className="hidden md:flex gap-2 lg:gap-8 font-poppins justify-center items-center text-white">
            {navdata.map((data: NavType) => (
              <div
                key={data.id}
                onClick={() => dispatch(setNavData(data))}
                className={`${
                  data.state ? "text-red-500" : ""
                } hover:text-red-400 transition-all`}
              >
                <Link href={data.link}>{data.head}</Link>
              </div>
            ))}
          </div>
          <div
            className="text-white  cursor-pointer px-1 md:hidden"
            onClick={() => setIsOpenNav((prev) => !prev)}
          >
            {isOpenNav ? (
              <IoMdClose fontSize={30} />
            ) : (
              <GiHamburgerMenu fontSize={30} />
            )}
          </div>
          <div
            className={`bg-[#ffffff] text-black md:hidden  font-poppins py-4 backdrop-blur-[10px] fixed top-16 ${
              isOpenNav ? "left-0" : "-left-[100%]"
            } transition-all w-full`}
          >
            {navdata.map((data: NavType) => (
              <Link
                onClick={() => dispatch(setNavData(data))}
                key={data.id}
                href={
                  router.pathname !== "/" && data.link.includes("about")
                    ? "/" + data.link
                    : data.link
                }
              >
                <div
                  className={`p-2 text-black px-4 cursor-pointer ${
                    data.state ? "text-red-900" : ""
                  }`}
                >
                  {data.head}
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </header>
      {children}
      <Footer />
      <Modal />
    </>
  );
};

export default MainLayout;
