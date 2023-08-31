import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsTable from "../../components/ContactMan/NewsTable";

export default function NewsLetter() {
  return (
    <body className="flex">
        <Sidebar />
      <div className="bg-[#F9F9F9]  w-full h-full">
        <Navbar />
        <NewsTable />
        <Footer />
      </div>
    </body>
  );
}
