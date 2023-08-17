import {CloseModal2} from "@/app-slice/AppSlice";
import {AppDispatch, RootState} from "@/app/store";
import Link from "next/link";
import React, {useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import {FaWhatsapp} from "react-icons/fa";
import {GoMail} from "react-icons/go";

type Props = {};

const Modal2 = (props: Props) => {
  const modalRef: any = useRef(null);
  const modalOverlayRef: any = useRef(null);
  const {isModal2Open} = useSelector((state: RootState) => state.app);
  const dispatch: AppDispatch = useDispatch();
  const handleClickOutside = (event: any) => {
    if (
      modalRef.current &&
      modalOverlayRef.current &&
      modalOverlayRef.current.contains(event.target) &&
      !modalRef.current.contains(event.target)
    ) {
      //   setIsModalOpen(false);
      dispatch(CloseModal2());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={modalOverlayRef}
      className={`modal-container ${isModal2Open ? "active" : ""}`}
    >
      <div
        ref={modalRef}
        className="flex flex-col gap-8 justify-center items-center"
      >
        <div>
          <h2 className="font-poppins text-4xl text-white">contact us</h2>
        </div>
        <div className="flex  gap-8 justify-center items-center">
          <Link
            target="_blank"
            href={"https://api.whatsapp.com/send?phone=12148365136&text="}
            className="p-6 rounded-full bg-[#25D366] text-white"
          >
            <FaWhatsapp fontSize={44} />
          </Link>
          <Link
            target="_blank"
            href={"mailto:beehivediscreetclub@gmail.com "}
            className="p-6 rounded-full bg-[#0084FF] text-white"
          >
            <GoMail fontSize={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
