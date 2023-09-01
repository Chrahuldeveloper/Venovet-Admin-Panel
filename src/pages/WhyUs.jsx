import React from "react";
import WhyTable from "../components/WhyTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function WhyUs() {
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="w-screen bg-[#F9F9F9] ">
        <Navbar />
        <WhyTable />
      </div>
    </div>
  );
}
