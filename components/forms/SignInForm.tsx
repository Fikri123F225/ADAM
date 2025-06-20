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
    .min(2, { message: "Please enter a valid username" })
    .max(50, { message: "Username too long" }),
  password: z
    .string()
    .min(6, { message: "Please enter a valid password" })
    .max(50, { message: "Password too long" }),
});

interface SignInFormProps {
  onLogin: (username: string, password: string) => Promise<string | null>;
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const message = await onLogin(values.username, values.password);
    setErrorMessage(message);
  };

  return (
    <Form {...form}>
      <div className="text-[#00A39E] text-right text-lg my-4">
        Access to your account.
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-gray-700 font-light">Username</FormLabel>
              <Input placeholder="Enter your username ..." {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-gray-700 font-light">Password</FormLabel>
              <Input placeholder="Enter your password ..." type="password" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="hover:underline text-blue-400 hover:text-blue-500 text-[10px] text-right cursor-pointer mb-4">
          Forgot Password?
        </div>
        {errorMessage && (
          <div className="text-xs text-center text-red-500">{errorMessage}</div>
        )}
        <Button
          type="submit"
          className="bg-[#00A39E] hover:bg-[#009a95] cursor-pointer w-full"
        >
          Login
        </Button>
        <div className="text-[10px] text-gray-700 text-center">
          Don&apos;t have an account?{" "}
          <span className="cursor-pointer underline text-[12px] text-blue-400 ">
            Click here to register!
          </span>
        </div>
      </form>
    </Form>
  );
};
