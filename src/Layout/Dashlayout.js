import React from "react";
import Sidenav from "../Components/Sidenav/Sidenav";
import { Outlet } from "react-router-dom";
import SidenavV2 from "../Components/SidenavV2/SidenavV2";
import SidenavV3 from "../Components/SidenavV3/SidenavV3";
import SidenavV4 from "../Components/SidenavV4/SidenavV4";

const Dashlayout = () => {
  return (
    <div>
      {/* <Sidenav /> */}
      {/* <SidenavV2 /> */}
      {/* <SidenavV3 /> */}
      <SidenavV4 />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashlayout;
