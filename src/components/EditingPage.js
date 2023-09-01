import React from "react";
import EditoneBlog from "./EditoneBlog";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function EditingPage() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-screen bg-[#F9F9F9] ">
          <Navbar />
          <EditoneBlog />
        </div>
      </div>
    </>
  );
}
