import { User } from "@/models/User";
import Link from "next/link";
import { CompanyLogo } from "./CompanyLogo";
import { UserProfile } from "./UserProfile";

interface AdminNavbarProps {
  user: User;
  onLogout: () => void;
}

export const AdminNavbar: React.FC<AdminNavbarProps> = ({ user, onLogout }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border border-b-gray-300 w-screen">
      <Link href="/">
        <CompanyLogo />
      </Link>
      <div className="flex items-center space-x-4 text-xs">
        <Link href="/">
          <div className="hover:underline hover:text-gray-700 cursor-pointer text-gray-800">
            Home
          </div>
        </Link>
        <div className="hover:underline hover:text-gray-700 cursor-pointer text-gray-800">
          Employees
        </div>
        <div className="hover:underline hover:text-gray-700 cursor-pointer text-gray-800">
          Statistics
        </div>
        <div className="hover:underline hover:text-gray-700 cursor-pointer text-gray-800">
          Configuration
        </div>
        <div></div>
      </div>
      <UserProfile user={user} onLogout={onLogout} />
    </div>
  );
};
