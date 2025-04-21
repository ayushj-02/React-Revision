import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="5">
    Hello React
  </h1>
);

//  React Components

const Title = ({ name }) => {
  return <h1>{`Hello ${name}`}</h1>;
};

// Component Composition
const FunctionalComponentHeading = () => {
  return (
    <div>
      <Title name="Ayush" />
      <h1>Functional Components</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponentHeading />);
