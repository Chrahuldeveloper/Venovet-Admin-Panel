import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EnquiryTable from "../components/ContactMan/EnquiryTable";

export default function Enquiries() {
  return (
    <div>
      <Navbar />
      <EnquiryTable />
      <Footer />
    </div>
  );
}
