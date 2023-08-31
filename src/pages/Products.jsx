import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductsTable from "../components/CartManage/ProductTable";

export default function Products() {
  // const navigate  = useNavigate()
  // navigate(`/editProduct/item.id`)
  //add this on onclick

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#F9F9F9] w-full h-full">
        <Navbar />
        <ProductsTable />
      </div>
    </div>
  );
}
