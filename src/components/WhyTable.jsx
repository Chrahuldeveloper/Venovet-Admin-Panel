import React from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 4576403e01fdc4aa95ed96781fcf8c91819fa6d3

export default function WhyTable() {


  // const navigate = useNavigate()


  return (
    <div className="bg-[#F9F9F9] p-8">
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
              <tbody className="border-b border-[#EEEEEE]">
                <tr>
                  <td className="py-8 pl-5 md:pl-14 ">1.</td>
                  <td className="py-8 pl-5 text-sm md:pl-10">
                    Lens and Frames
                  </td>
                  <td className="py-8 pl-5 text-sm md:pl-10">
                    Fast Moving Consumer Goods (FMCG)
                  </td>
                  <td className="py-8 pl-10">
                    <img src="" alt="img.png" />
                  </td>
                  <td className="py-8 pl-10" onClick={()=>{
                    // navigate(`/whyusedit/${_.id}`)
                  }}>Edit</td>
                  <td className="py-8 pl-10">Delete</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
