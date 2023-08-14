import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ComTable from "../components/ComManage/ComTable";
import Sidebar from "../components/Sidebar";

export default function Companies() {
  return (
    <body className="flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] w-screen md:ml-72">
        <Navbar />
        <ComTable />
        <Footer />
      </div>
    </body>
  );
}
