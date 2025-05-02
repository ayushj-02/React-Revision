import { useState } from "react";
import Shimmer from "./Shimmer";
import ItemList from "./ItemList";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resInfo } = useRestaurantMenu();
  const [showIndex, setShowIndex] = useState(null); // Start with null (nothing open)

  const categories =
    resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (!resInfo) return <Shimmer />;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {resInfo[0]?.card?.card?.text}
      </h1>
      <p className="font-bold text-lg mb-5">
        {resInfo[2]?.card?.card?.info?.cuisines?.join(", ")} -{" "}
        {resInfo[2]?.card?.card?.info?.costForTwoMessage}
      </p>

      {categories?.map((each, index) => {
        const { itemCards } = each?.card?.card;
        const isOpen = showIndex === index; // 👈 simple check

        return (
          <div
            key={index}
            className="accordion mx-[25rem] bg-gray-200 shadow-lg p-4 mb-4 cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => setShowIndex(isOpen ? null : index)}
            >
              <span className="font-bold text-lg">
                {each?.card?.card?.title} ({itemCards.length})
              </span>
              <span
                className={`transform transition-transform ${
                  !isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ^
              </span>
            </div>

            {isOpen && <ItemList itemCards={itemCards} />}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
