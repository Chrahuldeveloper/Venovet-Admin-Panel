import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase";

export default function NewsTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    setIsSubmitting(true);
    const querySnapshot = await getDocs(collection(db, "NEWS-LETTER"));
    const enquiryData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setData(enquiryData);
    setIsSubmitting(false);
  };

  const DeleteDoc = async (docId) => {
    try {
      const docRef = doc(db, "NEWS-LETTER", docId);
      await deleteDoc(docRef);
      navigate("/admin-panel/home");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div>
      {isSubmitting && (
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
          <div className="flex justify-between px-6 pt-2">
            <h1 className="text-xl font-semibold">News Letters</h1>
          </div>
          <div className="py-8 pt-14 w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="md:pl-3 py-2">S.No</th>
                    <th className="pl-3 py-2">Email</th>
                    {/* <th className="pl-3 py-2">Date</th> */}
                    <th className="pl-3 py-2">Delete</th>
                  </tr>
                </thead>
                {data?.map((_, i) => {
                  return (
                    <tbody className="border-b border-[#EEEEEE] text-sm">
                      <tr>
                        <>
                          <td className="md:pl-10 py-8 ">{i + 1}</td>
                          <td className="pl-3 py-8">{_.mail}</td>
                          {/* <td className="pl-3 py-8">{_.date}</td> */}
                          <td
                            className="pl-3 py-8 text-[#7e7e7e] cursor-pointer"
                            onClick={() => {
                              DeleteDoc(_.id);
                            }}
                          >
                            Delete
                          </td>
                        </>
                      </tr>
                    </tbody>
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
