import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BlogsTable from "../components/BlogsTable";

export default function EditBlog() {
  return (
    <>
      <body className="flex">
        <Sidebar />
        <div className="bg-[#F9F9F9] w-full ">
          <Navbar />
          <BlogsTable />
        </div>
      </body>
    </>
  );
}
