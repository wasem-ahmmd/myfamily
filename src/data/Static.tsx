import React from "react";
import { TbPackages } from "react-icons/tb";
import { FaHome, FaUserCircle  } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";




interface sidebar {
    title: string;
    icons: React.ReactNode;
    link: string;
}


export const familySideBarlink: sidebar[] = [
  {
    title: "Dashboard",
    icons: <FaHome />,
    link: "/dashboard",
  },
  {
    title: "Users",
    icons: <FaUserCircle />,
    link: "/users/",
  },
  {
    title: "All Package",
    icons: <TbPackages />,
    link: "/package",
  },
  {
    title: "Setting",
    icons: <GrSettingsOption />,
    link: "",
  }
];
