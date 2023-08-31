import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { db } from "../Firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
export default function WhyTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    setIsSubmitting(true);
    const querySnapshot = await getDocs(collection(db, "WHY-US"));
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
      const docRef = doc(db, "WHY-US", docId);
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
      navigate("/home");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div className="bg-[#F9F9F9] p-8">
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
      <div className="p-6 bg-white rounded-xl">
        <div className="flex flex-col justify-between px-6 pt-2 space-y-5 md:flex-row md:space-y-0">
          <h1 className="text-xl font-semibold">Why Us</h1>
          <Link to={"/addnewwhy"}>
            <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
              Add New Why Us
            </button>
          </Link>
        </div>
        <div className="w-full py-8 pt-14">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-y border-[#EEEEEE]">
                <tr>
                  <th className="py-2 md:pl-10">S.No</th>
                  <th className="py-2 pl-5 md:pl-10">Service Title</th>
                  <th className="py-2 pl-5 md:pl-10">Title</th>
                  <th className="py-2 pl-10">Image</th>
                  <th className="py-2 pl-10">Edit</th>
                  <th className="py-2 pl-10">Delete</th>
                </tr>
              </thead>
              {data.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    <tbody className="border-b border-[#EEEEEE]">
                      <tr>
                        <td className="py-8 pl-5 md:pl-14 ">{i + 1}</td>
                        <td className="py-8 pl-5 text-sm md:pl-10">
                          {item.Category}
                        </td>
                        <td className="py-8 pl-5 text-sm md:pl-10">
                          {item.Title}
                        </td>
                        <td className="py-8 pl-10">
                          <img src={item.Image} alt="img.png" />
                        </td>
                        <td
                          className="py-8 pl-10 cursor-pointer text-[#7e7e7e]"
                          onClick={() => {
                            navigate(`/whyusedit/${i + 1}`); //put id instead of 1 while fetching
                          }}
                        >
                          Edit
                        </td>
                        <td
                          className="py-8 pl-10 cursor-pointer text-[#7e7e7e]"
                          onClick={() => {
                            DeleteDoc(item.id);
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
  );
}
