import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { db, storage } from "../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";

function UserDetailsField({ label, required, children }) {
  return (
    <div className="grid grid-cols-3">
      <label className="text-[#186ad2] text-lg">
        {label} {required && <span className="text-red-500 text-lg">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function EditProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    Category: "",
    ProductName: "",
    MRP: "",
    Dealprice: "",
    Description: "",
    Image1: "",
    Image2: "",
    Image3: "",
    Image4: "",
  });

  const handleImageChange1 = (event) => {
    const imageFile = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      Image1: imageFile,
    }));
  };

  const handleImageChange2 = (event) => {
    const imageFile = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      Image2: imageFile,
    }));
  };
  const handleImageChange3 = (event) => {
    const imageFile = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      Image3: imageFile,
    }));
  };
  const handleImageChange4 = (event) => {
    const imageFile = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      Image4: imageFile,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const imageRef1 = ref(storage, `products/${form.Image1.name}`);
      const uploadTask1 = uploadBytesResumable(imageRef1, form.Image1.name);

      const imageRef2 = ref(storage, `products/${form.Image2.name}`);
      const uploadTask2 = uploadBytesResumable(imageRef2, form.Image2.name);

      const imageRef3 = ref(storage, `products/${form.Image3.name}`);
      const uploadTask3 = uploadBytesResumable(imageRef3, form.Image3.name);

      const imageRef4 = ref(storage, `products/${form.Image4.name}`);
      const uploadTask4 = uploadBytesResumable(imageRef4, form.Image4.name);

      await Promise.all([uploadTask1, uploadTask2, uploadTask3, uploadTask4]);

      const downloadURL1 = await getDownloadURL(uploadTask1.snapshot.ref);
      const downloadURL2 = await getDownloadURL(uploadTask2.snapshot.ref);
      const downloadURL3 = await getDownloadURL(uploadTask3.snapshot.ref);
      const downloadURL4 = await getDownloadURL(uploadTask4.snapshot.ref);
      const formData = {
        ...form,
        Image1: downloadURL1,
        Image2: downloadURL2,
        Image3: downloadURL3,
        Image4: downloadURL4,
      };
      const docRef = doc(db, "PRODUCTS", form.ProductName);
      await updateDoc(docRef, formData);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (field, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  return (
    <div>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] lg:ml-24">
        <Navbar />

        <div className="bg-white py-4 m-8 rounded-3xl">
          <div className="border-b font-semibold text-xl px-8 py-2">
            <h1>Add Product</h1>
          </div>
          <form className="p-8 space-y-4" onSubmit={handleSubmit}>
            <UserDetailsField label="Category" required>
              <select
                value={form.Category}
                defaultValue={"Electronics"}
                onChange={(e) => handleInputChange("Category", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              >
                <option>Electronics</option>
                <option>Material Handling Equipments</option>
                <option>Test Category</option>
              </select>
            </UserDetailsField>

            <UserDetailsField label="Product Name" required>
              <input
                type="text"
                value={form.ProductName}
                onChange={(e) =>
                  handleInputChange("ProductName", e.target.value)
                }
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="MRP Price" required>
              <input
                type="text"
                value={form.MRP}
                onChange={(e) => handleInputChange("MRP", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Deal Price" required>
              <input
                value={form.Dealprice}
                onChange={(e) => handleInputChange("Dealprice", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Product Description" required>
              <textarea
                type="text"
                value={form.Description}
                onChange={(e) =>
                  handleInputChange("Description", e.target.value)
                }
                className="outline-none border font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-3xl"
              />
            </UserDetailsField>
            <UserDetailsField label="Product Image 1" required>
              <input
                type="file"
                onChange={handleImageChange1}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Product Image 2" required>
              <input
                type="file"
                onChange={handleImageChange2}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Product Image 3">
              <input
                type="file"
                onChange={handleImageChange3}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Product Image 4">
              <input
                type="file"
                onChange={handleImageChange4}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>

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
      </div>
      <Footer />
    </div>
  );
}
