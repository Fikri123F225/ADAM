"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React, { useState } from "react";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Please Enter a correct username",
    })
    .max(50, {
      message: "Please Enter a correct username",
    }),
  password: z
    .string()
    .min(6, {
      message: "Please Enter a correct password",
    })
    .max(50, {
      message: "Please Enter a correct password",
    }),
});

interface SignInFormProps {
  onLogin: (username: string, password: string) => string | null;
}

export const SignInForm: React.FC<SignInFormProps> = ({ onLogin }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = onLogin(values.username, values.password);
    setErrorMessage(message);
  }

  return (
    <Form {...form}>
      <div className="text-[#00A39E] text-right text-lg my-4">
        Acces to your account.
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs text-gray-700 font-light">
                  Username
                </FormLabel>
                <Input placeholder="Enter your username ..." {...field} />
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xs text-gray-700 font-light">
                  Password
                </FormLabel>
                <Input
                  placeholder="Enter your password ..."
                  {...field}
                  type="password"
                />
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="hover:underline text-blue-400 hover:text-blue-500 text-[10px] text-right cursor-pointer mb-4">
          Forget Password ?
        </div>
        {errorMessage && (
          <div className="text-xs text-center text-red-500">{errorMessage}</div>
        )}
        <Button
          type="submit"
          className="bg-[#00A39E] hover:bg-[#00A39E] cursor-pointer w-full"
        >
          Login
        </Button>
        <div className="text-[10px] text-gray-700">
          Don&apos;t have an account ?{" "}
          <span className="cursor-pointer underline text-[12px] text-blue-400 ">
            Click Here to Continue !
          </span>
        </div>
      </form>
    </Form>
  );
};
