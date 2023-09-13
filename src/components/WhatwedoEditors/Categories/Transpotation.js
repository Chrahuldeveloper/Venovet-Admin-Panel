import React, { useState } from "react";
import { db, storage } from "../../../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function UserDetailsField({ label, children }) {
  return (
    <div className="grid grid-cols-3">
      <label className="text-[#186ad2] text-lg">{label}</label>
      {children}
    </div>
  );
}
export default function Transpotation({ category }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const [layout, setlayout] = useState({
    image1: "",
    Para1: "",

    image2: "",
    Para2: "",

    image3: "",
    Para3: "",

    image4: "",
    Para4: "",

    image5: "",
    Para5: "",

    Para6: "",
    Para7: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const updatedLayout = { ...layout };

      for (const subCatKey in updatedLayout) {
        if (updatedLayout[subCatKey].image) {
          const imageFile = updatedLayout[subCatKey].image;

          // Create a reference to the image file in Firebase Storage
          const storageRef = ref(storage, `warehouse/transp/${imageFile.name}`);

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
      const docRef = doc(db, "WHATWEDO", category);
      await setDoc(docRef, updatedLayout);

      setIsSubmitting(false);
      navigate("/whatwedo");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (event, subCatKey) => {
    const imageFile = event.target.files[0];
    setlayout((prevLayout) => ({
      ...prevLayout,
      [subCatKey]: {
        ...prevLayout[subCatKey],
        image: imageFile,
      },
    }));
  };

  const handleFieldChange = (field, value) => {
    setlayout({
      ...layout,
      [field]: value,
    });
  };

  return (
    <>
      {isSubmitting && ( // Render loader only when isSubmitting is true
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-75">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="70"
            visible={true}
          />
        </div>
      )}
      <form className="pl-10 space-y-4 pt-7" onSubmit={handleSubmit}>
        {/* <UserDetailsField label="Tittle1">
          <input
            type="text"
            value={layout.Tittle1}
            onChange={(e) => {
              handleFieldChange("Tittle1", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField> */}
        <UserDetailsField label="image1">
          <input
            type="file"
            onChange={(e) => {
              handleImageChange(e, "image1");
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="Para1">
          <textarea
            type="text"
            value={layout.Para1}
            cols={8}
            rows={8}
            onChange={(e) => {
              handleFieldChange("Para1", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        {/* <UserDetailsField label="Tittle2">
          <input
            type="text"
            value={layout.Tittle2}
            onChange={(e) => {
              handleFieldChange("Tittle2", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField> */}
        <UserDetailsField label="image2">
          <input
            type="file"
            onChange={(e) => {
              handleImageChange(e, "image2");
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="Para2">
          <textarea
            type="text"
            value={layout.Para2}
            cols={8}
            rows={8}
            onChange={(e) => {
              handleFieldChange("Para2", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        {/* <UserDetailsField label="Tittle3">
          <input
            type="text"
            value={layout.Tittle3}
            onChange={(e) => {
              handleFieldChange("Tittle3", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          /> */}
        {/* </UserDetailsField> */}
        <UserDetailsField label="image3">
          <input
            type="file"
            onChange={(e) => {
              handleImageChange(e, "image3");
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="Para3">
          <textarea
            type="text"
            value={layout.Para3}
            cols={8}
            rows={8}
            onChange={(e) => {
              handleFieldChange("Para3", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>
        {/* 
        <UserDetailsField label="Tittle4">
          <input
            type="text"
            value={layout.Tittle4}
            onChange={(e) => {
              handleFieldChange("Tittle4", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          /> */}
        {/* </UserDetailsField> */}
        <UserDetailsField label="image4">
          <input
            type="file"
            onChange={(e) => {
              handleImageChange(e, "image4");
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="Para4">
          <textarea
            type="text"
            value={layout.Para4}
            cols={8}
            rows={8}
            onChange={(e) => {
              handleFieldChange("Para4", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        {/* <UserDetailsField label="Tittle5">
          <input
            type="text"
            value={layout.Tittle5}
            onChange={(e) => {
              handleFieldChange("Tittle5", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField> */}
        <UserDetailsField label="image5">
          <input
            type="file"
            onChange={(e) => {
              handleImageChange(e, "image5");
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="Para5">
          <textarea
            type="text"
            value={layout.Para5}
            cols={8}
            rows={8}
            onChange={(e) => {
              handleFieldChange("Para5", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        <UserDetailsField label="Para6">
          <textarea
            type="text"
            value={layout.Para6}
            cols={8}
            rows={8}
            onChange={(e) => {
              handleFieldChange("Para6", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>
        <UserDetailsField label="Para7">
          <textarea
            type="text"
            value={layout.Para7}
            cols={8}
            rows={8}
            onChange={(e) => {
              handleFieldChange("Para7", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        <div className="flex items-center justify-center pt-10">
          <button
            className="rounded-full text-white px-20 py-2 bg-[#0B2A97]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
