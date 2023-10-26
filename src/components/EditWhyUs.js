import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { db, storage } from "../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

export default function EditWhyUs() {
  const { whyusid } = useParams();

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    Category: whyusid,
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const docRef = doc(db, "WHATWEDO", category);
        const docRef = doc(db, "WHY-US", form.Category);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setForm(data);
        } else {
          console.log("Document does not exist");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [form.Category]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      // Upload the image to Firebase Storage
      const imageRef = ref(
        storage,
        `images/${form.Category}/${form.Image.name}`
      );
      await uploadBytesResumable(imageRef, form.Image);
      const url = await getDownloadURL(imageRef);
      const formData = {
        ...form,
        Image: url,
      };
      const docRef = doc(db, "WHY-US", form.Category);
      await updateDoc(docRef, formData);
      setIsSubmitting(false);
      navigate(`/why-us`);
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
        <div className="bg-white  py-4 m-8 rounded-3xl">
          <div className="border-b font-semibold text-xl px-8 py-2">
            <h1>Edit Why Us</h1>
          </div>
          <form className="p-8   space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-6 pr-5 md:grid-cols-3 md:gap-0 md:pr-0">
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
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="grid gap-6 pr-5 md:grid-cols-3 md:gap-0 md:pr-0">
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
                className="outline-none border w-64 md:w-80 lg:w-[30rem] font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </div>
            <div className="grid gap-6 pr-5 md:grid-cols-3 md:gap-0 md:pr-0">
              <label className="text-[#186ad2] text-lg">Image</label>
              <input
                type="file"
                onChange={handleImageChange}
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
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setIsSubmitting(true);
//   try {
//     // upload image
//     const imageRef = ref(storage, `whyus/${Image.name}`);
//     const uploadTask = uploadBytes(imageRef, Image);
//     uploadTask.snapshot.ref.on(
//       "state_changed",
//       null,
//       (error) => {
//         setIsSubmitting(false);
//         alert("Upload Image Again...!");
//         console.error(error);
//       },
//       async () => {
//         // get download url for upload file
//         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//         const formData = {
//           ...form,
//           Image: downloadURL,
//         };
//         const docRef = doc(db, "WHY-US", form.Category);
//         await updateDoc(docRef, formData);
//         setIsSubmitting(false);
//         navigate("/why-us");
//       }
//     );
//   } catch (error) {
//     setIsSubmitting(false);
//     console.log(error);
//   }
// };
