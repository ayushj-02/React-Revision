import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resInfo, foodMenu } = useRestaurantMenu();

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
