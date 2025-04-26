import React from "react";

const Shimmer = () => {
  return (
    <div className="res-container">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
        return <div className="res-card" key={index}></div>;
      })}
    </div>
  );
};

export default Shimmer;
