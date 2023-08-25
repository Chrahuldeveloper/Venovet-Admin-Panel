import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function Warehouse() {
  return (
    <body className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9]  w-full  lg:ml-24">
        <Navbar />
        <Footer />
      </div>
    </body>
  );
}
