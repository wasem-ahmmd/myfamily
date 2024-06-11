import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants, Button } from "@/components/ui/button";
import { AiOutlineDown } from "react-icons/ai";

const Comment: React.FC = () => {
  return (
    <div className="sm:p-4 p-2.5 border-t border-gray-100 font-400 font-Montserrat space-y-3 relative">
      <div className="flex items-start gap-3 relative">
        <Link href={"/"}>
          <Avatar className="">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-6 h-6 mt-1 rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-1">
          <Link href={"/"} className="text-black font-600 inline-block">
            Steeve
          </Link>
          <p className="mt-0.5">What a beautiful photo! I love it. 😍 </p>
        </div>
      </div>
      <div className="flex items-start gap-3 relative">
        <Link href={"/"}>
          <Avatar className="">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-6 h-6 mt-1 rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-1">
          <Link href={"/"} className="text-black font-600 inline-block">
            Monroe
          </Link>
          <p className="mt-0.5">You captured the moment.😎</p>
        </div>
      </div>
      <Button
        className={buttonVariants({
          className:
            "flex items-center gap-1.5 text-gray-500 hover:text-blue-500 mt-2",
        })}
      >
        <AiOutlineDown className="text-xl" />
        More Comment
      </Button>
      <div className="sm:py-3 py-2.5 border-t border-gray-100 flex items-center gap-1">
        <Avatar className="">
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="w-6 h-6 mt-1  rounded-full"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1 relative overflow-hidden h-10">
          <textarea
            placeholder="Add Comment...."
            rows={1}
            className="w-full resize-none !bg-transparent px-4 py-2 focus:outline-none"
            aria-haspopup="true"
            aria-expanded="false"
          ></textarea>
        </div>
        <Button
          className={buttonVariants({
            className:
              "text-sm rounded-full py-1.5 px-3.5 bg-color-1",
          })}
        >
          Replay
        </Button>
      </div>
    </div>
  );
};

export default Comment;
