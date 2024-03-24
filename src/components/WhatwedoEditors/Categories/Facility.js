import React, { useEffect, useState } from "react";
import { db, storage } from "../../../Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import ReactQuill from "react-quill";

function UserDetailsField({ label, children }) {
  return (
    <div className="grid gap-6 pr-5 md:grid-cols-3 md:gap-0 md:pr-0">
      <label className="text-[#186ad2] text-lg">{label}</label>
      <div> {children}</div>
    </div>
  );
}

export default function Facility({ category }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const [layout, setlayout] = useState({
    Tittle1: "",
    Para1: "",
    SubCat1: {
      image: "",
      Tittle: "",
      Para1: "",
      Para2: "",
      Para3: "",
      Para4: "",
    },
    SubCat2: {
      image: "",
      Tittle: "",
      Para1: "",
      Para2: "",
    },
    SubCat3: {
      image: "",
      Tittle: "",
      Para: "",
    },
    SubCat4: {
      image: "",
      Tittle: "",
      Para: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "WHATWEDO", category);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setlayout(data);
        } else {
          console.log("Document does not exist");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const updatedLayout = { ...layout };

      for (const subCatKey in updatedLayout) {
        if (updatedLayout[subCatKey].image) {
          const imageFile = updatedLayout[subCatKey].image;

          const storageRef = ref(storage, `warehouse/${imageFile.name}`);
          await uploadBytesResumable(storageRef, imageFile);
          const snapshot = await getDownloadURL(storageRef);
          const downloadURL = snapshot;

          updatedLayout[subCatKey].image = downloadURL;
        }
      }

      const docRef = doc(db, "WHATWEDO", category);
      await setDoc(docRef, updatedLayout);

      setIsSubmitting(false);
      navigate("/admin-panel/whatwedo");
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

  const handleFieldChange = (section, field, value) => {
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
      {isSubmitting && (
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
        <UserDetailsField label="Tittle1">
          <input
            type="text"
            value={layout.Tittle1}
            onChange={(e) => {
              setlayout((prevLayout) => ({
                ...prevLayout,
                Tittle1: e.target.value,
              }));
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="Para1">
          <ReactQuill
            value={layout.Para1}
            onChange={(value) => setlayout({ ...layout, Para1: value })}
            theme="snow"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat1image">
          <input
            type="file"
            onChange={(event) => handleImageChange(event, "SubCat1")}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat1Tittle">
          <input
            type="text"
            value={layout.SubCat1.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat1", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat1Para1">
          <ReactQuill
            value={layout.SubCat1.Para1}
            onChange={(value) => handleFieldChange("SubCat1", "Para1", value)}
            theme="snow"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat1Para2">
          <ReactQuill
            value={layout.SubCat1.Para1}
            onChange={(value) => handleFieldChange("SubCat1", "Para2", value)}
            theme="snow"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat1Para3">
          <ReactQuill
            value={layout.SubCat1?.Para1}
            onChange={(value) => handleFieldChange("SubCat1", "Para3", value)}
            theme="snow"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat1Para4">
          <ReactQuill
            value={layout.SubCat1.Para1}
            onChange={(value) => handleFieldChange("SubCat1", "Para4", value)}
            theme="snow"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat2image">
          <input
            type="file"
            onChange={(event) => handleImageChange(event, "SubCat2")}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat2Tittle">
          <input
            type="text"
            value={layout.SubCat2.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat2", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat1Para4">
          <ReactQuill
            value={layout.SubCat2.Para1}
            onChange={(value) => handleFieldChange("SubCat2", "Para1", value)}
            theme="snow"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat1Para4">
          <ReactQuill
            value={layout.SubCat2.Para2}
            onChange={(value) => handleFieldChange("SubCat2", "Para2", value)}
            theme="snow"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat3image">
          <input
            type="file"
            onChange={(event) => handleImageChange(event, "SubCat3")}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat3Tittle">
          <input
            type="text"
            value={layout.SubCat3.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat3", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat3Para">
          <ReactQuill
            value={layout.SubCat3?.Para}
            onChange={(value) => handleFieldChange("SubCat3", "Para", value)}
            theme="snow"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat4image">
          <input
            type="file"
            onChange={(event) => handleImageChange(event, "SubCat4")}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat4Tittle">
          <input
            type="text"
            value={layout.SubCat4.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat4", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat4Para">
          <ReactQuill
            value={layout.SubCat4.Para}
            onChange={(value) => handleFieldChange("SubCat4", "Para", value)}
            theme="snow"
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

