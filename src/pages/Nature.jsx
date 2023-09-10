import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NatureTable from "../components/ContactMan/NatureTable";
import Sidebar from "../components/Sidebar";

export default function Nature() {
  return (
    <body className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] w-screen">
        <Navbar />
        <NatureTable />
        <Footer />
      </div>
    </body>
  );
}
