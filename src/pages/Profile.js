import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdminProfile from "../components/AdminProfile";
import Sidebar from "../components/Sidebar";

export default function Profile() {
  return (
    <body className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="w-screen bg-[#F9F9F9] lg:ml-24">
        <Navbar />
        <AdminProfile />
        <Footer />
      </div>
    </body>
  );
}
