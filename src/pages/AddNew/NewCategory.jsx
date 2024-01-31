import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { db, storage } from "../../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { RotatingLines } from "react-loader-spinner";

export default function NewCategory() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    Name: "",
    Image: null,
  });

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      Image: imageFile,
    }));
  };

  const handleSubmit = async (e, i) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      // Upload the image to Firebase Storage
      const imageRef = ref(storage, `images/${form.Name}/${form.Image.name}`);
      await uploadBytesResumable(imageRef, form.Image);
      const url = await getDownloadURL(imageRef);
      const formData = {
        ...form,
        Image: url,
      };
      const docRef = doc(db, "CATEGORIES", form.Name);
      await setDoc(docRef, formData);
      setIsSubmitting(false);
      navigate(`/admin-panel/categories`);
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
      <div className="bg-[#F9F9F9] w-full  lg:ml-24">
        <Navbar />
        <div className="bg-white  py-4 m-8 rounded-3xl">
          <div className="border-b font-semibold text-xl px-8 py-2">
            <h1>Add Category</h1>
          </div>
          <form className="p-8  pl-14 space-y-4" onSubmit={handleSubmit}>
            <div className="text-lg grid gap-6 pr-5 md:grid-cols-3 md:gap-0 md:pr-0">
              <label className="text-[#186ad2] text-lg">
                Category Name <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                value={form.Name}
                onChange={(e) => {
                  setForm({
                    ...form,
                    Name: e.target.value,
                  });
                }}
                placeholder="Which Plan Is Right For Me?"
                className="outline-none border w-64 md:w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="grid gap-6 pr-5 md:grid-cols-3 md:gap-0 md:pr-0 text-lg">
              <label className="text-[#186ad2] text-lg">
                Category Image <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                placeholder="Which Plan Is Right For Me?"
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
