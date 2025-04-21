import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCards = ({ resData }) => {
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    resData?.card?.card?.info;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-rating">{avgRating} Star</h4>
      <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
      <h4 className="res-two">{costForTwo}</h4>
      <h4 className="res-time">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCards;
