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
import { Button } from "../ui/button";
import AuthCard from "../common/auth/AuthCard";

const CreatePackInput = () => {
  const LocalPackform = useForm<z.infer<typeof LocalPackSchema>>({
    resolver: zodResolver(LocalPackSchema),
    defaultValues: {
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
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
