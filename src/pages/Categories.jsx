import React from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

export default function Categories() {
  // const navigate  = useNavigate()
  // navigate(`editcategory/${item.id}`)
  //add this on onclick
  return <div>Categories</div>;
=======
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
>>>>>>> 4576403e01fdc4aa95ed96781fcf8c91819fa6d3
}
