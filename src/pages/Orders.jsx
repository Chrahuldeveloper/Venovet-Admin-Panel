import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import OrdersTable from "../components/CartManage/OrdersTable";

export default function Orders() {
  return (
    <div>
      <body className="flex">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="bg-[#F9F9F9] w-full">
          <Navbar />
          <OrdersTable />
          <Footer />
        </div>
      </body>
    </div>
  );
}
