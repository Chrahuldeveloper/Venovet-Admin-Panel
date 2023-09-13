import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

export default function CareerTable() {
  const [data, setData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    setIsSubmitting(true);
    const querySnapshot = await getDocs(collection(db, "RESUMES"));
    const CarrierData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(CarrierData);
    setIsSubmitting(false);
  };
  const navigate = useNavigate();
  const DeleteDoc = async (docId) => {
    setIsSubmitting(true);
    try {
      const docRef = doc(db, "RESUMES", docId);
      await deleteDoc(docRef);
      navigate("/home");
      console.log("Document successfully deleted!");
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
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
            <h1 className="text-xl font-semibold">Careers</h1>
          </div>
          <div className="py-8 pt-14 w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="md:pl-3 py-2">S.No</th>
                    <th className="pl-3 py-2">ID</th>
                    <th className="pl-3 py-2">Name</th>
                    <th className="pl-3 py-2">Email</th>
                    <th className="pl-3 py-2">Mobile</th>
                    <th className="pl-3 py-2">Resume</th>
                    <th className="pl-3 py-2">Skills</th>
                    {/* <th className="pl-3 py-2">Date</th> */}
                    <th className="pl-3 py-2">Delete</th>
                  </tr>
                </thead>
                {data.map((_, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tbody className="border-b border-[#EEEEEE] text-sm">
                        <tr>
                          <td className="md:pl-10 py-8 ">{index + 1}</td>
                          <td className="pl-3 py-8 text-sm">VNC{index + 1}</td>
                          <td className="pl-3 py-8 text-sm">{_.Name}</td>
                          <td className="pl-3 py-8">{_.Email}</td>
                          <td className="pl-3 py-8">{_.Phone}</td>
                          <td className="pl-3 py-8 cursor-pointer transition duration-300 ease-in-out hover:text-[#7e7e7e]">
                            <Link to={`${_.FileUrl}`}>Resume</Link>
                          </td>
                          <td className="pl-3 py-8">{_.Skills}</td>
                          {/* <td className="pl-3 py-8">{_.Date}</td> */}
                          <td
                            className="pl-3 py-8 text-[#7e7e7e] cursor-pointer"
                            onClick={() => {
                              DeleteDoc(_.id);
                            }}
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
