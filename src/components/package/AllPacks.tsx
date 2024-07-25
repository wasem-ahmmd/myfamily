import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Package {
  image: string;
  users: string;
  country: string;
  price: string;
  day: string;
  minute: string;
  status: string;
}
const packageData: Package[] = [
  {
    image: "https://flagcdn.com/in.svg",
    users: "0",
    country: "India",
    price: "150 INR",
    day: "7 Days",
    minute: "250 min",
    status: "active",
  },
  {
    image: "https://flagcdn.com/sa.svg",
    users: "0",
    country: "Saudi Arabia",
    price: "50 SAR",
    day: "30 Days",
    minute: "100 min",
    status: "unactive",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    users: "0",
    country: "Afghanistan",
    price: "250 AFG",
    day: "15 Days",
    minute: "350 min",
    status: "active",
  },
];

const AllPacks = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 h-auto overflow-y-scroll p-6 justify-center justify-items-center content-start border-2 border-gray-300">
      {packageData?.map((item, index) => (
        <Link href={''} key={index} className="hover:scale-105 hover:transition-all" >
        <div
          
          className="h-full overflow-hidden text-gray-900 border-2 border-gray-700 hover:border-gray-950 rounded-lg shadow-lg shadow-gray-900"
        >
          <Image
            alt=""
            src={item.image}
            width={1600}
            height={800}
            priority
            className="object-cover w-[270px] h-[180px]"
          />
          <div className="p-4 space-y-1 bg-BG-1">
            <div className="mb-3 flex flex-1 items-center justify-between gap-2 xxs:gap-0">
              <h2 className="font-extrabold italic font-sans text-xl">
                {item.country}
              </h2>
              <p
                className={`inline-flex rounded-full bg-opacity-50 px-3 py-1 font-sans text-sm font-medium ${
                  item.status === "active"
                    ? "bg-green-500 text-green-800"
                    : item.status === "unactive"
                    ? "bg-red-500 text-red-800 "
                    : "bg-yellow-500 text-yellow-800 "
                }`}
              >
                {item.status}
              </p>
            </div>
            <div className=" flex items-center gap-4">
              <h3 className="font-700 font-sans text-sm xsm:text-lg capitalize">
                Users
              </h3>
              {":"}
              <span className="font-500 font-sans">{item.users}</span>
            </div>
            <div className=" flex items-center gap-4">
              <h3 className="font-700 font-sans text-sm xsm:text-lg capitalize">
                Price
              </h3>
              {":"}
              <span className="font-500 font-sans">{item.price}</span>
            </div>
            <div className=" flex items-center gap-4">
              <h3 className="font-700 font-sans text-sm xsm:text-lg capitalize">
                Days
              </h3>
              {":"}
              <span className="font-500 font-sans">{item.day}</span>
            </div>
            <div className=" flex items-center gap-4">
              <h3 className="font-700 font-sans text-sm xsm:text-lg capitalize">
                Minutes
              </h3>
              {":"}
              <span className="font-500 font-sans">{item.minute}</span>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default AllPacks;
