import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { RotatingLines } from "react-loader-spinner";

export default function SocialMedia() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    Facebook: "",
    Instagram: "",
    Twitter: "",
    Linkedin: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await setDoc(doc(db, "SOCIAL-MEDIA-URL", "LINKS"), form);
      setIsSubmitting(false);
      navigate("/");
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
    }
  };

  return (
    <div className="flex">
      {isSubmitting && ( // Render loader only when isSubmitting is true
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-100">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="70"
            visible={true}
          />
        </div>
      )}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] w-full ">
        <Navbar />
        <div className="bg-white  py-4 m-8 rounded-3xl">
          <div className="border-b font-semibold text-xl px-8 py-2">
            <h1>Add URL's</h1>
          </div>
          <form className="p-8    space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-4 text-lg">
              <label className="text-[#186ad2] text-lg">
                Facebook <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                value={form.Facebook}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Facebook: e.target.value,
                  });
                }}
                placeholder="Facebook URL"
                className="outline-none border w-64 md:w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="grid grid-cols-4 text-lg">
              <label className="text-[#186ad2] text-lg">
                Twitter <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                value={form.Twitter}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Twitter: e.target.value,
                  });
                }}
                placeholder="Twitter URL"
                className="outline-none border w-64 md:w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="grid grid-cols-4 text-lg">
              <label className="text-[#186ad2] text-lg">
                Instagram <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                value={form.Instagram}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Instagram: e.target.value,
                  });
                }}
                placeholder="Instagram URL"
                className="outline-none border w-64 md:w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="grid grid-cols-4 text-lg">
              <label className="text-[#186ad2] text-lg">
                Linkedin <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                value={form.Linkedin}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Linkedin: e.target.value,
                  });
                }}
                placeholder="Linkedin URL"
                className="outline-none border w-64 md:w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
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
