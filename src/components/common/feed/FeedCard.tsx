"use client";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants, Button } from "@/components/ui/button";
import { BsThreeDots, BsHeartFill } from "react-icons/bs";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { FiShare2 } from "react-icons/fi";

import Image from "next/image";
import Comment from "./Comment";

interface feedProps {
  children: React.ReactNode;
}

const FeedCard = ({
  children
}: feedProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg text-sm font-500 font-sans border ">
      <div className="flex gap-3 sm:p-4 p-2.5 text-sm font-500">
        <Link href={"/"}>
          <Avatar className="border border-blue-600">
            <AvatarImage src="https://github.com/shadcn.png"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-1">
          <Link href={"/"}>
            <h4 className="text-black"> Monroe Parker </h4>
          </Link>
          <div className="text-xs text-gray-500 "> 2 hours ago</div>
        </div>
        <div className="  items-center">
          <Button className={buttonVariants({ className: "rounded-full" })}>
            <BsThreeDots className="text-xl" />
          </Button>
        </div>
      </div>
      {children}
      <div className="sm:p-4 p-2.5 flex items-center gap-4 text-xs font-600 font-sans">
        <div className="">
          <div className="flex items-center gap-2.5 rounded-full">
            <Button
              className={buttonVariants({
                className: "text-red-500 bg-red-100 rounded-full ",
              })}
            >
              <BsHeartFill className="text-xl  text-red-700" />
            </Button>
            <Link href={"/"}>1,300</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            className={buttonVariants({
              className: " bg-slate-200/70  rounded-full ",
            })}
          >
            <BiSolidMessageRoundedDetail className="text-xl" />
          </Button>
          <span>260</span>
        </div>
        <Button
          className={buttonVariants({
            className: "ml-auto",
          })}
        >
          <PiPaperPlaneTilt className="text-xl" />
        </Button>
        <Button className={buttonVariants({})}>
          <FiShare2 className="text-xl" />
        </Button>
      </div>
      <Comment />
    </div>
  );
};

export default FeedCard;
