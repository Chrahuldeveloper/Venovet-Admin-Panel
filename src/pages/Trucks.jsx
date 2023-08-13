import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrucksTable from "../components/ComManage/TrucksTable";

export default function Trucks() {
  return (
    <div>
      <Navbar />
      <TrucksTable />
      <Footer />
    </div>
  );
}
