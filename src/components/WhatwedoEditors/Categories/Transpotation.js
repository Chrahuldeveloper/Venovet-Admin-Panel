import React, { useState } from "react";
import { db, storage } from "../../../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";

function UserDetailsField({ label, children }) {
  return (
    <div className="grid grid-cols-3">
      <label className="text-[#186ad2] text-lg">{label}</label>
      {children}
    </div>
  );
}
export default function Transpotation({category}) {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();



  const [layout, setlayout] = useState({


      Tittle1: "",
      image1: "",
      Para1: "",

      Tittle2: "",
      image2: "",
      Para2: "",

      Tittle3: "",
      image3: "",
      Para3: "",

      Tittle4: "",
      image4: "",
      Para4: "",

      Tittle5: "",
      image5: "",
      Para5: "",

      Para6: "",
      Para7: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const uploadTasks = [];
      const updatedLayout = { ...layout };

      for (const subCatKey in updatedLayout) {
        if (updatedLayout[subCatKey].image) {
          const imageRef = ref(
            storage,
            `warehouse/${updatedLayout[subCatKey].image.name}`
          );
          const uploadTask = uploadBytesResumable(
            imageRef,
            updatedLayout[subCatKey].image.name
          );
          uploadTasks.push(uploadTask);

          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          updatedLayout[subCatKey].image = downloadURL;
        }
      }

      await Promise.all(uploadTasks);

      const docRef = doc(db, "WHATWEDO", category);
      await setDoc(docRef, updatedLayout);

      setIsSubmitting(false);
      navigate("/whatwedo");
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (event, subCatKey) => {
    const imageFile = event.target.files[0];
    setlayout((prevLayout) => ({
      ...prevLayout,
      [subCatKey]: {
        ...prevLayout.subCatKey,
        image: imageFile,
      },
    }));
  };

  const handleFieldChange = (section, field, value) => {
    // console.log("Field changed:", field, "New value:", value);
    setlayout((prevLayout) => ({
      ...prevLayout,
      [section]: {
        ...prevLayout[section],
        [field]: value,
      },
    }));
  };


  return (
    <>
       <form className="pl-10 space-y-4 pt-7" onSubmit={handleSubmit}>


       <UserDetailsField label="Tittle1">
          <input
            type="text"
            value={layout.Tittle1}
            onChange={(e) => {
              handleFieldChange("Tittle1", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="image1">
          <input
            type="file"
            value={layout.image1}
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


        
       <UserDetailsField label="Tittle2">
          <input
            type="text"
            value={layout.Tittle2}
            onChange={(e) => {
              handleFieldChange("Tittle2", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="image2">
          <input
            type="file"
            value={layout.image2}
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
              handleFieldChange("Para2", "Para", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>



        <UserDetailsField label="Tittle3">
          <input
            type="text"
            value={layout.Tittle3}
            onChange={(e) => {
              handleFieldChange("Tittle3", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="image3">
          <input
            type="file"
            value={layout.image3}
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


        <UserDetailsField label="Tittle4">
          <input
            type="text"
            value={layout.Tittle4}
            onChange={(e) => {
              handleFieldChange("Tittle4", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="image4">
          <input
            type="file"
            value={layout.image4}
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


        <UserDetailsField label="Tittle5">
          <input
            type="text"
            value={layout.Tittle5}
            onChange={(e) => {
              handleFieldChange("Tittle5", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="image5">
          <input
            type="file"
            value={layout.image5}
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
            value={layout.Para4}
            cols={8}
            rows={8}
            onChange={(e) => {
              handleFieldChange("Para4", e.target.value);
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>
        <UserDetailsField label="Para7">
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
  )
}
