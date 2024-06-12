import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";

const PeopleKnow = () => {
  return (
    <div className="peopleknow-widget  p-5 px-6 rounded-lg shadow-md border ">
      <div className="flex items-baseline justify-between text-black dark:text-white">
        <h3 className="font-700 font-sans text-base"> People you may know </h3>
        <Link href={""} className="text-sm text-blue-500 hover:underline">
          See all
        </Link>
      </div>
      <div className="mt-5">
        <div className="flex items-center gap-3 mb-4">
          <Link href={""}>
          <Avatar className="w-10 h-10 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </Link>
          <div className="flex-1">
            <Link href={''}>
            <h4 className="text-sm font-sans font-600">John Michael</h4>
            </Link>
            <div className="mt-0.5 text-xs font-400 font-sans"> 125k Following </div>
          </div>
          <Button variant={"follow"} size={'submit'}>follow</Button>
        </div>


        <div className="flex items-center gap-3 mb-4">
          <Link href={""}>
          <Avatar className="w-10 h-10 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </Link>
          <div className="flex-1">
            <Link href={''}>
            <h4 className="text-sm font-sans font-600">John Michael</h4>
            </Link>
            <div className="mt-0.5 text-xs font-400 font-sans"> 125k Following </div>
          </div>
          <Button variant={"follow"} size={'submit'}>follow</Button>
        </div>



        <div className="flex items-center gap-3 mb-4">
          <Link href={""}>
          <Avatar className="w-10 h-10 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </Link>
          <div className="flex-1">
            <Link href={''}>
            <h4 className="text-sm font-sans font-600">John Michael</h4>
            </Link>
            <div className="mt-0.5 text-xs font-400 font-sans"> 125k Following </div>
          </div>
          <Button variant={"follow"} size={'submit'}>follow</Button>
        </div>
        
        
      </div>
    </div>
  );
};

export default PeopleKnow;
