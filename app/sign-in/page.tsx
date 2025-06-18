"use client";
import { SignInForm } from "@/components/forms/SignInForm";
import Image from "next/image";

const SignInPage = () => {
  const onLogin = (username: string, password: string) => {
    if (username == "Adam" && password == "Fikri88") return null;
    return "Your Credentials are incorrect";
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Image
        alt="logo"
        src="/logo.jpg"
        width={200}
        height={80}
        className="space-y-3"
      />
      <div className="w-[300px] px-4 border shadow-md py-6 ">
        <SignInForm onLogin={onLogin} />
      </div>
    </div>
  );
};

export default SignInPage;
