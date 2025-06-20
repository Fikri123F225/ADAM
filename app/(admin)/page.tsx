"use client";
import Sidebar from "@/components/common/Sidebar";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [totalEmployees, setTotalEmployees] = useState<number | null>(null);
  const [acceptedLeaves, setAcceptedLeaves] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation de données (remplace par tes vraies API)
    setTimeout(() => {
      setTotalEmployees(42);
      setAcceptedLeaves(7);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Contenu principal */}
      <main className="ml-56 flex-1 p-8 bg-slate-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-8 text-slate-700">Dashboard</h1>
        
        {/* Cards statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Employees */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-600">
              {loading ? "..." : totalEmployees}
            </span>
            <span className="text-slate-500 mt-2">Total Employees</span>
          </div>
          
          {/* Accepted Leaves */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl font-bold text-green-500">
              {loading ? "..." : acceptedLeaves}
            </span>
            <span className="text-slate-500 mt-2">Accepted Leaves</span>
          </div>
          
          {/* Pending Leaves */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl font-bold text-orange-500">
              {loading ? "..." : 3}
            </span>
            <span className="text-slate-500 mt-2">Pending Leaves</span>
          </div>
          
          {/* Rejected Leaves */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl font-bold text-red-500">
              {loading ? "..." : 1}
            </span>
            <span className="text-slate-500 mt-2">Rejected Leaves</span>
          </div>
        </div>

        {/* Tableau récent (optionnel) */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="text-slate-500">
            Ici tu peux ajouter un tableau des dernières activités...
          </div>
        </div>
      </main>
    </div>
  );
}