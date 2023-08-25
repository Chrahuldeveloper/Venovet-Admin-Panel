import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { db } from "../Firebase";
// import { db } from "../Firebase";
// import { doc, deleteDoc } from "firebase/firestore";
export default function ServeTable() {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      Tittle: "Fast Moving Consumer Goods (FMCG)	",
      image: "",
    },
  ];

  const handleDelete = async (itemId) => {
    try {
      // Delete data from Firestore
      await deleteDoc(doc(db, "CATEGORIES", itemId));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className="bg-[#F9F9F9] p-8">
      <div className="p-6 bg-white rounded-xl">
        <div className="flex flex-col justify-between pt-2 space-y-5 md:flex-row md:space-y-0 md:px-6">
          <h1 className="font-semibold md:text-xl">Who We Serve</h1>
          <Link to={"/addnewserve"}>
            {" "}
            <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
              Add New Who We Serve
            </button>
          </Link>
        </div>
        <div className="w-full py-8 pt-14">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-y border-[#EEEEEE]">
                <tr>
                  <th className="py-2 md:pl-10">S.No</th>
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
                        <td className="py-8 pl-4 md:pl-14 ">{item.id}</td>
                        <td className="py-8 pl-5 text-sm md:pl-10">
                          {item.Tittle}
                        </td>
                        <td className="py-8 pl-10">
                          <img src={item.image} alt="img.png" />
                        </td>
                        <td
                          className="py-8 pl-10 cursor-pointer text-[#7e7e7e]"
                          onClick={() => {
                            navigate(`/${item.Tittle}`);
                          }}
                        >
                          Edit
                        </td>
                        <td
                          className="py-8 pl-10 cursor-pointer text-[#7e7e7e]"
                          // onClick={handleDelete(item.id)}
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
