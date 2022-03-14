import React, { useEffect } from "react";
import Swiper from "swiper";
import Img_1 from "../assets/images/bike.png";
import Img_2 from "../assets/images/card.png";
import Img_3 from "../assets/images/wed.png";
import CardItem from "./Card";

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
          loop: true,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
          loop: true,
        },
      },
    });
  }, []);

  return (
    <div className="swiper container mx-auto my-5 !pl-5 !pr-1 ">
      <div className="swiper-wrapper">
        <CardItem
          image={Img_1}
          rating={"2.5"}
          desc={"Life lessons with Katie Zaferes"}
          price={"130"}
          status={"Online"}
          count={"30"}
          country={"USA"}
        />
        <CardItem
          image={Img_2}
          rating={"3.6"}
          desc={"Learn wedding photography"}
          price={"160"}
          count={"6"}
          country={"UK"}
        />
        <CardItem
          image={Img_3}
          rating={"4.7"}
          desc={"Group Mountain Biking"}
          price={"180"}
          count={"12"}
          country={"CA"}
        />
      </div>
    </div>
  );
}

export default Card;
