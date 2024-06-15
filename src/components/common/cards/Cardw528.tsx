import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdAddCircle } from "react-icons/io";
import { Button, buttonVariants } from "@/components/ui/button";

const Cardw528 = () => {
  return (
    <div className="flex md:items-center space-x-4 p-4 rounded-md shadow-xl border">
      <div className="sm:w-20 w-14 sm:h-20 h-14 flex-shrink-0 rounded-lg relative">
        <Image
          src={"/images/img-2.jpg"}
          width={750}
          height={500}
          alt=""
          className="absolute w-full h-full inset-0 rounded-md object-cover shadow-sm"
        />
      </div>
      <div className="flex-1">
        <Link
          href={""}
          className="md:text-lg text-base font-600 font-sans capitalize text-black dark:text-white"
        >
          Delicious Foods
        </Link>
        <div className="flex space-x-2 items-center text-black/65 text-sm font-500 font-sans">
          <div className="flex items-center justify-between gap-1">
            16K <span className="xsm:block hidden">Members</span>
          </div>
          <div>·</div>
          <div>12 posts a week</div>
        </div>
        <div className="flex items-center mt-2">
          <Avatar className="w-6 h-6 rounded-full border-2 border-gray-200 -mr-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-6 h-6 rounded-full border-2 border-gray-200">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-xs xxs:text-sm text-gray-500 font-sans ml-2">
            {" "}
            14 friends are members
          </div>
        </div>
      </div>

      <Button
        className={buttonVariants({
          className:
            " bg-BG-4 text-blue-700 rounded-md font-600 dark:text-white gap-1 max-md:hidden relative inline-flex",
          size: "submit",
        })}
      >
        <IoMdAddCircle className="text-xl -ml-1" />
        Join
      </Button>
    </div>
  );
};

export default Cardw528;
