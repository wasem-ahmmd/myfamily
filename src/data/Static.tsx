import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import {MdFamilyRestroom } from "react-icons/md";
import { FaHome, FaUserCircle  } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";




interface sidebar {
    title: string;
    icons: React.ReactNode;
    link: string;
}

interface fotterlink{
  title: string;
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

export const fotterLink: fotterlink[] =[
  {
    title: "About",
    link: ""
  },
  {
    title: "Blog",
    link: ""
  },
  {
    title: "Careers",
    link: ""
  },
  {
    title: "Support",
    link: ""
  },
  {
    title: "Contact Us",
    link: ""
  },
  {
    title: "Developer",
    link: ""
  },
]