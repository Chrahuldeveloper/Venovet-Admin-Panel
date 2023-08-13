import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ComTable from "../components/ComManage/ComTable";

export default function Companies() {
  return (
    <div>
      <Navbar />
      <ComTable />
      <Footer />
    </div>
  );
}
