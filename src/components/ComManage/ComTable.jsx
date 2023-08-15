import React from "react";
import { useNavigate } from "react-router-dom";

export default function ComTable() {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      category: "Lens and Frames",
      Tittle: "  Fast Moving Consumer Goods (FMCG)",
      date: "1-01-1970",
      Venture: "AI SILKS KALAMANDIR LTD",
      Phone: "9837742555",
      Name: "PRADEEP",
      Type: "User",
    },
  ];

  return (
    <div>
      <div className="bg-[#F9F9F9] p-8">
        <div className="p-6 bg-white rounded-xl">
          <div className="flex justify-between px-6 pt-2 flex-col md:flex-row space-y-5 md:space-y-0">
            <h1 className="text-xl font-semibold">List of Companies</h1>
            <button className="bg-[#0B2A97] px-3 py-3 text-white rounded-3xl text-sm font-semibold">
              Add Company
            </button>
          </div>
          <div className="w-full py-8 pt-14">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="py-2 md:pl-3">S.No</th>
                    <th className="py-2 pl-3">Company ID</th>
                    <th className="py-2 pl-3">Username</th>
                    <th className="py-2 pl-3">Expiry date</th>
                    <th className="py-2 pl-3">Business</th>
                    <th className="py-2 pl-3">Individual</th>
                    <th className="py-2 pl-3">P Mobile no.</th>
                    <th className="py-2 pl-3">Users</th>
                    <th className="py-2 pl-3">View</th>
                    <th className="py-2 pl-3">Edit</th>
                    <th className="py-2 pl-3">Delete</th>
                  </tr>
                </thead>
                <tbody className="border-b border-[#EEEEEE] text-sm">
                  {data.map((item, i) => {
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
                            className="py-8 pl-3"
                            onClick={() => {
                              navigate(`/edit/${item.id}`);
                            }}
                          >
                            Edit
                          </td>
                          <td className="py-8 pl-3">Delete</td>
                        </tr>
                      </React.Fragment>
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
