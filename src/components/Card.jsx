import React from "react";
import Image from "../assets/images/card.png";
import { SwiperSlide } from "swiper/react";

import { FiStar } from "react-icons/fi";

function CardItem(props) {
  return (
    <SwiperSlide>
      <div className="card relative">
        <span className="uppercase bg-white p-1 absolute left-2 top-2 text-xs">
          {props.status || "Offline"}
        </span>
        <img src={props.image} alt="" />
        <div>
          <div className="rating flex items-center gap-1">
            <FiStar color="#FE395C" fill="#FE395C" />
            <span>{props.rating}</span>
            <span className="opacity-50">({props.count})</span>
            <div className="opacity-50">·</div>
            <span className="opacity-50">{props.country}</span>
          </div>
          <div className="info">
            <p className="truncate text-sm">{props.desc}</p>
            <p>
              <b>
                From $<span>{props.price}</span>
              </b>
              &nbsp; / person
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default CardItem;
