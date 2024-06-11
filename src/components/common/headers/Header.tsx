import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  IoReorderThreeOutline,
  IoSearchOutline,
  IoAddOutline,
} from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  IoIosAddCircleOutline,
  IoMdNotifications,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { RiMessage2Fill, RiMessage2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="z-[100] h-[--m-top] fixed top-0 left-0 w-full flex items-center  bg-white/80 sky-50 backdrop-blur-xl border-b border-slate-200 dark:bg-dark2 dark:border-slate-800">
      <div className="flex items-center  w-full xl:px-6 px-2 py-3 m-auto max-lg:gap-10">
        <div className="xxl:w-[--w-side] lg:w-[--w-side-sm]">
          <div className="flex items-center gap-1">
            {/* <Button
              className={buttonVariants({
                variant: "ghost",
                size:"icon",
                className:
                  "w-8 h-8 rounded-full hover:bg-gray-100  dark:hover:bg-slate-600",
              })}
            ><IoReorderThreeOutline className="text-2xl z-50"/> <RxCross2 /></Button> */}
            <div className="logo">
              <Link href={"/"}>
                <h1 className="w-28 font-600 font-Georgia md:block hidden dark:!hidden dark:text-white">
                  My Family
                </h1>
                <h1 className="hidden font-600 font-Georgia max-md:block w-28  px-2 dark:!hidden">
                  My Family
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 relative ">
          <div className="max-w-[1220px] mx-auto flex items-center justify-between">
            <div className="xl:w-[600px] sm:w-96 sm:relative rounded-xl overflow-hidden z-20 bg-BG-1 max-md:hidden w-screen left-0 max-sm:fixed max-sm:top-2 dark:!bg-white/5">
              <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                placeholder="Search Friends, videos .."
                className="w-full !pl-10 !font-400 pr-1 !bg-transparent h-12 !text-sm outline-none"
              />
            </div>
            <div className="flex items-center sm:gap-4 gap-2 absolute right-5 top-1/2 -translate-y-1/2 text-black">
              <Button
                className={buttonVariants({
                  size: "icon",
                  className:
                    "sm:p-2 p-1 rounded-full relative sm:bg-BG-4 dark:text-white",
                })}
              >
                <IoAddOutline className="w-5 h-5 max-sm:hidden" />
                <IoIosAddCircleOutline className="sm:hidden text-2xl" />
              </Button>
              <Button
                className={buttonVariants({
                  size: "icon",
                  className:
                    "sm:p-2 p-1 rounded-full relative sm:bg-BG-4 dark:text-white",
                })}
              >
                <IoMdNotifications className="w-6 h-6 max-sm:hidden" />
                <div className="absolute top-0 right-0 -m-[2px] sm:-m-1 bg-B-red text-white text-xs px-1 rounded-full">
                  6
                </div>
                <IoMdNotificationsOutline className="sm:hidden text-2xl" />
              </Button>
              <Button
                className={buttonVariants({
                  size: "icon",
                  className:
                    "sm:p-2 p-1 rounded-full relative sm:bg-BG-4 dark:text-white",
                })}
              >
                <RiMessage2Fill className="w-5 h-5 max-sm:hidden" />
                <RiMessage2Line className="sm:hidden text-2xl" />
              </Button>
              <div className="rounded-full relative bg-secondery cursor-pointer shrink-0">
                <Avatar className="sm:w-9 sm:h-9 w-7 h-7 rounded-full shadow shrink-0">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
