import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { db, storage } from "../Firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";

export default function EditWhyUs() {
  const { whyusid } = useParams();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    Category: "",
    Title: "",
    Image: "",
  });
  const cat = ["Fast Moving Consumer Goods (FMCG)", "FCMG"];

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
    try {
      // upload image
      const imageRef = ref(storage, `whyus/${Image.name}`);
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
          const docRef = doc(db, "WHY-US", whyusid);
          await updateDoc(docRef, formData);
          navigate("/why-us");
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#F9F9F9]">
      <Navbar />
      <div className="bg-white  py-4 m-8 rounded-3xl">
        <div className="border-b font-semibold text-xl px-8 py-2">
          <h1>Edit Why Us</h1>
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
              className="outline-none border w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
            >
              {cat.map((item, index) => {
                return (
                  <option key={index} value={item}>
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
              className="outline-none border w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className="text-[#186ad2] text-lg">Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="outline-none border w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
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
  );
}
