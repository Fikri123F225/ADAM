// src/components/common/Sidebar.tsx
import React from "react";
import Link from 'next/link';
import {
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaSignOutAlt,
  FaFileAlt,
  FaClipboardList,
  FaHistory,
  FaClock,
  FaPlusCircle
} from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-56 bg-slate-800 text-white flex flex-col justify-between shadow-lg z-20">
      {/* Logo / Titre */}
      <div className="py-8 border-b border-slate-700 text-center font-bold text-2xl tracking-wide">
        SmartRH
      </div>
      {/* Navigation */}
      <nav className="flex-1">
        <ul className="flex flex-col gap-2 mt-8">
          <li>
            <Link href="/" className="flex items-center gap-3 px-6 py-3 hover:bg-slate-700 transition-colors rounded">
              <FaHome /> <span>Accueil</span>
            </Link>
          </li>
          <li>
            <Link href="/employees" className="flex items-center gap-3 px-6 py-3 hover:bg-slate-700 transition-colors rounded">
              <FaUser /> <span>Employés</span>
            </Link>
          </li>
          <li>
            <Link href="/conges" className="flex items-center gap-3 px-6 py-3 hover:bg-slate-700 transition-colors rounded">
              <FaCalendarAlt /> <span>Congés</span>
            </Link>
          </li>
          <li>
            <Link href="/documents" className="flex items-center gap-3 px-6 py-3 hover:bg-slate-700 transition-colors rounded">
              <FaFileAlt /> <span>Document Administrative</span>
            </Link>
          </li>
          <li>
            <Link href="/leaves/requests" className="flex items-center gap-3 px-6 py-3 hover:bg-slate-700 transition-colors rounded">
              <FaClipboardList /> <span>Leaves Requests</span>
            </Link>
          </li>
          <li>
            <Link href="/leaves/history" className="flex items-center gap-3 px-6 py-3 hover:bg-slate-700 transition-colors rounded">
              <FaHistory /> <span>Leaves History</span>
            </Link>
          </li>
          <li>
            <Link href="/overtime" className="flex items-center gap-3 px-6 py-3 hover:bg-slate-700 transition-colors rounded">
              <FaClock /> <span>OverTime</span>
            </Link>
          </li>
          <li>
            <Link href="/leaves/new" className="flex items-center gap-3 px-6 py-3 hover:bg-slate-700 transition-colors rounded">
              <FaPlusCircle /> <span>New Leave</span>
            </Link>
          </li>
        </ul>
      </nav>
      {/* Déconnexion */}
      <div className="py-6 border-t border-slate-700 text-center">
        <Link href="/logout" className="flex items-center justify-center gap-2 px-6 py-2 hover:bg-slate-700 transition-colors rounded">
          <FaSignOutAlt /> <span>Déconnexion</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;