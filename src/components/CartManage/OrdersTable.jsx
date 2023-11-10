import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase";
import { RotatingLines } from "react-loader-spinner";

export default function OrdersTable() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    setIsSubmitting(true);
    const querySnapshot = await getDocs(collection(db, "ORDERS"));
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
      setIsSubmitting(true);
      const docRef = doc(db, "ORDERS", docId);
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
      setIsSubmitting(false);
      navigate("/home");
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div>
      {isSubmitting && (
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
            <h1 className="text-xl font-semibold">Orders</h1>
          </div>
          <div className="w-full py-8 pt-14">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="py-2 pl-3">S.No</th>
                    <th className="py-2 pl-3">Order ID</th>
                    <th className="py-2 pl-3">Quantity</th>
                    <th className="py-2 pl-3">Customer</th>
                    <th className="py-2 pl-3">Email</th>
                    <th className="py-2 pl-3">Mobile No</th>
                    <th className="py-2 pl-3">Status</th>
                    <th className="py-2 pl-3">Delete</th>
                  </tr>
                </thead>
                <tbody className="border-b border-[#EEEEEE] ">
                  {data.map((item, i) => {
                    return (
                      <>
                        <tr>
                          <td className="py-8 md:pl-10 ">{i + 1}</td>
                          <td className="py-8 text-sm md:pl-3">{item.name}</td>
                          <td className="py-8 text-sm md:pl-3">
                            {item.quantity}
                          </td>
                          <td className="py-8 text-sm md:pl-3">{item.Name}</td>
                          <td className="py-8 pl-3">{item.Email}</td>
                          <td className="py-8 pl-3">{item.Phone}</td>
                          <td className="py-8 pl-3">
                            <select className="px-4 outline-none border border-[#e2e2e2] py-1 text-[#333333] rounded-md">
                              <option value="Select Status">
                                Select Status
                              </option>
                              <option value="Open">Open</option>
                              <option value="Process">Process</option>
                              <option value="Close">Close</option>
                            </select>
                          </td>
                          <td
                            onClick={() => {
                              DeleteDoc(item.id);
                            }}
                            className="py-8 pl-3 cursor-pointer text-[#7e7e7e]"
                          >
                            Delete
                          </td>
                        </tr>
                      </>
                    );
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
