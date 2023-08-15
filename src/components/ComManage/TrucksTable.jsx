import React from "react";
import { useNavigate } from "react-router-dom";

export default function TrucksTable() {
  const data = [
    {
      id: 1,
      Vendorid: "30001",
      Vendor: "  Fast Moving Consumer Goods (FMCG)",
      TruckType: "Tata Zip",
      LoadType: "Part",
      State: "Andhra Pradesh	",
      MultiPointDelivery: "yes",
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-[#F9F9F9] p-8">
        <div className="p-6 bg-white rounded-xl">
          <div className="flex justify-between px-6 pt-2">
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
                    <th className="py-2 pl-3">S.No</th>
                    <th className="py-2 pl-3">Vendor ID</th>
                    <th className="py-2 pl-3">Vendor</th>
                    <th className="py-2 pl-3">Truck Type</th>
                    <th className="py-2 pl-3">Load Type</th>
                    <th className="py-2 pl-3">State</th>
                    <th className="py-2 pl-3">Multi Point Delivery</th>
                    <th className="py-2 pl-3">Status</th>
                    <th className="py-2 pl-3">View</th>
                    <th className="py-2 pl-3">Edit</th>
                    <th className="py-2 pl-3">Delete</th>
                  </tr>
                </thead>
                <tbody className="border-b border-[#EEEEEE] ">
                  {data.map((item, i) => {
                    return (
                      <>
                        <tr>
                          <td className="py-8 md:pl-10 ">{item.id}</td>
                          <td className="py-8 text-sm md:pl-3">
                            {item.Vendorid}
                          </td>
                          <td className="py-8 text-sm md:pl-3">
                            {item.Vendor}
                          </td>
                          <td className="py-8 pl-3">{item.TruckType}</td>
                          <td className="py-8 pl-3">{item.LoadType}</td>
                          <td className="py-8 pl-3">{item.State}</td>
                          <td className="py-8 pl-10">
                            {item.MultiPointDelivery}
                          </td>
                          <td className="py-8 pl-3">
                            <select className="px-4 outline-none border border-[#e2e2e2] py-1 text-[#333333] rounded-md">
                              <option>Select Status</option>
                              <option>Active</option>
                              <option>In-Active</option>
                              <option>Block</option>
                            </select>
                          </td>
                          <td
                            className="py-8 pl-3"
                            onClick={() => {
                              navigate(`/truckedit/${item.id}`);
                            }}
                          >
                            Edit
                          </td>
                          <td className="py-8 pl-3">Delete</td>
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
