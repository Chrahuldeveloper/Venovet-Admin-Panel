import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import WhatwedoTable from "../components/WhatwedoEditors/WhatwedoTable";

export default function WhoweServe() {
  return (
    <body className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] w-full lg:ml-24">
        <Navbar />
        <WhatwedoTable />
        <Footer />
      </div>
    </body>
  );
}
