import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";

const CardW250 = () => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md">
      <Link href={""}>
        <div className="h-24 relative w-full overflow-hidden ">
          <Image src={"/images/img-2.jpg"} width={750} height={500} alt="" />
          <div className="absolute z-0 h-full w-full"></div>
        </div>
      </Link>
      <div className="z-10 relative p-3.5 ">
        <Avatar className="w-10 rounded-full mb-2 shadow -mt-8 relative border-2 border-white dark:border-slate-800">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Link href={""}>
          <h4 className="text-sm xsm:text-base font-sans font-500 capitalize">
            Delicious Foods
          </h4>
        </Link>
        <div className="font-500 mt-1 flex items-center gap-2 text-xs xsm:text-sm text-black/65">
          <Link href={""}>Travel</Link>
          <div className="md:block hidden">·</div>
          <div className="flex items-center justify-between gap-1">232k 
            <span className="xsm:block hidden">Members</span></div>
        </div>
        <div className="flex gap-2">
          <Button
            className={buttonVariants({
              className: "flex-1 mt-2.5 inline-flex  relative",
              variant: "submit",
              size: "submit",
            })}
          >
            Join
          </Button>
          <Link
            href={""}
            className={buttonVariants({
              className: "inline-flex mt-2.5 !w-auto bg-BG-4 relative",
              size: "submit"
            })}
          >
            view
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardW250;
