import React from "react";
import RestaurantCards from "./RestaurantCards";
import { mockResData } from "../mocks/mockResData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {mockResData.map((resInfo) => {
          return (
            <RestaurantCards
              key={resInfo.card.card.info.id}
              resData={resInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
