import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { db, storage } from "../../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { RotatingLines } from "react-loader-spinner";

export default function NewWhy() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    Category: "",
    Title: "",
    Image: "",
  });
  const cat = [
    "Select Category",
    "Fast Moving Consumer Goods (FMCG)",
    "Fast Moving Consumer Durables (FMCD)",
    "Fashion & Lifestyle",
    "Home & Furniture",
    "Auto-Mobility",
    "Telecom",
    "Fruits & vegetables",
    "Diary Farm",
    "Ecommerce Fulfillment",
    "Chemical",
    "Pharma",
    "Lens and Frames",
  ];

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      Image: imageFile,
    }));
  };

  console.log(form);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // upload image
      const imageRef = ref(storage, `images/${Image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, Image);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.error(error);
        },
        async () => {
          // download url for upload file
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const formData = {
            ...form,
            Image: downloadURL,
          };

          await setDoc(doc(db, "WHY-US", form.Category), formData);
          setIsSubmitting(false);

          navigate("/why-us");
        }
      );
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
      <div className="bg-[#F9F9F9] w-full lg:ml-24">
        <Navbar />
        <div className="bg-white  py-4 m-8 rounded-3xl">
          <div className="border-b font-semibold text-xl px-8 py-2">
            <h1>Add Why Us</h1>
          </div>
          <form className="p-8  space-x-6 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-6 md:space-y-0 md:space-x-44 text-lg">
              <label className="text-[#186ad2] text-lg">
                Category <span className="text-red-500 text-lg">*</span>
              </label>
              <select
                defaultValue={cat[0]}
                value={form.Category}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Category: e.target.value,
                  });
                }}
                className="outline-none  border w-64 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] text-[#7e7e7e] px-4 py-2 focus:border-[#186ad2] rounded-full"
              >
                {cat.map((item, index) => {
                  return (
                    <option className="" key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="space-y-6 md:space-y-0 md:space-x-44 text-lg">
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
                placeholder="Title"
                className="outline-none border w-64 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-[#186ad2] text-lg">Image</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="outline-none border w-64 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
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
