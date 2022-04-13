import React from "react";
import { SwiperSlide } from "swiper/react";

import { FiStar } from "react-icons/fi";
function CardItem(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = props.location;
  }
  return (
    <SwiperSlide>
      <div className="card relative">
        {badgeText && (
          <span className="uppercase bg-white p-1 absolute left-2 top-2 text-xs">
            {badgeText}
          </span>
        )}

        <img src={props.coverImg} alt="" />
        <div>
          <div className="rating flex items-center gap-1">
            <FiStar color="#FE395C" fill="#FE395C" />
            <span>{props.stats.rating}</span>
            <span className="opacity-50">({props.stats.reviewCount})</span>
            <div className="opacity-50">·</div>
            <span className="opacity-50">{props.location}</span>
          </div>
          <div className="info">
            <p className="truncate text-sm">{props.description}</p>
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
