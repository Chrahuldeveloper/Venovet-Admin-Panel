import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";

export default function CatTable() {
  const [data, setData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    setIsSubmitting(true);
    const querySnapshot = await getDocs(collection(db, "KEY-BENEFITS"));
    const enquiryData = querySnapshot.docs.map((doc) => doc.data());
    setData(enquiryData);

    setIsSubmitting(false);
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
          <div className="flex justify-between px-6 pt-2">
            <h1 className="text-xl font-semibold">Categories</h1>
            <Link to={"/addnewcategory"}>
              {" "}
              <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
                Add New Category
              </button>
            </Link>
          </div>
          <div className="py-8 pt-14 w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="md:pl-3 py-2">S.No</th>
                    <th className="pl-3 py-2">Category Name</th>
                    <th className="pl-3 py-2">Image</th>
                    <th className="pl-3 py-2 ">Edit</th>
                    <th className="pl-3 py-2">Delete</th>
                  </tr>
                </thead>
                <tbody className="border-b border-[#EEEEEE] text-sm">
                  <tr>
                    <td className="md:pl-10 py-8 ">1.</td>
                    <td className="pl-3 py-8 text-sm"> Electronics</td>
                    <td className="pl-3 py-8 cursor-pointer">
                      <img src="" alt="img.png" />
                    </td>
                    <td
                      className="pl-3 py-8 cursor-pointer text-[#7e7e7e]"
                      onClick={() => {
                        // navigate(``);
                      }}
                    >
                      Edit
                    </td>
                    <td className="pl-3 py-8 cursor-pointer text-[#7e7e7e]">
                      Delete
                    </td>
                    {/* <td className="pl-3 py-8">View</td>
                    <td className="pl-3 py-8">Edit</td>
                    <td className="pl-3 py-8">Delete</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
