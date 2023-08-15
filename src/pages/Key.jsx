import React from "react";
import Navbar from "../components/Navbar";
import KeyTable from "../components/KeyTable";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function Key() {
  return (
    <body className="flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] w-screen md:ml-72">
        <Navbar />
        <KeyTable />
        <Footer />
      </div>
    </body>
  );
}
