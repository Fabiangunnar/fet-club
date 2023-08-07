import {NavType, navData} from "@/data/data";
import Link from "next/link";
import {useRouter} from "next/router";
import React, {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoMdClose} from "react-icons/io";

type Props = {};

const MainLayout = ({children}: any) => {
  const [navdata, setNavdata] = useState<any>(navData);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const router = useRouter();
  const handleNav = (item: any) => {
    setNavdata((prev: any) => {
      //   console.log(prev);
      return prev.map((data: {id: any}) => {
        console.log(data.id, item.id);
        if (data.id === item.id) {
          router.push(item.link);
          return {...data, state: true};
        } else {
          return {...data, state: false};
        }
      });
    });
    // router.
  };

  return (
    <>
      <header className="z-20 backdrop-blur-[4px] fixed top-0 left-0 w-full flex  justify-center items-center">
        <nav className="flex p-3 h-16 justify-between relative items-center w-full gap-3 max-w-[70rem]">
          <div className="h-10">
            <img
              className="h-full w-full object-cover"
              src="/logo.png"
              alt=""
            />
          </div>
          <div className="hidden md:flex gap-2 font-poppins justify-center items-center text-white">
            {navdata.map((data: NavType) => (
              <div
                key={data.id}
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
            className={`bg-[#ffffff] md:hidden  font-poppins py-4 backdrop-blur-[10px] fixed top-16 ${
              isOpenNav ? "left-0" : "-left-[100%]"
            } transition-all w-full`}
          >
            {navdata.map((data: NavType) => (
              <Link key={data.id} href={data.link}>
                <div
                  className={`p-2 px-4 cursor-pointer ${
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
    </>
  );
};

export default MainLayout;
