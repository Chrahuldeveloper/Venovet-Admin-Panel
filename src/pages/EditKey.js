import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EditKey() {
  const { keyid } = useParams();
  const cat = ["Fast Moving Consumer Goods (FMCG)"];

  return (
    <div className="bg-[#F9F9F9]">
      <Navbar />
      <div className="bg-white  py-4 m-8 rounded-3xl">
        <div className="border-b font-semibold text-xl px-8 py-2">
          <h1>Edit Key Benefits</h1>
        </div>
        <form className="p-8  space-x-6 space-y-4">
          <div className="space-x-44 text-lg">
            <label className="text-[#186ad2] text-lg">
              Category <span className="text-red-500 text-lg">*</span>
            </label>
            <select className="outline-none border w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full">
              {cat.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <option>{item}</option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>
          <div className="space-x-44 text-lg">
            <label className="text-[#186ad2] text-lg">
              Title <span className="text-red-500 text-lg">*</span>
            </label>
            <input
              placeholder="Which Plan Is Right For Me?"
              className="outline-none border w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className="text-[#186ad2] text-lg">Text</label>
            <textarea className="outline-none border w-[50rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-2xl" />
          </div>
          <div className="flex items-center justify-center pt-10">
            <button className="rounded-full text-white px-4 py-2 bg-[#0B2A97]">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
