import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../Firebase";

export default function CatTable() {
  const [data, setData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    setIsSubmitting(true);
    const querySnapshot = await getDocs(collection(db, "CATEGORIES"));
    const enquiryData = querySnapshot.docs.map((doc) => doc.data());
    setData(enquiryData);
    setIsSubmitting(false);
  };

  const DeleteDoc = async (docId) => {
    try {
      const docRef = doc(db, "CATEGORIES", docId);
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
      navigate("/admin-panel/home");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div>
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
      <div className="bg-[#F9F9F9] p-8">
        <div className="p-6 bg-white rounded-xl">
          <div className="flex justify-between px-6 pt-2">
            <h1 className="text-xl font-semibold">Categories</h1>
            <Link to={"/admin-panel/addnewcategory"}>
              {" "}
              <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
                Add New Category
              </button>
            </Link>
          </div>
          <div className="w-full py-8 pt-14">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="py-2 md:pl-3">S.No</th>
                    <th className="py-2 pl-3">Category Name</th>
                    <th className="py-2 pl-3">Image</th>
                    {/* <th className="py-2 pl-3 ">Edit</th> */}
                    <th className="py-2 pl-3">Delete</th>
                  </tr>
                </thead>
                {data.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tbody className="border-b border-[#EEEEEE] text-sm">
                        <tr>
                          <td className="py-8 md:pl-10 ">{index + 1}</td>
                          <td className="py-8 pl-3 text-sm"> {item.Name}</td>
                          <td className="py-8 pl-3 cursor-pointer">
                            <img
                              className="w-24 rounded md:rounded-lg"
                              src={item.Image}
                              alt="img.png"
                            />
                          </td>
                          {/* <td
                            className="pl-3 py-8 cursor-pointer text-[#7e7e7e]"
                            onClick={() => {
                              navigate(`/editcategory/${item.Name}`);
                            }}
                          >
                            Edit
                          </td> */}
                          <td
                            onClick={() => {
                              DeleteDoc(item.Name);
                            }}
                            className="pl-3 py-8 cursor-pointer text-[#7e7e7e]"
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
