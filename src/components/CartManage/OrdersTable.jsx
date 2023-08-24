import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OrdersTable() {
  const data = [
    {
      id: 1,
      Orderid: "100000017",
      Customer: "  ests",
      Email: "	tes@gmail.com",
      Mobile: "	8332829886",
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-[#F9F9F9] p-8">
        <div className="p-6 bg-white rounded-xl">
          <div className="flex justify-between px-6 pt-2">
            <h1 className="text-xl font-semibold">Orders</h1>
          </div>
          <div className="w-full py-8 pt-14">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="py-2 pl-3">S.No</th>
                    <th className="py-2 pl-3">Order ID</th>
                    <th className="py-2 pl-3">Customer</th>
                    <th className="py-2 pl-3">Email</th>
                    <th className="py-2 pl-3">Mobile No</th>
                    <th className="py-2 pl-3">Status</th>
                    <th className="py-2 pl-3">view</th>
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
                            {item.Orderid}
                          </td>
                          <td className="py-8 text-sm md:pl-3">
                            {item.Customer}
                          </td>

                          <td className="py-8 pl-3">{item.Email}</td>
                          <td className="py-8 pl-3">{item.Mobile}</td>
                          <td className="py-8 pl-3">
                            <select className="px-4 outline-none border border-[#e2e2e2] py-1 text-[#333333] rounded-md">
                              <option>Select Status</option>
                              <option>Open</option>
                              <option>Process</option>
                              <option>Close</option>
                            </select>
                          </td>
                          <td
                            className="py-8 pl-3 cursor-pointer text-[#7e7e7e]"
                            onClick={() => {
                              navigate(`/truckedit/${item.id}`);
                            }}
                          >
                            Edit
                          </td>
                          <td className="py-8 pl-3 cursor-pointer text-[#7e7e7e]">
                            Delete
                          </td>
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
