import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { db, storage } from "../../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { RotatingLines } from "react-loader-spinner";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

function UserDetailsField({ label, required, children }) {
  return (
    <div className="grid gap-6 pr-5 md:grid-cols-3 md:gap-0 md:pr-0">
      <label className="text-[#186ad2] text-lg">
        {label} {required && <span className="text-red-500 text-lg">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function NewProduct() {
  const navigate = useNavigate();

  const [catData, setCatData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = collection(db, "CATEGORIES");
        const docSnap = await getDocs(docRef);

        // Update the state with the fetched category data
        setCatData(docSnap.docs.map((doc) => doc.data().Name));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const updatedLayout = { ...form };

      for (const subCatKey in updatedLayout) {
        if (updatedLayout[subCatKey].image) {
          const imageFile = updatedLayout[subCatKey].image;

          // Create a reference to the image file in Firebase Storage
          const storageRef = ref(
            storage,
            `warehouse/product/${imageFile.name}`
          );

          // Upload the image file to Firebase Storage
          await uploadBytesResumable(storageRef, imageFile);

          // Wait for the upload to complete and get the download URL
          const snapshot = await getDownloadURL(storageRef);
          const downloadURL = snapshot;

          // Update the layout object with the download URL
          updatedLayout[subCatKey].image = downloadURL;
        }
      }

      // Update the Firestore document with the updated layout
      const docRef = doc(db, "PRODUCTS", form.ProductName);
      await setDoc(docRef, updatedLayout);

      setIsSubmitting(false);
      navigate("/products");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (event, subCatKey) => {
    const imageFile = event.target.files[0];
    setForm((prevLayout) => ({
      ...prevLayout,
      [subCatKey]: {
        ...prevLayout[subCatKey],
        image: imageFile,
      },
    }));
  };

  const handleInputChange = (field, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
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
                {catData.map((cat, index) => {
                  return <option key={index}>{cat}</option>;
                })}
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
                onChange={(e) => {
                  handleImageChange(e, "Image1");
                }}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Product Image 2" required>
              <input
                type="file"
                onChange={(e) => {
                  handleImageChange(e, "Image2");
                }}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Product Image 3">
              <input
                type="file"
                onChange={(e) => {
                  handleImageChange(e, "Image3");
                }}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Product Image 4">
              <input
                type="file"
                onChange={(e) => {
                  handleImageChange(e, "Image4");
                }}
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
