import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
