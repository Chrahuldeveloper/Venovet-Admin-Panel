import React, { useEffect, useState } from "react";
import { db, storage } from "../../../Firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import ReactQuill from "react-quill";

function UserDetailsField({ label, children }) {
  return (
    <div className="grid gap-6 pr-5 md:grid-cols-3 md:gap-0 md:pr-0">
      <label className="text-[#186ad2] text-lg">{label}</label>
      <div>{children}</div>
    </div>
  );
}

export default function WareHouseMangement({ category }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [layout, setlayout] = useState({
    Tittle1: "",
    Para1: "",
    Para2: "",
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
      image: "",
      Para: "",
    },
    SubCat4: {
      Tittle: "",
      image: "",
      Para: "",
    },
    Tittle3: "",
    SubCat5: {
      Tittle: "",
      Para: "",
    },
    SubCat6: {
      Tittle: "",
      Para: "",
    },
    SubCat7: {
      Tittle: "",
      Para: "",
    },
    SubCat8: {
      Tittle: "",
      Para: "",
    },
    Tittle4: "",
    Subcat9: {
      Tittle: "",
      SubTittle: "",
      Para: "",
      image: "",
    },
    Tittle5: "",
    Para5: "",
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
          const storageRef = ref(
            storage,
            `warehouse/management/${imageFile.name}`
          );
          await uploadBytesResumable(storageRef, imageFile);
          const snapshot = await getDownloadURL(storageRef);
          const downloadURL = snapshot;
          updatedLayout[subCatKey].image = downloadURL;
        }
      }

      const docRef = doc(db, "WHATWEDO", category);
      await updateDoc(docRef, updatedLayout);
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

  const handleImageChangeSubCat9 = (event) => {
    const imageFile = event.target.files[0];
    setlayout((prevLayout) => ({
      ...prevLayout,
      Subcat9: {
        ...prevLayout.Subcat9,
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
    console.log(layout);
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
        <UserDetailsField label="Tittle1">
          <input
            type="text"
            value={""}
            onChange={(e) =>
              setlayout({
                ...layout,
                Tittle1: e.target.value,
              })
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="Para1">
          <ReactQuill
            theme="snow"
            value={layout.Para1}
            onChange={(value) =>
              setlayout({
                ...layout,
                Para1: value,
              })
            }
          />
        </UserDetailsField>
        <UserDetailsField label="Para2">
          <ReactQuill
            theme="snow"
            value={layout.Para2}
            onChange={(value) =>
              setlayout({
                ...layout,
                Para2: value,
              })
            }
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat1image">
          <input
            type="file"
            // value={layout.SubCat1.image}
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
        <UserDetailsField label="SubCat1Para">
          <ReactQuill
            theme="snow"
            value={layout.SubCat1.Para}
            onChange={(value) => handleFieldChange("SubCat1", "Para", value)}
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
        <UserDetailsField label="SubCat2Para">
          <ReactQuill
            theme="snow"
            value={layout.SubCat2.Para}
            onChange={(value) => handleFieldChange("SubCat2", "Para", value)}
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat3image">
          <input
            type="file"
            // value={layout.SubCat3.image}
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
            theme="snow"
            value={layout.SubCat3.Para}
            onChange={(value) => handleFieldChange("SubCat3", "Para", value)}
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat4image">
          <input
            type="file"
            // value={layout.SubCat4.image}
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
            theme="snow"
            value={layout.SubCat4.Para}
            onChange={(value) => handleFieldChange("SubCat4", "Para", value)}
          />
        </UserDetailsField>

        <UserDetailsField label="Tittle3">
          <input
            type="text"
            value={layout.Tittle3}
            onChange={(e) =>
              setlayout({
                ...layout,
                Tittle3: e.target.value,
              })
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat5Tittle">
          <input
            type="text"
            value={layout.SubCat5.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat5", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat5Para">
          <ReactQuill
            theme="snow"
            value={layout.SubCat5.Para}
            onChange={(value) => handleFieldChange("SubCat5", "Para", value)}
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat6Tittle">
          <input
            type="text"
            value={layout.SubCat6.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat6", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat6Para">
          <ReactQuill
            theme="snow"
            value={layout.SubCat6.Para}
            onChange={(value) => handleFieldChange("SubCat6", "Para", value)}
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat7Tittle">
          <input
            type="text"
            value={layout.SubCat7.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat7", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat7Para">
          <ReactQuill
            theme="snow"
            value={layout.SubCat7.Para}
            onChange={(value) => handleFieldChange("SubCat7", "Para", value)}
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat8Tittle">
          <input
            type="text"
            value={layout.SubCat8.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat8", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat8Para">
          <ReactQuill
            theme="snow"
            value={layout.SubCat8.Para}
            onChange={(value) => handleFieldChange("SubCat8", "Para", value)}
          />
        </UserDetailsField>

        <UserDetailsField label="Tittle4">
          <input
            type="text"
            value={layout.Tittle4}
            onChange={(e) =>
              setlayout({
                ...layout,
                Tittle4: e.target.value,
              })
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat9image">
          <input
            type="file"
            onChange={handleImageChangeSubCat9}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat9Tittle">
          <input
            type="text"
            value={layout.Subcat9.Tittle}
            onChange={(e) =>
              handleFieldChange("Subcat9", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat9subTittle">
          <input
            type="text"
            value={layout.Subcat9.SubTittle}
            onChange={(e) =>
              handleFieldChange("Subcat9", "SubTittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat9Para">
          <ReactQuill
            theme="snow"
            value={layout.Subcat9.Para}
            onChange={(value) => handleFieldChange("Subcat9", "Para", value)}
          />
        </UserDetailsField>

        <UserDetailsField label="Tittle5">
          <input
            type="text"
            value={layout.Tittle5}
            onChange={(e) =>
              setlayout({
                ...layout,
                Tittle5: e.target.value,
              })
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="Para5">
          <ReactQuill
            theme="snow"
            value={layout.Para5}
            onChange={(value) =>
              setlayout({
                ...layout,
                Para5: value,
              })
            }
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
