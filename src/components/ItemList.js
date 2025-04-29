import React from "react";

const ItemList = ({ itemCards }) => {
  return itemCards?.map((i, index) => {
    return (
      <div
        key={index}
        className="flex justify-between bg-white p-4 "
        style={{ borderBottom: "1px solid #ccc" }}
      >
        <div className="details w-9/12 text-left">
          <div className="font-bold text-lg color-gray-100">
            {i?.card?.info?.name}
          </div>
          <div className="font-bold">
            ₹{i?.card?.info?.defaultPrice / 100 || i?.card?.info?.price / 100}
          </div>
          <div className="text-xs">{i?.card?.info?.description}</div>
        </div>
        <div className="relative w-3/12">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              i?.card?.info?.imageId
            }
            alt="ing"
            className="rounded-lg w-full max-h-25"
          />

          <div className="absolute mx-12" style={{ top: "5rem" }}>
            <button className="font-bold text-green-600 rounded-lg py-1 px-5 bg-white shadow-lg">
              ADD
            </button>
          </div>
        </div>
      </div>
    );
    // "zv5acjaniegsgjx8zvxp"
  });
};

export default ItemList;
