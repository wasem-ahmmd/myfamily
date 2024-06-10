"use client";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/schemas";
import AuthCard from "@/components/common/auth/AuthCard";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SignUi = () => {
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
      checkbox: false,
    },
  });

  return (
    <AuthCard
      headerLabel="Sign up to get started"
      headerPara="If you already have an account,"
      footerDivder="Or continue with"
      buttonHref="/login"
      buttonLabel="Login here!"
      showSocial
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => {})}
          className="space-y-7 text-sm text-black font-500 font-sans dark:text-white"
        >
          <div className="grid grid-cols-2 gap-4 gap-y-7">
            <div className="">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">First Name</FormLabel>
                    <FormControl>
                      <Input  {...field} placeholder="john" type="text" />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="deo" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Email address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="john.doe@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="*******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="cpassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="*******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="checkbox"
                render={({ field }) => (
                  <div className="flex  items-center  gap-2.5">
                    <FormControl>
                      <Input type="checkbox" className="w-4 h-4" />
                    </FormControl>
                    <FormLabel className="font-sans font-400">
                      you agree to our{" "}
                      <Link href={""} className="text-blue-700 hover:underline">
                        terms of use
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                )}
              />
            </div>
          </div>
          <div className="">
            <Button variant={"submit"} size={"submit"} type="submit">
              Get Started
            </Button>
          </div>
        </form>
      </Form>
    </AuthCard>
  );
};

export default SignUi;
