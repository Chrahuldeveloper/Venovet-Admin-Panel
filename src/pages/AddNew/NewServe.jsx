import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db, storage } from "../../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { RotatingLines } from "react-loader-spinner";

export default function NewServe() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    Title: "",
    Title1: "",
    Overview: "",
    Title2: "",
    Stats: "",
    Title3: "",
    How: "",
    ChartImage: "",
    Image: "",
    Title4: "",
    Why: "",
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

  const handleQuillChange = (field, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      Image: imageFile,
    }));
  };
  const handleImageChange1 = (event) => {
    const imageFile = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      ChartImage: imageFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      // Upload the image to Firebase Storage
      const imageRef = ref(storage, `images/${form.Title}/${form.Image.name}`);
      await uploadBytesResumable(imageRef, form.Image);
      const url = await getDownloadURL(imageRef);

      //upload chart image
      const chartImageRef = ref(
        storage,
        `images/${form.Title}/${form.ChartImage.name}`
      );
      await uploadBytesResumable(chartImageRef, form.ChartImage);
      const chartImageUrl = await getDownloadURL(chartImageRef);

      const formData = {
        ...form,
        Image: url,
        ChartImage: chartImageUrl,
      };
      const formDataPlainText = {
        ...formData,
        Overview: formData.Overview,
        Stats: formData.Stats,
        How: formData.How,
        Why: formData.Why,
      };

      await setDoc(doc(db, "WHO-WE-SERVE", form.Title), formDataPlainText);
      setIsSubmitting(false);

      navigate("/admin-panel/whoweserve");
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
      <div className="bg-[#F9F9F9] w-full">
        <Navbar />

        {/* text editors  */}

        <div className="bg-white  py-4 m-8 rounded-3xl">
          <div className="border-b px-8 py-2">
            <h1 className="font-semibold text-xl">Add Who We Serve</h1>
          </div>
          <form className="p-8  space-x-6 space-y-4" onSubmit={handleSubmit}>
            <div className="md:space-x-44 space-y-4 md:space-y-0 text-lg">
              <label className="text-[#186ad2]">
                Title <span className="text-red-500 text-lg">*</span>
              </label>
              {/* <input
                className="outline-none border w-64 md:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
                type="text"
                value={form.Title}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Title: e.target.value,
                  });
                }}
              /> */}
              <select
                defaultValue={cat[0]}
                value={form.Title}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Title: e.target.value,
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
            <div className=" pt-5 space-y-4 md:space-x-24">
              <label className="text-[#186ad2] text-lg">Title 1</label>

              <input
                type="text"
                value={form.Title1}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Title1: e.target.value,
                  });
                }}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="  space-y-4">
              <label className="text-[#186ad2] text-lg">Overview Text</label>
              <ReactQuill
                theme="snow"
                className=""
                value={form.Overview}
                onChange={(value) => handleQuillChange("Overview", value)}
              />
            </div>
            <div className=" pt-5 space-y-4 md:space-x-24">
              <label className="text-[#186ad2] text-lg">Title 2</label>

              <input
                type="text"
                value={form.Title2}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Title2: e.target.value,
                  });
                }}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[#186ad2] text-lg">
                Stats Charts Text
              </label>
              <ReactQuill
                theme="snow"
                value={form.Stats}
                onChange={(value) => handleQuillChange("Stats", value)}
              />
            </div>
            <div className=" pt-5 space-y-4 md:space-x-24">
              <label className="text-[#186ad2] text-lg">Title 3</label>

              <input
                type="text"
                value={form.Title3}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Title3: e.target.value,
                  });
                }}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[#186ad2] text-lg">
                How it works Text
              </label>
              <ReactQuill
                theme="snow"
                value={form.How}
                onChange={(value) => handleQuillChange("How", value)}
              />
            </div>
            <div className=" pt-5 space-y-4 md:space-x-24">
              <label className="text-[#186ad2] text-lg">Chart Image</label>
              <input
                type="file"
                onChange={handleImageChange1}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className=" pt-5 space-y-4 md:space-x-24 ">
              <label className="text-[#186ad2] text-lg">Image</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className=" pt-5 space-y-4 md:space-x-24">
              <label className="text-[#186ad2] text-lg">Title 4</label>

              <input
                type="text"
                value={form.Title4}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Title4: e.target.value,
                  });
                }}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[#186ad2] text-lg">Why Us</label>
              <ReactQuill
                theme="snow"
                value={form.Why}
                onChange={(value) => handleQuillChange("Why", value)}
              />
            </div>

            <div className="flex items-center justify-center pt-10">
              <button
                type="submit"
                className="rounded-full text-white px-4 py-2 bg-[#0B2A97]"
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
