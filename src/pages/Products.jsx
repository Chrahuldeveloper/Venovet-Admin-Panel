import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ProductsTable from "../components/CartManage/ProductTable";

export default function Products() {
  // const navigate  = useNavigate()
  // navigate(`/editProduct/item.id`)
  //add this on onclick

  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="bg-[#F9F9F9] w-full lg:ml-24">
        <Navbar />
        <ProductsTable />
        <Footer />
      </div>
    </div>
  );
}
