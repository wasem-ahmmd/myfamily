import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import {MdFamilyRestroom } from "react-icons/md";
import { CgFeed } from "react-icons/cg";
import { SiTorbrowser } from "react-icons/si";
import { GiFamilyTree } from "react-icons/gi";

import { HiOutlineHomeModern } from "react-icons/hi2";




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
        link: "/family",
      },
]


export const familySideBarlink: sidebar[] = [
  {
    title: "Feed",
    icons: <CgFeed />,
    link: "/family/",
  },
  {
    title: "Browser",
    icons: <SiTorbrowser />,
    link: "/family/browser",
  },
  {
    title: "My Family",
    icons: <GiFamilyTree />,
    link: "/family/joins",
  },
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