import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { db } from "../Firebase";
import { doc, updateDoc } from "firebase/firestore";
import Sidebar from "../components/Sidebar";

export default function EditKey() {
  const { keyid } = useParams();
  const cat = ["Fast Moving Consumer Goods (FMCG)"];
  const [form, setForm] = useState({
    Category: "",
    Title: "",
    Text: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "KEY-BENEFITS", keyid);
      await updateDoc(docRef, form);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] w-full lg:ml-24">
        <Navbar />
        <div className="bg-white  py-4 m-8 rounded-3xl">
          <div className="border-b font-semibold text-xl px-8 py-2">
            <h1>Edit Key Benefits</h1>
          </div>
          <form className="p-8  space-x-6 space-y-4" onSubmit={handleSubmit}>
            <div className="md:space-x-44 space-y-5 md:space-y-0  text-lg">
              <label className="text-[#186ad2] text-lg">
                Category <span className="text-red-500 text-lg">*</span>
              </label>
              <select
                value={form.Category}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Category: e.target.value,
                  });
                }}
                className="outline-none border w-64 md:w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              >
                {cat.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option>{item}</option>
                    </React.Fragment>
                  );
                })}
              </select>
            </div>
            <div className="md:space-x-44 space-y-5 md:space-y-0  text-lg">
              <label className="text-[#186ad2] text-lg">
                Title <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                value={form.Title}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Title: e.target.value,
                  });
                }}
                placeholder="Which Plan Is Right For Me?"
                className="outline-none border w-64 md:w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-[#186ad2] text-lg">Text</label>
              <textarea
                value={form.Text}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Text: e.target.value,
                  });
                }}
                className="outline-none border w-64 md:w-96 lg:w-[50rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-2xl"
              />
            </div>
            <div className="flex items-center justify-center pt-10">
              <button
                className="rounded-full text-white px-4 py-2 bg-[#0B2A97]"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}
