import React from "react";
import { Link } from "react-router-dom";

export default function WhyTable() {
  return (
    <div className="bg-[#F9F9F9] p-8">
      <div className="bg-white rounded-xl p-6">
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between px-6 pt-2">
          <h1 className="text-xl font-semibold">Why Us</h1>
          <Link to={"/addnewwhy"}>
            <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
              Add New Why Us
            </button>
          </Link>
        </div>
        <div className="py-8 pt-14 w-full">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-y border-[#EEEEEE]">
                <tr>
                  <th className=" md:pl-10 py-2">S.No</th>
                  <th className="pl-5 md:pl-10 py-2">Service Title</th>
                  <th className="pl-5 md:pl-10 py-2">Title</th>
                  <th className="pl-10 py-2">Image</th>
                  <th className="pl-10 py-2">Edit</th>
                  <th className="pl-10 py-2">Delete</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#EEEEEE]">
                <tr>
                  <td className="pl-5 md:pl-14 py-8 ">1.</td>
                  <td className="pl-5 md:pl-10 py-8 text-sm">
                    Lens and Frames
                  </td>
                  <td className="pl-5 md:pl-10 py-8 text-sm">
                    Fast Moving Consumer Goods (FMCG)
                  </td>
                  <td className="pl-10 py-8">
                    <img src="" alt="img.png" />
                  </td>
                  <td className="pl-10 py-8">Edit</td>
                  <td className="pl-10 py-8">Delete</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
