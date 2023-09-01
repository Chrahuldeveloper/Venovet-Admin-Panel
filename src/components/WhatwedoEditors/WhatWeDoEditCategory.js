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
  Facility,
  IndustrialSerives,
} from "./Categories";

export default function WhatWeDoEditCategory() {
  const { category } = useParams();
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#F9F9F9] w-full ">
        <Navbar />
        <div className="py-4 m-8 bg-white rounded-3xl">
          <div className="px-8 py-2 text-xl font-semibold border-b">
            <h1>Edit {category}</h1>
          </div>
          {/* diff  layout for diff category */}
<<<<<<< HEAD
          {category === "Warehouse Management (2PL & 3PL)" ? (
            <WareHouseMangement category={category} />
          ) : category === "Transportation Fleet" ? (
            <Transpotation category={category} />
          ) : category === "Value Added Services" ? (
            <ValueAddedServices category={category} />
          ) : category === "SCM Automation" ? (
            <SCM category={category} />
          ) : category === "Inventory Audits & Analytics" ? (
            <InventoryAudits category={category} />
          ) : category === "Logistics Projects Designing" ? (
            <Logistics category={category} />
          ) : category === "Internet Supply Chain" ? (
            <InternetSupply category={category} />
          ) : category === "Ware ERP Solutions" ? (
            <EPR category={category} />
          ) : category === "Industrial Real States" ? (
            <RealEstate category={category} />
          ) : category === "Facility Management" ? (
            <Facility category={category} />
          ) : category === "Industrial Security Services" ? (
            <IndustrialSerives category={category} />
          ) : null}
=======
          {/* <WareHouseMangement category={category} /> */}
          {/* <ValueAddedServices category={category} /> */}
          {/* <Transpotation category={category} /> */}
          {/* <SCM category={category} /> */}
          {/* <InventoryAudits category={category} /> */}
          {/* <Logistics category={category} /> */}
          {/* <InternetSupply category={category} />
          <EPR category={category} />
          <RealEstate category={category} />
          <Facility category={category} />
          <IndustrialSerives category={category} /> */}
>>>>>>> 87cb0aaa134432b741762a54e473929988ea2c7c
        </div>
        <Footer />
      </div>
    </div>
  );
}
