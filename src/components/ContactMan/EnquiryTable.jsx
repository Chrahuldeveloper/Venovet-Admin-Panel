import { collection, deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "./../././../Firebase";
export default function EnquiryTable() {
  const docref = collection(db, "COLLECTIONNAME"); // just add the collection name
  const [docs, loading, error] = useCollectionData(docref);

  if (error) {
    console.log(error);
  }

  const Deletedoc = async (docid) => {
    try {
      alert("Are you sure you want to delete?");
      await deleteDoc(doc(db, "COLLECTIONNAME", docid));
      alert("Deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-[#F9F9F9] p-8">
        <div className="p-6 bg-white rounded-xl">
          <div className="flex justify-between px-6 pt-2">
            <h1 className="text-xl font-semibold">Enquiries</h1>
            {/* <button className="bg-[#0B2A97] px-3 py-3 text-white rounded-3xl text-sm font-semibold">
              Add Company
            </button> */}
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
                  {docs?.map((_, i) => {
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
