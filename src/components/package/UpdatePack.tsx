"use client";
import React from "react";
import AuthCard from "../common/auth/AuthCard";
import Image from "next/image";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button, buttonVariants } from "../ui/button";
import Select, { SingleValue } from "react-select";
interface countrydata {
  name: string;
}
const country: countrydata[] = [
  {
    name: "india",
  },
  {
    name: "saudhi",
  },
  {
    name: "usa",
  },
  {
    name: "wellcome",
  },
  
];

const UpdatePack = () => {
  const countryOptions = country.map((country) => ({
    label: country.name,
    value: country.name.toLowerCase(),
  }));
  return (
    <AuthCard
      padingtop="pt-1 xsm:w-[750px]"
      headerLabel="my New pack"
      innerwidth="lg:max-w-lg"
    >
      <div className="">
        <div className="grid ">
          <div className="grid grid-cols-3 xsm:grid-cols-4 sm:grid-cols-6 gap-3">
            <div className="border border-slate-300  p-3 rounded-md hover:bg-BG-4 hover:border hover:border-black/55">
              <Image
                src={"https://flagcdn.com/in.svg"}
                alt="country"
                width={160}
                height={80}
                priority
              />
            </div>
          </div>
        </div>
        <div className="mt-8  sm:px-10">
          <form className="text-sm text-black font-500 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="grid grid-cols-1">
                <label  className="font-sans text-base">
                  Plan Name
                </label>
                <input
                  type="text"
                  name="planname"
                  className="bg-BG-4/60 p-1 border mt-1  border-black rounded-md outline-none"
                />
              </div>
              <div className="">
                <label className="font-sans text-base">Rate</label>
                <input
                  type="text"
                  name="rate"
                  className="bg-BG-4/60 p-1 border mt-1 w-full  border-black rounded-md outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className="">
                <label className="font-sans text-base">Country</label>

                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  options={countryOptions}
                  instanceId="country-select"
                  aria-labelledby="country-select-label"
                  aria-live="polite"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="">
                <label className="font-sans text-base">validity Days</label>
                <input
                  type="text"
                  name="validitydays"
                  className="bg-BG-4/60 p-1 border mt-1 w-full  border-black rounded-md outline-none"
                />
              </div>
              <div className="">
                <label className="font-sans text-base">minute</label>
                <input
                  type="text"
                  name="minute"
                  className="bg-BG-4/60 p-1 border mt-1 w-full  border-black rounded-md outline-none"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                variant={"submit"}
                size={"submit"}
                type="submit"
                className={buttonVariants({ className: "w-auto bg-submit" })}
              >
                UpDate
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AuthCard>
  );
};

export default UpdatePack;
