import React from "react";
import Navbar from "../components/Navbar";
import DashboardHome from "../components/DashboardHome";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="flex ">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] w-full lg:ml-20">
        <Navbar />
        <DashboardHome />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
