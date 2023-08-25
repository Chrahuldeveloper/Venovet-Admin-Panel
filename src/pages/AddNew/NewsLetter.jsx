import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsTable from "../../components/ContactMan/NewsTable";

export default function NewsLetter() {
  return (
    <body className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9]  w-full  lg:ml-24">
        <Navbar />
        <NewsTable />
        <Footer />
      </div>
    </body>
  );
}
