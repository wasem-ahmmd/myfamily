import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import OneUserData from "./OneUserData";

const OneUser = () => {
  return (
    <div className="data-table-common data-table-two rounded-sm border bg-white py-4 shadow">
    <div className="flex justify-between gap-3 sm:gap-0 border-b px-2 sm:px-8 pb-4">
      <div className="w-100">
       <h1 className="text-2xl font-sans italic">7051715667</h1>
      </div>
      <div className="flex items-center gap-2 font-500 font-sans">
        <select className="bg-transparent pl-2 border">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <p className="pl-2 text-black font-sans hidden sm:block">Entries Per Page</p>
      </div>
    </div>
    <OneUserData />
    <div className="flex justify-center items-center sm:justify-between border-t border-stroke px-8 pt-5">
      <p className="font-500 font-sans hidden sm:block">Showing 1 0f 3 pages</p>
      <div className="flex items-center gap-2">
        <Button
          className={buttonVariants({
            className:
              "flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-B-blue hover:text-white",
          })}
        >
          <GoChevronLeft className="text-xl" />
        </Button>
        <Button
          className={buttonVariants({
            className:
              "flex cursor-pointer items-center justify-center font-sans bg-B-blue text-white rounded-md p-1 px-2 hover:bg-B-blue hover:text-white",
          })}
        >
         1
        </Button>
        <Button
          className={buttonVariants({
            className:
              "flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-B-blue hover:text-white",
          })}
        >
          2
        </Button>
        <Button
          className={buttonVariants({
            className:
              "flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-B-blue hover:text-white",
          })}
        >
          3
        </Button>
        <Button
          className={buttonVariants({
            className:
              "flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-B-blue hover:text-white",
          })}
        >
          <GoChevronRight className="text-xl" />
        </Button>
      </div>
    </div>
  </div>
  )
}

export default OneUser