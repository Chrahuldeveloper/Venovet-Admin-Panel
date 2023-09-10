import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ServeTable from "../components/ServeTable";
export default function WhoweServe() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#F9F9F9] w-full h-screen">
        <Navbar />
        <ServeTable />
      </div>
    </div>
  );
}
