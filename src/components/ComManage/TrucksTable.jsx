import React from "react";

export default function TrucksTable() {
  return (
    <div>
      <div className="bg-[#F9F9F9] p-8">
        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-between px-6 pt-2">
            <h1 className="text-xl font-semibold">List of Companies</h1>
            <button className="bg-[#0B2A97] px-3 py-3 text-white rounded-3xl text-sm font-semibold">
              Add Company
            </button>
          </div>
          <div className="py-8 pt-14 w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="pl-3 py-2">S.No</th>
                    <th className="pl-3 py-2">Vendor ID</th>
                    <th className="pl-3 py-2">Vendor</th>
                    <th className="pl-3 py-2">Truck Type</th>
                    <th className="pl-3 py-2">Load Type</th>
                    <th className="pl-3 py-2">State</th>
                    <th className="pl-3 py-2">Multi Point Delivery</th>
                    <th className="pl-3 py-2">Status</th>
                    <th className="pl-3 py-2">View</th>
                    <th className="pl-3 py-2">Edit</th>
                    <th className="pl-3 py-2">Delete</th>
                  </tr>
                </thead>
                <tbody className="border-b border-[#EEEEEE] ">
                  <tr>
                    <td className="md:pl-10 py-8 ">1.</td>
                    <td className="md:pl-3 py-8 text-sm"> 30001</td>
                    <td className="md:pl-3 py-8 text-sm">
                      Business Name Ramu user
                    </td>
                    <td className="pl-3 py-8">Tata Zip</td>
                    <td className="pl-3 py-8">Part</td>
                    <td className="pl-3 py-8"> Andhra Pradesh</td>
                    <td className="pl-10 py-8">Yes</td>
                    <td className="pl-3 py-8">
                      <select className="px-4 outline-none border border-[#e2e2e2] py-1 text-[#333333] rounded-md">
                        <option>Select Status</option>
                        <option>Active</option>
                        <option>In-Active</option>
                        <option>Block</option>
                      </select>
                    </td>
                    <td className="pl-3 py-8">View</td>
                    <td className="pl-3 py-8">Edit</td>
                    <td className="pl-3 py-8">Delete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
