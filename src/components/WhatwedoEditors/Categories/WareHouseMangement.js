import React, { useState } from "react";
import { db, storage } from "../../../Firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function UserDetailsField({ label, children }) {
  return (
    <div className="grid gap-6 pr-5 md:grid-cols-3 md:gap-0 md:pr-0">
      <label className="text-[#186ad2] text-lg">{label}</label>
      {children}
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
      Tittle: "DistributionWarehousing",
      image: "",
      Para: "",
    },
    SubCat2: {
      Tittle: "ConsolidationWarehousing",
      image: "",
      Para: "",
    },
    SubCat3: {
      Tittle: "InPlantWarehousing",
      image: "",
      Para: "",
    },
    SubCat4: {
      Tittle: "VALUEADDEDSERVICES",
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
      Tittle: "wlkewe",
      SubTittle: "pek",
      Para: "kwelkw",
      image: "",
    },
    Tittle5: "",
    Para5: "",
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
          <textarea
            type="text"
            value={layout.Para1}
            onChange={(e) =>
              setlayout({
                ...layout,
                Para1: e.target.value,
              })
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
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
        <UserDetailsField label="SubCat1image">
          <input
            type="file"
            // value={layout.SubCat1.image}
            onChange={(event) => handleImageChange(event, "1")}
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
          <textarea
            type="text"
            value={layout.SubCat1.Para}
            cols={8}
            rows={8}
            onChange={(e) =>
              handleFieldChange("SubCat1", "Para", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat2image">
          <input
            type="file"
            // value={layout.SubCat2.image}
            onChange={(event) => handleImageChange(event, "2")}
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
        <UserDetailsField label="SubCat3image">
          <input
            type="file"
            // value={layout.SubCat3.image}
            onChange={(event) => handleImageChange(event, "3")}
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

        <UserDetailsField label="SubCat4image">
          <input
            type="file"
            // value={layout.SubCat4.image}
            onChange={(event) => handleImageChange(event, "4")}
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
          <textarea
            type="text"
            value={layout.SubCat5.Para}
            cols={8}
            rows={8}
            onChange={(e) =>
              handleFieldChange("SubCat5", "Para", e.target.value)
            }
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
              handleFieldChange("SubCat9", "Tittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat9subTittle">
          <input
            type="text"
            value={layout.Subcat9.SubTittle}
            onChange={(e) =>
              handleFieldChange("SubCat9", "SubTittle", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat9Para">
          <textarea
            type="text"
            value={layout.Subcat9.Para}
            onChange={(e) =>
              handleFieldChange("SubCat9", "Para", e.target.value)
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
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
          <textarea
            type="text"
            value={layout.Para5}
            onChange={(e) =>
              setlayout({
                ...layout,
                Para5: e.target.value,
              })
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
// const handleSubmit = async (event) => {
//   event.preventDefault();
//   setIsSubmitting(true);

//   try {
//     const imageRef1 = ref(storage, `warehouse/${layout.SubCat1.image.name}`);
//     const uploadTask1 = uploadBytesResumable(
//       imageRef1,
//       layout.SubCat1.image.name
//     );

//     const imageRef2 = ref(storage, `warehouse/${layout.SubCat2.image.name}`);
//     const uploadTask2 = uploadBytesResumable(
//       imageRef2,
//       layout.SubCat2.image.name
//     );

//     const imageRef3 = ref(storage, `warehouse/${layout.SubCat3.image.name}`);
//     const uploadTask3 = uploadBytesResumable(
//       imageRef3,
//       layout.SubCat3.image.name
//     );

//     const imageRef4 = ref(storage, `warehouse/${layout.SubCat4.image.name}`);
//     const uploadTask4 = uploadBytesResumable(
//       imageRef4,
//       layout.SubCat4.image.name
//     );

//     const imageRef9 = ref(storage, `warehouse/${layout.Subcat9.image.name}`);
//     const uploadTask9 = uploadBytesResumable(
//       imageRef9,
//       layout.Subcat9.image.name
//     );

//     await Promise.all([
//       uploadTask1,
//       uploadTask2,
//       uploadTask3,
//       uploadTask4,
//       uploadTask9,
//     ]);

//     const downloadURL1 = await getDownloadURL(uploadTask1.snapshot.ref);
//     const downloadURL2 = await getDownloadURL(uploadTask2.snapshot.ref);
//     const downloadURL3 = await getDownloadURL(uploadTask3.snapshot.ref);
//     const downloadURL4 = await getDownloadURL(uploadTask4.snapshot.ref);
//     const downloadURL9 = await getDownloadURL(uploadTask9.snapshot.ref);
//     console.log(downloadURL1);
//     console.log(downloadURL2);
//     console.log(downloadURL3);
//     console.log(downloadURL4);
//     const updatedLayout = {
//       ...layout,
//       SubCat1: {
//         ...layout.SubCat1,
//         image: downloadURL1,
//       },
//       SubCat2: {
//         ...layout.SubCat2,
//         image: downloadURL2,
//       },
//       SubCat3: {
//         ...layout.SubCat3,
//         image: downloadURL3,
//       },
//       SubCat4: {
//         ...layout.SubCat4,
//         image: downloadURL4,
//       },
//       Subcat9: {
//         ...layout.Subcat9,
//         image: downloadURL9,
//       },
//     };
//     const docRef = doc(db, "WHATWEDO", category);
//     await updateDoc(docRef, updatedLayout);
//     // await setDoc(docRef, updatedLayout);
//     setIsSubmitting(false);
//     navigate("/whatwedo");
//   } catch (error) {
//     console.log(error);
//     setIsSubmitting(false);
//   }
// };

// const subCatCount = 4; // Adjust this if you have more sub-categories
// const uploadTasks = [];
// const downloadURLs = {};

// for (let i = 1; i <= subCatCount; i++) {
//   const subCatKey = `SubCat${i}`;
//   const image1 = layout[subCatKey].image;
//   console.log(image1);

//   if (image1) {
//     const imageRef = ref(storage, `warehouse/${image1.name}`);
//     const uploadTask = uploadBytesResumable(imageRef, image1);
//     uploadTasks.push(uploadTask);

//     downloadURLs[subCatKey] = await getDownloadURL(
//       uploadTask.snapshot.ref
//     );
//   }
// }

// await Promise.all(uploadTasks);

// const updatedLayout = {
//   ...layout,
//   ...Object.keys(downloadURLs).reduce((acc, key) => {
//     return {
//       ...acc,
//       [key]: {
//         ...layout[key],
//         image: downloadURLs[key],
//       },
//     };
//   }, {}),
// };
