import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GrSettingsOption } from "react-icons/gr";

interface sidebarProps{
  children: React.ReactNode
}

const MainSideBar = ({children}: sidebarProps) => {
  return (
    <div className="fixed top-0 left-0  z-[99] pt-20 border-r overflow-hidden hover:overflow-y-scroll  transition-transform xl:duration-500 max-xl:w-[50%] max-xl:-translate-x-full">
      <div className=" max-xl:bg-white  shadow-sm xxl:w-100 sm:w-[232px] w-[100%] h-[calc(100vh-64px)] relative z-30 max-lg:border-r dark:max-xl:!bg-slate-700 dark:border-slate-700">
        <div className="px-2">
          <div className="menu-pagelink border-b mb-3">
            {children}
          </div>
          {/* <div className="menu-userlinks border-b mb-6">
            <div className="menu-heading font-sans font-500 px-2 mb-4">
              User Page
            </div>
            <div className="user-links px-3 mb-3">
              <div className="bg-BG-4 flex items-center gap-4 pr-1 py-1 rounded-full">
                <Avatar className="w-10 h-10  rounded-full shadow shrink-0">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="font-500 font-sans">waseem</span>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 rounded-xl hover:bg-BG-4 mb-1 cursor-pointer">
                <GrSettingsOption className="text-xl" />
                <h1 className="font-sans font-600">Setting</h1>
              </div>
          </div> */}
          {/* <footer className="footer text-xs font-500 font-sans flex flex-wrap gap-2 gap-y-[8px] p-2 mt-2">
            {
              fotterLink?.map((item,index)=>(
                <Link href={item.link} key={item.title} className="hover:underline">
                {item.title}
              </Link>
              ))
            }
          </footer> */}
        </div>
      </div>
    </div>
  );
};

export default MainSideBar;
