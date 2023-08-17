import {CloseModal3} from "@/app-slice/AppSlice";
import {RootState, AppDispatch} from "@/app/store";
import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

type Props = {
  setFormData: (t: any) => void;
};

const Modal3 = ({setFormData}: Props) => {
  const modalRef: any = useRef(null);
  const modalOverlayRef: any = useRef(null);
  const {isModal3Open} = useSelector((state: RootState) => state.app);
  const dispatch: AppDispatch = useDispatch();
  const handleClickOutside = (event: any) => {
    if (
      modalRef.current &&
      modalOverlayRef.current &&
      modalOverlayRef.current.contains(event.target) &&
      !modalRef.current.contains(event.target)
    ) {
      setFormData({
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
      dispatch(CloseModal3());
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
      className={`modal-container ${isModal3Open ? "active" : ""}`}
    >
      <div ref={modalRef} className="modal cursor-pointer">
        <h2 className="text-xl font-semibold font-poppins">Email Sent!</h2>
        <p className="font-poppins text-[14px]">
          Thank you for your time. Your form has been successfully submitted.
          Please contact our support via live chat or mail to confirm your
          bookings and make your payments.
        </p>
      </div>
    </div>
  );
};

export default Modal3;
