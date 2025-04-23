import React from "react";
import User from "./User";
import UserClass from "./UserClass";

//Function Component

function About() {
  return (
    <>
      <h1>About</h1>
      <h2>Page dedicated to about us</h2>
      <User name={"Ayush Functional"} />
      <UserClass name={"Ayush Class"} />
    </>
  );
}

// Class Component
// class About extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>About Class</h1>
//         <h2>Page dedicated to about us</h2>
//         <UserClass name={"Ayush Class"} />
//         <User name={"Ayush Functional"} />
//       </>
//     );
//   }
// }
export default About;
