import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { db, storage } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { RotatingLines } from "react-loader-spinner";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function Brochure() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    Pdf: "",
    Link: "",
  });

  const handleFileChange = (event) => {
    const imageFile = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      Pdf: imageFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      // Upload the image to Firebase Storage
      const imageRef = ref(storage, `images/${form.Pdf.name}`);
      await uploadBytesResumable(imageRef, form.Pdf);
      const url = await getDownloadURL(imageRef);

      const formData = {
        ...form,
        Pdf: url,
      };
      const docRef = doc(db, "BROCHURE", "LINKS");
      await setDoc(docRef, formData);
      setIsSubmitting(false);
      navigate(`/home`);
    } catch (error) {
      console.error("Error submitting data: ", error);
      setIsSubmitting(false);
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
            <h1>Add LINKS</h1>
          </div>
          <form className="p-8 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 text-lg">
              <label className="text-[#186ad2] text-lg">
                Video Link <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                value={form.Link}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Link: e.target.value,
                  });
                }}
                placeholder="Insert Your Video Link"
                className="outline-none border w-64 md:w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="grid grid-cols-3 text-lg">
              <label className="text-[#186ad2] text-lg">
                Brochure<span className="text-red-500 text-lg">*</span>
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="outline-none border w-64 md:w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="flex items-center justify-center pt-5">
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
