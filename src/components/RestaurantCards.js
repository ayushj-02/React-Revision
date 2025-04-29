import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCards = ({ resData }) => {
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resData?.card?.card?.info;
  return (
    <div
      className=" p-2 w-[250px] bg-[#f0f0f0]  rounded-md hover:bg-gray-600 hover:text-white"
      style={{ minHeight: "100%" }}
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-md h-[10rem] w-[100%]"
      />
      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <h4 className="res-rating">{avgRating} Star</h4>
      <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
      <h4 className="res-two">{costForTwo}</h4>
      <h4 className="res-time">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCards) => {
  return (props) => {
    return (
      <div>
        <h1 className="absolute bg-[#333] text-white m-1 px-1 rounded-md">
          Promoted
        </h1>
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export default RestaurantCards;
