import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./../././../Firebase";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
export default function EnquiryTable() {
  const [data, setData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [comments, setComments] = useState([]);

  // save Status
  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      setIsSubmitting(true);
      const docRef = doc(db, "Enquiry_Status", orderId);
      await setDoc(docRef, { status: newStatus });
      console.log("Order status successfully updated!");
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error updating order status:", error);
    }
  };

  // Save comment
  const saveComment = async (orderId, comment) => {
    try {
      setIsSubmitting(true);
      const docRef = doc(db, "Enquiry_Status", orderId);
      await setDoc(docRef, { comment: comment }, { merge: true });
      console.log("Comment successfully saved!");
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error saving comment:", error);
    }
  };

  const fetchOrderStatus = async () => {
    setIsSubmitting(true);
    const querySnapshot = await getDocs(collection(db, "Enquiry_Status"));
    const enquiryData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    const initialSelectedStatus = enquiryData.map(
      (item) => item.status || "Select Status"
    );
    setSelectedStatus(initialSelectedStatus);
    setIsSubmitting(false);
  };

  useEffect(() => {
    fetchOrderStatus();
    window.scrollTo(0, 0);
  }, []);

  const fetchComments = async () => {
    setIsSubmitting(true);
    const querySnapshot = await getDocs(collection(db, "Enquiry_Status"));
    const enquiryData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    const initialComments = enquiryData.map((item) => item.comment || "");
    setComments(initialComments);
    setIsSubmitting(false);
  };

  useEffect(() => {
    fetchComments();
    window.scrollTo(0, 0);
  }, []);

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
    setIsSubmitting(true);
    try {
      const docRef = doc(db, "Enquiry_Status", docid);
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
      setIsSubmitting(false);
      navigate("/admin-panel/home");
    } catch (error) {
      setIsSubmitting(false);
      alert("Sorry! Couldn't delete document");
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
            <h1 className="text-xl font-semibold">Enquiries</h1>
          </div>
          <div className="py-8 pt-14">
            <div className="overflow-x-auto">
              <table className="w-[100vw] text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="py-2 pl-3">S.No</th>
                    <th className="py-2 pl-3">Enq ID</th>
                    <th className="py-2 pl-3">Customer Name</th>
                    <th className="py-2 pl-3">Email</th>
                    <th className="py-2 pl-5">Mobile</th>
                    <th className="py-2 pl-3">Subject</th>
                    <th className="py-2 pl-5">Message</th>
                    <th className="py-2 pl-5">Status</th>
                    <th className="py-2 pl-5">Comment</th>
                    <th className="py-2 pl-5">Save</th>
                    <th className="py-2 pl-5">Delete</th>
                  </tr>
                </thead>
                <tbody className="border-b border-[#EEEEEE] text-sm">
                  {data?.map((_, i) => {
                    return (
                      <tr>
                        <td className="py-8 md:pl-8 ">{i + 1}</td>
                        <td className="py-8 text-sm md:pl-3">1000000{i + 1}</td>
                        <td className="py-8 text-sm md:pl-5">{_.Name}</td>
                        <td className="py-8 pl-3">{_.Email}</td>
                        <td className="py-8 pl-5">{_.Mobile}</td>
                        <td className="py-8 pl-3">{_.Nature}</td>
                        <td className="py-8 pl-5">{_.Message}</td>
                        <td className="py-8 pl-3">
                          <select
                            value={selectedStatus[i]}
                            onChange={(e) => {
                              const newStatus = e.target.value;
                              setSelectedStatus((prevstatus) => {
                                const updatedStatus = [...prevstatus];
                                updatedStatus[i] = newStatus;
                                return updatedStatus;
                              });
                              updateOrderStatus(_.id, newStatus);
                            }}
                            className="px-4 outline-none border border-[#e2e2e2] py-1 text-[#333333] rounded-md"
                          >
                            <option>Select Status</option>
                            <option>Open</option>
                            <option>Process</option>
                            <option>Close</option>
                          </select>
                        </td>
                        <td className="py-8 pl-5">
                          <textarea
                            type="text"
                            value={comments[i]}
                            onChange={(e) => {
                              const newComment = e.target.value;
                              setComments((prevComments) => {
                                const updatedComments = [...prevComments];
                                updatedComments[i] = newComment;
                                return updatedComments;
                              });
                            }}
                            cols={12}
                            rows={3}
                            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              saveComment(_.id, comments[i]);
                            }}
                          >
                            Save
                          </button>
                        </td>
                        <td
                          className="py-8 pl-5 cursor-pointer"
                          onClick={() => {
                            Deletedoc(_.id);
                          }}
                        >
                          Delete
                        </td>
                      </tr>
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
