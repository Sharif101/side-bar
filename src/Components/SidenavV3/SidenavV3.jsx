import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaIcons } from "react-icons/fa";

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Content",
    exact: true,
    to: `/content`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Courses", to: "/content/courses" },
      { name: "Videos", to: "/content/videos" },
    ],
  },
  { name: "Design", to: `/design`, iconClassName: "bi bi-vector-pen" },

  { name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
  { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];

const SidenavV3 = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <p>+</p>
    </div>
  );
};

export default SidenavV3;
