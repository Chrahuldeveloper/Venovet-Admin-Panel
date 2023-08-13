import React from "react";
import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/DashboardHome";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <DashboardHome />
      <Footer />
    </div>
  );
}

export default Home;
