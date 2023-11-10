import React, { useEffect, useState } from "react";
import { db, storage } from "../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function UserDetailsField({ label, children }) {
  return (
    <div className="grid gap-6 pr-5 md:grid-cols-3 md:gap-0 md:pr-0">
      <label className="text-[#186ad2] text-lg">{label}</label>
      {children}
    </div>
  );
}

export default function EditoneBlog() {
  const { id } = useParams();
  const [layout, setlayout] = useState({
    Blogimage: "",
    Tittle1: "",
    Para1: "",
    Tittle2: "",
    Para2: "",
    SubCat1: {
      ListTittle1: "",
      ListPara1: "",
      ListTittle2: "",
      ListPara2: "",
      ListTittle3: "",
      ListPara3: "",
      ListTittle4: "",
      ListPara4: "",
    },
    Tittle3: "",
    Para3: "",
    SubCat2: {
      ListTittle1: "",
      ListPara1: "",
      ListTittle2: "",
      ListPara2: "",
      ListTittle3: "",
      ListPara3: "",
      ListTittle4: "",
      ListPara4: "",
    },
    Tittle4: "",
    SubCat3: {
      List1: "",
      List2: "",
      List3: "",
      List4: "",
      List5: "",
    },
    Tittle5: "",
    Para4: "",
    SubCat4: {
      List1: "",
      List2: "",
      List3: "",
      List4: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setlayout((prevForm) => ({
      ...prevForm,
      Blogimage: imageFile,
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const docRef = doc(db, "WHATWEDO", category);
        const docRef = doc(db, "BLOGS", id);

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
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const imageRef = ref(storage, `Blog/${layout.Blogimage.name}`);
      await uploadBytesResumable(imageRef, layout.Blogimage);
      const url = await getDownloadURL(imageRef);
      const updatedLayout = {
        ...layout,
        Blogimage: url,
      };
      const docRef = doc(db, "BLOGS", id);
      // await setDoc(docRef, updatedLayout);
      await updateDoc(docRef, updatedLayout);

      setIsSubmitting(false);
      navigate("/EditBlog");
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
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
        <UserDetailsField label="Blogimage">
          <input
            type="file"
            onChange={handleImageChange}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
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

        <UserDetailsField label="SubCat1ListPara1">
          <input
            type="text"
            value={layout.SubCat1.ListPara1}
            onChange={(e) =>
              handleFieldChange("SubCat1", "ListPara1", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat1ListPara2">
          <input
            type="text"
            value={layout.SubCat1.ListPara2}
            onChange={(e) =>
              handleFieldChange("SubCat1", "ListPara2", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat1ListPara3">
          <input
            type="text"
            value={layout.SubCat1.ListPara3}
            onChange={(e) =>
              handleFieldChange("SubCat1", "ListPara3", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat1ListPara4">
          <input
            type="text"
            value={layout.SubCat1.ListPara4}
            onChange={(e) =>
              handleFieldChange("SubCat1", "ListPara4", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
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

        <UserDetailsField label="Para3">
          <textarea
            type="text"
            value={layout.Para3}
            onChange={(e) =>
              setlayout({
                ...layout,
                Para3: e.target.value,
              })
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat2ListPara1">
          <input
            type="text"
            value={layout.SubCat2.ListPara1}
            onChange={(e) =>
              handleFieldChange("SubCat2", "ListPara1", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat2ListPara2">
          <input
            type="text"
            value={layout.SubCat2.ListPara2}
            onChange={(e) =>
              handleFieldChange("SubCat2", "ListPara2", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat2ListPara3">
          <input
            type="text"
            value={layout.SubCat2.ListPara3}
            onChange={(e) =>
              handleFieldChange("SubCat2", "ListPara3", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat2ListPara4">
          <input
            type="text"
            value={layout.SubCat2.ListPara4}
            onChange={(e) =>
              handleFieldChange("SubCat2", "ListPara4", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
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

        <UserDetailsField label="SubCat3List1">
          <input
            type="text"
            value={layout.SubCat3.List1}
            onChange={(e) =>
              handleFieldChange("SubCat3", "List1", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat3List2">
          <input
            type="text"
            value={layout.SubCat3.List2}
            onChange={(e) =>
              handleFieldChange("SubCat3", "List2", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat3List3">
          <input
            type="text"
            value={layout.SubCat3.List3}
            onChange={(e) =>
              handleFieldChange("SubCat3", "List3", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat3List4">
          <input
            type="text"
            value={layout.SubCat3.List4}
            onChange={(e) =>
              handleFieldChange("SubCat3", "List4", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
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

        <UserDetailsField label="Para4">
          <textarea
            type="text"
            value={layout.Para4}
            onChange={(e) =>
              setlayout({
                ...layout,
                Para4: e.target.value,
              })
            }
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>

        <UserDetailsField label="SubCat4List1">
          <input
            type="text"
            value={layout.SubCat4.List1}
            onChange={(e) =>
              handleFieldChange("SubCat4", "List1", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat3List2">
          <input
            type="text"
            value={layout.SubCat4.List2}
            onChange={(e) =>
              handleFieldChange("SubCat4", "List2", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat3List3">
          <input
            type="text"
            value={layout.SubCat4.List3}
            onChange={(e) =>
              handleFieldChange("SubCat4", "List3", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat3List4">
          <input
            type="text"
            value={layout.SubCat4.List4}
            onChange={(e) =>
              handleFieldChange("SubCat4", "List4", e.target.value)
            }
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
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
