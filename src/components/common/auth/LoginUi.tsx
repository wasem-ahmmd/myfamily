"use client";
import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AuthCard from "@/components/common/auth/AuthCard";
import { Input } from "@/components/ui/input";
import { LuLoader2 } from "react-icons/lu";
// import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchLogin } from "@/routesApi";

export const LoginUi = () => {
  const route = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      // checkbox: false,
    },
  });

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: fetchLogin,
    onSuccess: (data) => {
      route.push("/dashboard");
    },
  });
  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <AuthCard headerLabel="Admin Account">
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className="space-y-7 text-sm text-black font-500 font-sans"
        >
          <div className="">
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
            <div className="mt-3.5">
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
            <div className="flex items-center mt-7 justify-between">
              {/* <FormField
                control={form.control}
                name="checkbox"
                render={({ field }) => (
                  <div className="flex  items-center  gap-2.5">
                    <FormControl>
                      <Input type="checkbox" className="w-4 h-4" />
                    </FormControl>
                    <FormLabel className="font-sans font-400">
                      Remember me
                    </FormLabel>
                    <FormMessage />
                  </div>
                )}
              /> */}
              {/* <Link
                href={""}
                className="text-blue-700 font-sans items-center font-600 hover:underline"
              >
                Forgot password{" "}
              </Link> */}
              {mutation.isError && (
                <div className="text-red-500 font-sans">
                  {mutation.error.message}
                </div>
              )}
            </div>
          </div>
          <div className="">
            <Button
              variant={"submit"}
              disabled={mutation.isPending}
              size={"submit"}
              type="submit"
            >
              {mutation.isPending ? (
                <><LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
                 Please wait</>
              ) : (
                "sign in"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </AuthCard>
  );
};
