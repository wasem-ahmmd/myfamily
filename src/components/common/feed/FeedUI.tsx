import React from "react";
import FeedCard from "./FeedCard";
import Link from "next/link";
import Image from "next/image";

const FeedUI: React.FC = () => {
  return (
    <>
      <FeedCard>
        <div className="image-warrper ">
          <Link href={"/"}>
            <div className="relative w-full lg:h-96 h-full sm:px-4">
              <Image
                src={"/images/img-2.jpg"}
                width={750}
                height={500}
                alt="post-img"
                className="sm:rounded-lg w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
      </FeedCard>
      <FeedCard>
        <div className="sm:px-4 p-2.5 pt-0">
          <p className="font-400 font-sans">
            Photography is the art of capturing light with a camera. It can be
            used to create images that tell stories, express emotions, or
            document reality. it can be fun, challenging, or rewarding. It can
            also be a hobby, a profession, or a passion. 📷
          </p>
        </div>
      </FeedCard>
    </>
  );
};

export default FeedUI;
