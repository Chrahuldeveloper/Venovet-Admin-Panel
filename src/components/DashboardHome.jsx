import React from "react";
import DbCards from "./DbCards";
import Enquiries from "./Enquiries";
import Orders from "./Orders";

function DashboardHome() {
  return (
    <div className=" p-6 w-full md:p-12">
      <DbCards />
      <div className="lg:flex">
        <Enquiries />
        <Orders />
      </div>
    </div>
  );
}

export default DashboardHome;
