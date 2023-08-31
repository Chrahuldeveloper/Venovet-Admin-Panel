import React from "react";
import Navbar from "../components/Navbar";
import DashboardHome from "../components/DashboardHome";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#F9F9F9] w-full h-full">
        <Navbar />
        <DashboardHome />
      </div>
    </div>
  );
}

export default Home;
