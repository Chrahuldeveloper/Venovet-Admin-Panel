import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import {
  WareHouseMangement,
  ValueAddedServices,
  Transpotation,
  SCM,
  InventoryAudits,
  Logistics,
  InternetSupply,
  EPR,
  RealEstate,
} from "./Categories";

export default function WhatWeDoEditCategory() {
  const { category } = useParams();
  return (
    <body className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] w-full lg:ml-24">
        <Navbar />
        <div className="py-4 m-8 bg-white rounded-3xl">
          <div className="px-8 py-2 text-xl font-semibold border-b">
            <h1>Edit {category}</h1>
          </div>
          {/* diff  layout for diff category */}
          {/* <WareHouseMangement  category={category}/> */}
          {/* <ValueAddedServices category={category} /> */}
          {/* <Transpotation category={category} /> */}
          {/* <SCM category={category} /> */}
          {/* <InventoryAudits category={category} /> */}
          {/* <Logistics category={category} /> */}
          {/* <InternetSupply category={category} /> */}
          {/* <EPR category={category}/> */}
          {/* <RealEstate category={category}/> */}
        </div>
        <Footer />
      </div>
    </body>
  );
}
