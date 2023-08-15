import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db, storage } from "../../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { convert } from "html-to-text";
import { useNavigate } from "react-router-dom";

export default function NewServe() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    Title: "",
    Overview: "",
    Stats: "",
    How: "",
    Image: "",
    Why: "",
  });

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
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

          const formDataPlainText = {
            ...formData,
            Overview: convert(formData.Overview),
            Stats: convert(formData.Stats),
            How: convert(formData.How),
            Why: convert(formData.Why),
          };

          await setDoc(doc(db, "WHO-WE-SERVE", form.Title), formDataPlainText);
          navigate("/whoweserve");
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#F9F9F9]">
      <Navbar />

      {/* text editors  */}

      <div className="bg-white  py-4 m-8 rounded-3xl">
        <div className="border-b px-8 py-2">
          <h1 className="font-semibold text-xl">Add Who We Serve</h1>
        </div>
        <form className="p-8  space-x-6 space-y-4" onSubmit={handleSubmit}>
          <div className="space-x-44  text-lg">
            <label className="text-[#186ad2]">
              Title <span className="text-red-500 text-lg">*</span>
            </label>
            <input
              className="outline-none border w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              type="text"
              value={form.Title}
              onChange={(e) => {
                setForm({
                  ...form,
                  Title: e.target.value,
                });
              }}
            />
          </div>
          <div className=" pt-5 space-y-4">
            <label className="text-[#186ad2] text-lg">Overview Text</label>
            <ReactQuill
              theme="snow"
              className=""
              value={form.Overview}
              onChange={(value) => handleQuillChange("Overview", value)}
            />
          </div>
          <div className="space-y-4">
            <label className="text-[#186ad2] text-lg">Stats Charts Text</label>
            <ReactQuill
              theme="snow"
              value={form.Stats}
              onChange={(value) => handleQuillChange("Stats", value)}
            />
          </div>
          <div className="space-y-4">
            <label className="text-[#186ad2] text-lg">How it works Text</label>
            <ReactQuill
              theme="snow"
              value={form.How}
              onChange={(value) => handleQuillChange("How", value)}
            />
          </div>
          <div className="space-y-4 space-x-60 ">
            <label className="text-[#186ad2] text-lg">Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="border border-[#eb5f0f] w-[30rem] rounded-full p-2 text-sm px-4 font-semibold"
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
  );
}
