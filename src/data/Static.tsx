import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import {MdFamilyRestroom } from "react-icons/md";




interface sidebar {
    title: string;
    icons: React.ReactNode;
    link: string;
}

interface fotterlink{
  title: string;
  link: string;
}


export const sideBarlink: sidebar[] = [
    {
        title: "Feed",
        icons: <AiTwotoneHome />,
        link: "/",
      },
      {
        title: "Family",
        icons: <MdFamilyRestroom />,
        link: "/family/feed",
      },
]

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