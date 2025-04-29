import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import UserContext from "./utils/UserContext";

const App = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Ayush Jain",
    };

    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        {/* <Body /> */}
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
