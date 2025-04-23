import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [foodMenu, setFoodMenu] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" +
        id
    );
    const json = await data.json();

    setResInfo(json?.data?.cards);
    setFoodMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };
  console.log(foodMenu);

  return resInfo ? (
    <div className="res">
      <h1 className="name">{resInfo[0]?.card?.card?.text}</h1>
      <p>
        {resInfo[2]?.card?.card?.info?.cuisines?.join(", ")} -{" "}
        {resInfo[2]?.card?.card?.info?.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul style={{ padding: 0 }}>
        {foodMenu?.map((item) => {
          const { name, price } = item?.card?.info;
          return (
            <li style={{ marginBottom: "1rem", listStyle: "none" }}>
              {name} - Rs.{price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
