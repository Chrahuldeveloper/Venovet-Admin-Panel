import React, { useEffect, useState } from "react";
import { db, storage } from "../../../Firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import ReactQuill from "react-quill";
function UserDetailsField({ label, children }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-0 pr-5 md:pr-0">
      <label className="text-[#186ad2] text-lg">{label}</label>
      <div>{children}</div>
    </div>
  );
}

export default function SCM({ category }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [layout, setlayout] = useState({
    // Para: "",
    SubCat1: {
      Tittle: "",
      image: "",
      Para: "",
    },
    SubCat2: {
      Tittle: "",
      image: "",
      Para: "",
    },
    SubCat3: {
      Tittle: "",
      Para: "",
    },
    SubCat4: {
      Tittle: "",
      Para: "",
    },
    SubCat5: {
      Tittle: "",
      Para: "",
    },
    Tittle2: "",
    Para2: "",
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

          // Create a reference to the image file in Firebase Storage
          const storageRef = ref(storage, `warehouse/${imageFile.name}`);

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
      <form className="pl-10 space-y-4 pt-7" onSubmit={handleSubmit}>
        {["SubCat1", "SubCat2", "SubCat3", "SubCat4", "SubCat5"].map(
          (subCat, index) => (
            <React.Fragment key={index}>
              {index === 1 && (
                <UserDetailsField label={`${subCat} Image`}>
                  <input
                    type="file"
                    onChange={(e) => handleImageChange(e, subCat)}
                    className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
                  />
                </UserDetailsField>
              )}
              {index === 2 && (
                <UserDetailsField label={`${subCat} Image`}>
                  <input
                    type="file"
                    onChange={(e) => handleImageChange(e, subCat)}
                    className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
                  />
                </UserDetailsField>
              )}

              <UserDetailsField label={`${subCat} Title`}>
                <input
                  type="text"
                  value={layout[subCat]?.Tittle || ""}
                  onChange={(e) =>
                    handleFieldChange(subCat, "Tittle", e.target.value)
                  }
                  className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
                />
              </UserDetailsField>
              <UserDetailsField label={`${subCat} Paragraph`}>
                <ReactQuill
                  value={layout[subCat]?.Para || ""}
                  onChange={(value) => handleFieldChange(subCat, "Para", value)}
                  theme="snow"
                />
              </UserDetailsField>
            </React.Fragment>
          )
        )}
        <UserDetailsField label="Title2">
          <input
            type="text"
            value={layout.Tittle2}
            onChange={(e) => setlayout({ ...layout, Tittle2: e.target.value })}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="Paragraph2">
          <ReactQuill
            value={layout.Para2}
            onChange={(value) => setlayout({ ...layout, Para2: value })}
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
