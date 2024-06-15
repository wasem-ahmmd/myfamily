"use client";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants, Button } from "@/components/ui/button";
import { BsThreeDots, BsHeartFill } from "react-icons/bs";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { FiShare2 } from "react-icons/fi";
import Comment from "@/components/common/feed/Comment";

interface feedProps {
  children: React.ReactNode;
  showComment?: boolean;
}

const FeedCard = ({ children, showComment }: feedProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg text-sm font-500 font-sans border mb-3 ">
      <div className="flex gap-3 sm:p-4 p-2.5 text-sm font-500">
        <Link href={"/"}>
          <Avatar className="border border-blue-600">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-1">
          <Link href={"/"}>
            <h4 className="text-black"> Monroe Parker </h4>
          </Link>
          <div className="text-xs text-gray-500 "> 2 hours ago</div>
        </div>
        <div className="items-center">
          <Button className={buttonVariants({ className: "hover:bg-BG-4 rounded-full px-2" })}>
            <BsThreeDots className="text-xl" />
          </Button>
        </div>
      </div>
      {children}
      <div className="sm:p-4 p-2.5 flex items-center  justify-between gap-4 text-xs font-600 font-sans">
        <div className="flex items-center gap-3 ">
          <div className="flex items-center gap-2.5 rounded-full">
            <Button
              className={buttonVariants({
                className: "text-red-500 bg-red-100 px-2 items-center  rounded-full ",
              })}
            >
              <BsHeartFill className="text-lg  text-red-700" />
            </Button>
            <Link href={"/"}>1,300</Link>
          </div>
        <div className="flex items-center gap-3">
          <Button
            className={buttonVariants({
              className: " bg-slate-200/70 px-2  rounded-full ",
            })}
          >
            <BiSolidMessageRoundedDetail className="text-lg" />
          </Button>
          <span>260</span>
        </div>
        </div>
        <div className="flex items-center">
          <Button
            className={buttonVariants({
              className: "ml-auto hover:bg-BG-4 rounded-full px-2",
            })}
          >
            <PiPaperPlaneTilt className="text-xl" />
          </Button>
          <Button className={buttonVariants({
            className: " hover:bg-BG-4 rounded-full px-2"
          })}>
            <FiShare2 className="text-xl" />
          </Button>
        </div>
      </div>
      {
        showComment && <Comment />
      }
    </div>
  );
};

export default FeedCard;
