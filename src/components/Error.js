import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>
        {err.status}:{err.statusText}
      </h1>
      <h1>Oppsss!!!</h1>
      <h2>Something went wrong, Please try again!!</h2>
    </div>
  );
};

export default Error;
