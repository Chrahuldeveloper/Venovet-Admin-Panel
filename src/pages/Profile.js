import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdminProfile from "../components/AdminProfile";
import Sidebar from "../components/Sidebar";

export default function Profile() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen bg-[#F9F9F9] h-full">
        <Navbar />
        <AdminProfile />
        <Footer />
      </div>
    </div>
  );
}
