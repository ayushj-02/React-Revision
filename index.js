import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Cart from "./src/components/Cart";
// import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import("./src/components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<>Loading</>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
