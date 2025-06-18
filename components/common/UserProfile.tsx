"use client";
import { User } from "@/models/User";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoIosNotifications } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import Link from "next/link";

interface UserProfileProps {
  user: User;
  onLogout: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center justify-center text-gray-700 rounded-full hover:bg-gray-200 w-8 h-8 cursor-pointer">
        <MdMessage size={20} />
      </div>
      <div className="flex items-center justify-center text-gray-700 rounded-full hover:bg-gray-200 w-8 h-8 cursor-pointer">
        <IoIosNotifications size={20} />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 text-xl rounded-full border border-black bg-amber-400">
              {user.firstName[0]}
            </div>
            <div className="my-1">
              <div className="text-gray-800 text-xs font-extralight">
                {user.firstName + " " + user.lastName}
              </div>
              <div className="text-blue-400 underline text-[10px]">
                Access to your profile.
              </div>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="text-gray-800 text-xs text-center">
            <Link href="/profile" className="w-full">
              Go To Your Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-400 text-xs" onClick={onLogout}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
