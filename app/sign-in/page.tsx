"use client";

import { SignInForm } from "@/components/forms/SignInForm";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();

  const onLogin = async (username: string, password: string): Promise<string | null> => {
    try {
      const response = await axios.post<{ token: string }>("http://localhost:5454/api/appuser/login", {
        username,
        password,
      });
      const { token } = response.data;

      // Stockage du token (attention : localStorage = côté client seulement)
      localStorage.setItem("token", token);

      // Redirection vers une page protégée
      router.push("/");
      return null;
    } catch (error) {
      return "Invalid credentials. Please try again.";
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100">
      <Image
        alt="logo"
        src="/logo.jpg"
        width={200}
        height={80}
        className="mb-6"
      />
      <div className="w-[300px] px-4 border shadow-md py-6 bg-white rounded">
        <SignInForm onLogin={onLogin} />
      </div>
    </div>
  );
};

export default SignInPage;
