import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrucksTable from "../components/ComManage/TrucksTable";
import Sidebar from "../components/Sidebar";

export default function Trucks() {
  return (
    <body className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] w-full lg:ml-24">
        <Navbar />
        <TrucksTable />
        <Footer />
      </div>
    </body>
  );
}
