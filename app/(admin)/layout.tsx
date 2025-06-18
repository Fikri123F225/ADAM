"use client";

import { AdminNavbar } from "@/components/common/AdminNavbar";
import { user } from "@/helpers/data";
import React from "react";

export const Footer = () => {};

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNavbar user={user} onLogout={() => console.log("logout")} />
      <div>{children}</div>
    </div>
  );
};

export default UserLayout;
