import React from "react";
import { IoFlag } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { MdDashboardCustomize } from "react-icons/md";
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
    link: "",
  },
  {
    title: "Setting",
    icons: <GrSettingsOption />,
    link: "",
  }
];

export const packageSideBar: sidebar[] =[
  {
    title: "Local",
    icons: <IoFlag />,
    link: "",
  },
  {
    title: "International",
    icons: <GiWorld />,
    link: "",
  },
  {
    title: "Custom Package",
    icons: <MdDashboardCustomize />,
    link: "",
  },
]