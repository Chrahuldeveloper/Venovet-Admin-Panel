import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CatTable from "../components/CartManage/CatTable";

export default function Categories() {
  return (
    <body className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9]  w-full  lg:ml-24">
        <Navbar />
        <CatTable />
        <Footer />
      </div>
    </body>
  );
}
