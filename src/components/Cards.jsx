import React, { useEffect } from "react";
import Swiper from "swiper";
import Img_1 from "../assets/images/bike.png";
import Img_2 from "../assets/images/card.png";
import Img_3 from "../assets/images/wed.png";
import CardItem from "./Card";
import Data from "./Data";

function Card() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
          // loop: true,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
          // loop: true,
        },
      },
    });
  }, []);
  const airDataElements = Data.map((dataElement) => {
    return (
      <CardItem
        key={dataElement.id}
        // dataElement={dataElement}
        {...dataElement}
      />
    );
  });

  return (
    <div className="swiper container mx-auto my-5 !pl-5 !pr-1 ">
      <div className="swiper-wrapper">{airDataElements}</div>
    </div>
  );
}

export default Card;
