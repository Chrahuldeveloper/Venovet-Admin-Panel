import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CatTable from "../components/CartManage/CatTable";

export default function Categories() {
  return (
    <body className="flex">
      <Sidebar />
      <div className="bg-[#F9F9F9] w-full h-full">
        <Navbar />
        <CatTable />
        <Footer />
      </div>
    </body>
  );
}
