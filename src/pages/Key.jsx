import React from "react";
import Navbar from "../components/Navbar";
import KeyTable from "../components/KeyTable";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function Key() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#F9F9F9] w-full h-full">
        <Navbar />
        <KeyTable />
        <Footer />
      </div>
    </div>
  );
}
