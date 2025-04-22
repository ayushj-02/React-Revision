import React, { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import { mockResData } from "../mocks/mockResData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const url =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=80382&tags=layout_CCS_CholeBhature&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

      const res = await fetch(url);
      const json = await res.json();
      const data = json?.data?.cards?.slice(3) || [];

      setAllRestaurants(data);
      setFilteredRestaurants(data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const handleSearch = () => {
    const result = allRestaurants.filter((res) =>
      res?.card?.card?.info?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(result);
  };

  const handleFilter = () => {
    const topRated = allRestaurants.filter(
      (res) => res?.card?.card?.info?.avgRating > 4.5
    );
    setFilteredRestaurants(topRated);
  };

  const handleReset = () => {
    setSearchText("");
    setFilteredRestaurants(allRestaurants);
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search Restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div style={{ margin: "1rem 0" }}>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants near You
        </button>
        <button
          className="filter-btn"
          onClick={handleReset}
          style={{ marginLeft: "1rem" }}
        >
          Reset
        </button>
      </div>

      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((resInfo) => (
              <RestaurantCards
                key={resInfo.card.card.info.id}
                resData={resInfo}
              />
            ))
          ) : (
            <p>No Result Found... Please try again.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
