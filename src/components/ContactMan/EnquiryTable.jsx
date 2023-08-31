import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./../././../Firebase";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
export default function EnquiryTable() {
  const [data, setData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    setIsSubmitting(true);
    const querySnapshot = await getDocs(collection(db, "ENQUIRY"));
    const enquiryData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setData(enquiryData);
    setIsSubmitting(false);
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  
  const Deletedoc = async (docid) => {
    try {
      const docRef = doc(db, "ENQUIRY", docid);
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
      navigate("/home");
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
        <div className="p-6 bg-white rounded-xl">
          <div className="flex justify-between px-6 pt-2">
            <h1 className="text-xl font-semibold">Enquiries</h1>
          </div>
          <div className="w-full py-8 pt-14">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="py-2 pl-3">S.No</th>
                    <th className="py-2 pl-3">Enq ID</th>
                    <th className="py-2 pl-3">Customer Name</th>
                    <th className="py-2 pl-3">Email</th>
                    <th className="py-2 pl-3">Mobile</th>
                    <th className="py-2 pl-3">Subject</th>
                    <th className="py-2 pl-3">Message</th>
                    <th className="py-2 pl-3">Delete</th>
                  </tr>
                </thead>
                <tbody className="border-b border-[#EEEEEE] text-sm">
                  {data?.map((_, i) => {
                    <tr>
                      <td className="py-8 md:pl-10 ">{i + 1}</td>
                      <td className="py-8 text-sm md:pl-3">{i + 1}</td>
                      <td className="py-8 text-sm md:pl-3">{_.Name}</td>
                      <td className="py-8 pl-3">{_.Email}</td>
                      <td className="py-8 pl-3">{_.Phone}</td>
                      <td className="py-8 pl-3">{_.Nature}</td>
                      <td className="py-8 pl-3">{_.Message}</td>
                      <td
                        className="py-8 pl-3"
                        onClick={() => {
                          Deletedoc(_.id);
                        }}
                      >
                        Delete
                      </td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
