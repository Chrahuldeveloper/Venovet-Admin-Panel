import React from "react";
// import { collection, deleteDoc, doc } from "firebase/firestore";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// import { db } from "./../././../Firebase";
import { Link, useNavigate } from "react-router-dom";

export default function ProTable() {
  //   const navigate = useNavigate();

  //   const docref = collection(db, "COLLECTIONNAME"); // just add the collection name
  //   const [data, loading, error] = useCollectionData(docref);

  //   if (error) {
  //     console.log(error);
  //   }

  //   const Deletedoc = async (docid) => {
  //     try {
  //       alert("Are you sure you want to delete?");
  //       await deleteDoc(doc(db, "COLLECTIONNAME", docid));
  //       alert("Deleted successfully");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div>
      <div className="bg-[#F9F9F9] p-8">
        <div className="p-6 bg-white rounded-xl">
          <div className="flex flex-col justify-between px-6 pt-2 space-y-5 md:flex-row md:space-y-0">
            <h1 className="text-xl font-semibold">Properties</h1>
          </div>
          <div className="w-full py-5 ">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="py-2 md:pl-3">S.No</th>
                    <th className="py-2 pl-3">Vendor</th>
                    <th className="py-2 pl-3">Property Type</th>
                    <th className="py-2 pl-3">Industrial Park</th>
                    <th className="py-2 pl-3">Pincode</th>
                    <th className="py-2 pl-3">Status</th>
                    <th className="py-2 pl-3">View</th>
                    <th className="py-2 pl-3">Edit</th>
                    <th className="py-2 pl-3">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-8 text-center" colSpan="9">
                      No data available in table
                    </td>
                  </tr>
                </tbody>
                {/* <tbody className="border-b border-[#EEEEEE] text-sm"> */}
                {/* {data?.map((item, i) => {
                    return (
                      <React.Fragment key={i}>
                        <tr>
                          <td className="py-8 md:pl-10 ">{item.id}</td>
                          <td className="py-8 text-sm md:pl-3">
                            {item.category}
                          </td>
                          <td className="py-8 text-sm md:pl-3">
                            {item.Tittle}
                          </td>
                          <td className="py-8 pl-3">{item.date}</td>
                          <td className="py-8 pl-3">{item.Venture}</td>
                          <td className="py-8 pl-3">{item.Name}</td>
                          <td className="py-8 pl-3">{item.Phone}</td>
                          <td className="py-8 pl-3">{item.Type}</td>
                          <td
                            className="py-8 pl-3 cursor-pointer"
                            onClick={() => {
                              navigate(`/edit/${item.id}`);
                            }}
                          >
                            Edit
                          </td>
                          <td
                            className="py-8 pl-3"
                            onClick={() => {
                              Deletedoc(item.id);
                            }}
                          >
                            Delete
                          </td>
                          <td className="py-8 pl-3 cursor-pointer">Delete</td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
