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
    <div className="mt-3">
      <Form {...LocalPackform}>
        <form
          onSubmit={LocalPackform.handleSubmit(() => {})}
          className=" text-sm text-black font-500 font-sans dark:text-white"
        >
          <div className="grid items-center grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-3 3xl:grid-cols-6">

          <div className="">
              <FormField
                control={LocalPackform.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormControl >
                      <PackType   />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>


            <div className="">
              <FormField
                control={LocalPackform.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <CountrySelect {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="">
              <FormField
                control={LocalPackform.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Enter Price" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="">
              <FormField
                control={LocalPackform.control}
                name="day"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Enter Day" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="">
              <FormField
                control={LocalPackform.control}
                name="minute"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Minutes"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="">
              <FormField
                control={LocalPackform.control}
                name="statuss"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select >
                        <SelectTrigger>
                        Select a Status
                        </SelectTrigger>
                        <SelectContent {...field} >
                          <SelectGroup className="bg-white cursor-pointer">
                          <SelectValue>{field.value ? field.value : "Select a Status"}</SelectValue>
                            <SelectItem
                              value="active"
                              className="cursor-pointer"
                            >
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

            <div className="">
              <Button type="submit" className="bg-blue-600 w-full">
                Add Package
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreatePackInput;
