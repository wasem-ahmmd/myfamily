"use client";
import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocalPackSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import CountrySelect from "../common/select/CountrySelect";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import PackType from "../common/select/PackType";
import AuthCard from "../common/auth/AuthCard";

const CreatePackInput = () => {
  const LocalPackform = useForm<z.infer<typeof LocalPackSchema>>({
    resolver: zodResolver(LocalPackSchema),
    defaultValues: {
      type: "",
      country: "",
      price: "",
      day: "",
      minute: "",
      statuss: "",
    },
  });

  return (
    <AuthCard
      padingtop="pt-1 xsm:w-[750px]"
      headerLabel="Create Your Package"
      innerwidth="lg:max-w-lg"
    >
      <Form {...LocalPackform}>
        <form
          onSubmit={LocalPackform.handleSubmit(() => {})}
          className=" text-sm text-black font-500 font-sans dark:text-white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
            <FormField
              control={LocalPackform.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Package Type</FormLabel>
                  <FormControl>
                    <PackType />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={LocalPackform.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Country</FormLabel>
                  <FormControl>
                    <CountrySelect {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
            <FormField
              control={LocalPackform.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Prices</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Price" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={LocalPackform.control}
              name="day"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Days</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Day" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
            <FormField
              control={LocalPackform.control}
              name="minute"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Minutes</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Minutes" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={LocalPackform.control}
              name="statuss"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Status</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>Select...</SelectTrigger>
                      <SelectContent {...field}>
                        <SelectGroup className="bg-white cursor-pointer">
                          <SelectValue>
                            {field.value ? field.value : "Select a Status"}
                          </SelectValue>
                          <SelectItem value="active" className="cursor-pointer">
                            Active
                          </SelectItem>
                          <SelectItem
                            value="unactive"
                            className="cursor-pointer"
                          >
                            UnActive
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-center mt-8">
            <Button
              type="submit"
              className="bg-B-blue w-full sm:w-auto text-white font-sans"
            >
              Add Package
            </Button>
          </div>
        </form>
      </Form>
    </AuthCard>
  );
};

export default CreatePackInput;
