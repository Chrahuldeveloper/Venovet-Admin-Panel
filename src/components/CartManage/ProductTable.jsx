import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { db } from "../Firebase";
// import { doc, deleteDoc } from "firebase/firestore";

export default function ProductsTable() {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      Tittle: "Fast Moving Consumer Goods (FMCG)	",
      image: "",
    },
  ];

  return (
    <div className="bg-[#F9F9F9] p-8">
      <div className="p-6 bg-white rounded-xl">
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between md:px-6 pt-2">
          <h1 className="md:text-xl font-semibold">Who We Serve</h1>
          <Link to={"/addnewproduct"}>
            {" "}
            <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
              Add New Product
            </button>
          </Link>
        </div>
        <div className="w-full py-8 pt-14">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-y border-[#EEEEEE]">
                <tr>
                  <th className="py-2 md:pl-10">S.No</th>
                  <th className="py-2 md:pl-10">Category</th>
                  <th className="py-2 pl-5 md:pl-10">Product Name</th>
                  <th className="py-2 pl-5 md:pl-10">Price</th>
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
                        <td className="py-8 pl-4 md:pl-14 ">1.</td>
                        <td className="py-8 text-sm pl-5 md:pl-10">
                          Material Handling Equipments
                        </td>
                        <td className="py-8 text-sm pl-5 md:pl-10">
                          Hand Pallet Truck(HPT)
                        </td>
                        <td className="py-8 text-sm pl-5 md:pl-10">₹480</td>

                        <td className="py-8 pl-10">
                          <img src="" alt="img.png" />
                        </td>
                        <td className="py-8 pl-10 cursor-pointer">Edit</td>
                        <td
                          className="py-8 pl-10 cursor-pointer"
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
