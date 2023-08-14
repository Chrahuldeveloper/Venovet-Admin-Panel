import React from "react";
import WhyTable from "../components/WhyTable";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function WhyUs() {
  return (
    <body className="flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="w-screen bg-[#F9F9F9] md:ml-72">
        <Navbar />
        <WhyTable />
        <Footer />
      </div>
    </body>
  );
}
