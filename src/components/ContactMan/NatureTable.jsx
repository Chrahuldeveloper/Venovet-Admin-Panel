import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../Firebase";
import { RotatingLines } from "react-loader-spinner";

export default function NatureTable() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    setIsSubmitting(true);
    const querySnapshot = await getDocs(collection(db, "NATURE-OF-ENQUIRY"));
    const enquiryData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setData(enquiryData);
    setIsSubmitting(false);
  };

  const DeleteDoc = async (docId, e) => {
    setIsSubmitting(true);
    try {
      const docRef = doc(db, "NATURE-OF-ENQUIRY", docId);
      await deleteDoc(docRef);
      setIsSubmitting(false);
      navigate("/admin-panel/home");
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div>
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
      <div className="bg-[#F9F9F9] p-8">
        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-between md:px-6 pt-2">
            <h1 className="text-xl font-semibold">Nature of Enquiry</h1>
            <Link to={"/admin-panel/addnewnatureenq"}>
              <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
                Add Nature of Enquiry
              </button>
            </Link>
          </div>
          <div className="py-8 pt-14 w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="pl-10 py-2">S.No</th>
                    <th className="pl-10 py-2">Nature of Enquiry</th>
                    {/* <th className="pl-10 py-2">Edit</th> */}
                    <th className="pl-10 py-2">Delete</th>
                  </tr>
                </thead>
                {data.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <tbody className="border-b border-[#EEEEEE]">
                        <tr>
                          <td className="md:pl-14 py-8 ">{i + 1}</td>
                          <td className="md:pl-10 py-8 text-sm">
                            {item.Title}
                          </td>
                          {/* <td className="pl-10 py-8">Edit</td> */}
                          <td
                            onClick={() => {
                              DeleteDoc(item.Title);
                            }}
                            className="pl-10 py-8 cursor-pointer"
                          >
                            Delete
                          </td>
                        </tr>
                      </tbody>
                    </React.Fragment>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
