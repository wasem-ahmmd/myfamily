import React from "react";
import { Button, buttonVariants } from "../ui/button";

const SearchCountry = () => {
  return (
    <div className="mt-3 px-10 ">
      <form className="flex flex-col items-center  justify-between gap-8 pb-10 md:flex-row">
        <input
          type="search"
          className="w-full p-3 outline-none bg-BG-4 rounded-xl md:w-96"
          placeholder="search for a country..."
        />
        <Button
          className={buttonVariants({
            className:
              "p-2 text-xl font-sans capitalize duration-300 ease-in-out border-2 border-BG-4 rounded-xl  hover:bg-BG-4 hover:text-slate-500",
          })}
        >
          clear search
        </Button>
      </form>
    </div>
  );
};

export default SearchCountry;
