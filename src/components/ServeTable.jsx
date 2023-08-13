import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServeTable() {
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
        <div className="flex justify-between px-6 pt-2">
          <h1 className="text-xl font-semibold">Who We Serve</h1>
          <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
            Add New Who We Serve
          </button>
        </div>
        <div className="w-full py-8 pt-14">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-y border-[#EEEEEE]">
                <tr>
                  <th className="py-2 pl-10">S.No</th>
                  <th className="py-2 pl-10">Title</th>
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
                        <td className="py-8 md:pl-14 ">{item.id}</td>
                        <td className="py-8 text-sm md:pl-10">{item.Tittle}</td>
                        <td className="py-8 pl-10">
                          <img src={item.image} alt="img.png" />
                        </td>
                        <td
                          className="py-8 pl-10 cursor-pointer"
                          onClick={() => {
                            navigate(`/${item.Tittle}`);
                          }}
                        >
                          Edit
                        </td>
                        <td className="py-8 pl-10">Delete</td>
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
