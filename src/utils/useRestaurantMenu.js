import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [foodMenu, setFoodMenu] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchDataMenu();
  }, []);
  const fetchDataMenu = async () => {
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

  return { resInfo, foodMenu };
};

export default useRestaurantMenu;
