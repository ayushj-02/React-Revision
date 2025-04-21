import React, { useState } from "react";
import RestaurantCards from "./RestaurantCards";
import { mockResData } from "../mocks/mockResData";

const Body = () => {
  const [filterRestaurants, setFilterRestaurants] = useState(mockResData);
  const handleFilter = () => {
    // console.log("click");
    setFilterRestaurants(
      filterRestaurants.filter((res) => res?.card?.card?.info?.avgRating > 4)
    );
  };

  const handleReset = () => {
    setFilterRestaurants(mockResData);
  };

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div>
        <button
          className="filter-btn"
          onClick={handleFilter}
          disabled={filterRestaurants !== mockResData}
        >
          Top Rated Restaurants near You
        </button>
        <button
          className="filter-btn"
          style={{ marginLeft: "1rem" }}
          onClick={handleReset}
          disabled={filterRestaurants === mockResData}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {filterRestaurants.map((resInfo) => {
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
