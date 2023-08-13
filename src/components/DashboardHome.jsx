import React from "react";
import DbCards from "./DbCards";
import Enquiries from "./Enquiries";
import Orders from "./Orders";

function DashboardHome() {
  return (
    <div className="bg-[#F9F9F9] p-6 md:p-12">
      <DbCards />
      <div className="lg:flex">
        <Enquiries />
        <Orders />
      </div>
    </div>
  );
}

export default DashboardHome;
