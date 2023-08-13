import {CloseModal} from "@/app-slice/AppSlice";
import {AppDispatch, RootState} from "@/app/store";
import {gallery_images} from "@/data/data";
import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

type Props = {};

const Modal = (props: Props) => {
  const modalRef: any = useRef(null);
  const modalOverlayRef: any = useRef(null);
  const {isModalOpen, currentIndex} = useSelector(
    (state: RootState) => state.app
  );
  const dispatch: AppDispatch = useDispatch();
  const handleClickOutside = (event: any) => {
    if (
      modalRef.current &&
      modalOverlayRef.current &&
      modalOverlayRef.current.contains(event.target) &&
      !modalRef.current.contains(event.target)
    ) {
      //   setIsModalOpen(false);
      dispatch(CloseModal());
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
      className={`modal-container ${isModalOpen ? "active" : ""}`}
    >
      <div ref={modalRef}>
        <Carousel selectedItem={currentIndex} showThumbs={false}>
          {gallery_images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="modal-image">
                <img src={image} alt="" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Modal;
