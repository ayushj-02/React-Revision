import React, { useState, useEffect, useContext } from "react";
import RestaurantCards, { withPromotedLabel } from "./RestaurantCards";
import { mockResData } from "../mocks/mockResData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useStatusOnline();

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

  if (onlineStatus === false)
    return <h1>Internet off, Please start yout internet connection</h1>;

  const RestaurantsCardPromoted = withPromotedLabel(RestaurantCards);
  const { loggedInUser, setUserName } = useContext(UserContext);
  return (
    <div className="body">
      <div className="search ml-2  py-3">
        <input
          type="text"
          placeholder="Search Restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-solid border-black px-2.5 py-0.75 rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-2.5 py-0.75 bg-[#ccc] rounded-lg"
        >
          Search
        </button>
        <button
          className="ml-2 px-2.5 py-0.75 bg-[#ccc] rounded-lg "
          onClick={handleFilter}
        >
          Top Rated Restaurants near You
        </button>
        <button
          onClick={handleReset}
          style={{ marginLeft: "1rem" }}
          className="ml-2 px-2.5 py-0.75 bg-[#ccc] rounded-lg"
        >
          Reset
        </button>
        <label htmlFor="" className="ml-6">
          User LoggedIn :{" "}
        </label>
        <input
          className="border border-black"
          value={loggedInUser}
          onChange={(e) => setUserName(e?.target?.value)}
        />
      </div>

      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap gap-2 justify-evenly">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((resInfo) => (
              <Link
                to={"/restaurants/" + resInfo.card.card.info.id}
                key={resInfo.card.card.info.id}
              >
                {resInfo.card.card.info.promoted ? (
                  <RestaurantsCardPromoted resData={resInfo} />
                ) : (
                  <RestaurantCards resData={resInfo} />
                )}
              </Link>
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
