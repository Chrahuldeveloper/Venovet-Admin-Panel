import React, { useState } from "react";
import { db, storage } from "../../../Firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
function UserDetailsField({ label, children }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-0 pr-5 md:pr-0">
      <label className="text-[#186ad2] text-lg">{label}</label>
      {children}
    </div>
  );
}
export default function IndustrialSerives({ category }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const [layout, setlayout] = useState({
    Tittle1: "",
    Para1: "",
    Tittle2: "",
    Para2: "",
    SubCat1: {
      Tittle: "",
      Para: "",
    },
    SubCat2: {
      Tittle: "",
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
    SubCat9: {
      Tittle: "",
      Para: "",
    },
    SubCat10: {
      Tittle: "",
      Para: "",
    },
    Tittle3: "",
    Para3: "",
    SubCat11: {
      Tittle: "",
      image: "",
      Para: "",
    },
    SubCat12: {
      Tittle: "",
      image: "",
      Para: "",
    },
    SubCat13: {
      Tittle: "",
      image: "",
      Para: "",
    },
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
        <UserDetailsField label="Tittle1">
          <input
            type="text"
            value={layout.Tittle1}
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
          <input
            type="text"
            value={layout.Para1}
            onChange={(e) =>
              setlayout({
                ...layout,
                Para1: e.target.value,
              })
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="Tittle2">
          <input
            type="text"
            value={layout.Tittle2}
            onChange={(e) =>
              setlayout({
                ...layout,
                Tittle2: e.target.value,
              })
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>

        <UserDetailsField label="Para2">
          <textarea
            type="text"
            value={layout.Para2}
            onChange={(e) =>
              setlayout({
                ...layout,
                Para2: e.target.value,
              })
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
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
        <UserDetailsField label="SubCat2Para">
          <textarea
            type="text"
            value={layout.SubCat2.Para}
            onChange={(e) =>
              handleFieldChange("SubCat2", "Para", e.target.value)
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
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
          <textarea
            type="text"
            value={layout.SubCat3.Para}
            onChange={(e) =>
              handleFieldChange("SubCat3", "Para", e.target.value)
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
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
          <textarea
            type="text"
            value={layout.SubCat4.Para}
            onChange={(e) =>
              handleFieldChange("SubCat4", "Para", e.target.value)
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
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
          <textarea
            type="text"
            value={layout.SubCat5.Para}
            onChange={(e) =>
              handleFieldChange("SubCat5", "Para", e.target.value)
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
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
          <textarea
            type="text"
            value={layout.SubCat6.Para}
            onChange={(e) =>
              handleFieldChange("SubCat6", "Para", e.target.value)
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
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
          <textarea
            type="text"
            value={layout.SubCat7.Para}
            onChange={(e) =>
              handleFieldChange("SubCat7", "Para", e.target.value)
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
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
          <textarea
            type="text"
            value={layout.SubCat8.Para}
            onChange={(e) =>
              handleFieldChange("SubCat8", "Para", e.target.value)
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat9Tittle">
          <input
            type="text"
            value={layout.SubCat9.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat9", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat9Para">
          <textarea
            type="text"
            value={layout.SubCat9.Para}
            onChange={(e) =>
              handleFieldChange("SubCat9", "Para", e.target.value)
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat10Tittle">
          <input
            type="text"
            value={layout.SubCat10.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat10", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat10Para">
          <textarea
            type="text"
            value={layout.SubCat10.Para}
            onChange={(e) =>
              handleFieldChange("SubCat10", "Para", e.target.value)
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        <UserDetailsField label="Tittle3">
          <input
            type="text"
            value={layout.Tittle3}
            onChange={(e) => {
              setlayout({
                ...layout,
                Tittle3: e.target.value,
              });
            }}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="Para3">
          <textarea
            type="text"
            value={layout.Para3}
            onChange={(e) => {
              setlayout({
                ...layout,
                Para3: e.target.value,
              });
            }}
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat11image">
          <input
            type="file"
            // value={layout.SubCat11.image}
            onChange={(e) => handleImageChange(e, "11")}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat11Tittle">
          <input
            type="text"
            value={layout.SubCat11.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat11", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat11Para">
          <textarea
            type="text"
            value={layout.SubCat11.Para}
            onChange={(e) =>
              handleFieldChange("SubCat11", "Para", e.target.value)
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat12image">
          <input
            type="file"
            // value={layout.SubCat12.image}
            onChange={(e) => handleImageChange(e, "12")}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat12Tittle">
          <input
            type="text"
            value={layout.SubCat12.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat12", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat12Para">
          <textarea
            type="text"
            value={layout.SubCat12.Para}
            onChange={(e) =>
              handleFieldChange("SubCat12", "Para", e.target.value)
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat13image">
          <input
            type="file"
            // value={layout.SubCat13.image}
            onChange={(e) => handleImageChange(e, "13")}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat11Tittle">
          <input
            type="text"
            value={layout.SubCat13.Tittle}
            onChange={(e) =>
              handleFieldChange("SubCat13", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat13Para">
          <textarea
            type="text"
            value={layout.SubCat13.Para}
            onChange={(e) =>
              handleFieldChange("SubCat13", "Para", e.target.value)
            }
            cols={8}
            rows={8}
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
