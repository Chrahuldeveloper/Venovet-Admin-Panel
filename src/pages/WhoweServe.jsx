import React from "react";
import Navbar from "../components/Navbar";
import ServeTable from "../components/ServeTable";
import Sidebar from "../components/Sidebar";

export default function WhoweServe() {
  return (
    <body className="flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="bg-[#F9F9F9] w-screen md:ml-72">
        <Navbar />
        <ServeTable />
      </div>
    </body>
  );
}
