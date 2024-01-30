import React, { useEffect, useState } from "react";
import { db } from "../../../Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
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

export default function EPR({ category }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const [layout, setlayout] = useState({
    Tittle1: "",
    Para1: "",
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
    Tittle2: "",
    Para2: "",
    SubCat7: {
      Tittle: "",
      Para: "",
    },
    SubCat6: {
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
    SubCat11: {
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
      const docRef = doc(db, "WHATWEDO", category);
      await setDoc(docRef, layout);

      setIsSubmitting(false);
      navigate("/admin-panel/whatwedo");
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
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
            value={layout.Tittle1 || ""}
            onChange={(e) => handleFieldChange(null, "Tittle1", e.target.value)}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="Para1">
          <ReactQuill
            value={layout.Para1 || ""}
            onChange={(value) => handleFieldChange(null, "Para1", value)}
            theme="snow"
          />
        </UserDetailsField>

        <UserDetailsField label="Tittle2">
          <input
            type="text"
            value={layout.Tittle2 || ""}
            onChange={(e) => handleFieldChange(null, "Tittle2", e.target.value)}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="Para2">
          <ReactQuill
            value={layout.Para2 || ""}
            onChange={(value) => handleFieldChange(null, "Para2", value)}
            theme="snow"
          />
        </UserDetailsField>

        {/* Repeat for each SubCat */}
        {Array.from({ length: 11 }, (_, i) => i + 1).map((num) => {
          const subCat = `SubCat${num}`;
          return (
            <React.Fragment key={num}>
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
          );
        })}

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
