import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import WhatwedoTable from "./WhatwedoTable";

export default function SelectCategory() {
  return (
    <>
      <body className="flex">
          <Sidebar />
        <div className="bg-[#F9F9F9] w-full ">
          <Navbar />
          <WhatwedoTable/>
          <Footer />
        </div>
      </body>
    </>
  );
}
