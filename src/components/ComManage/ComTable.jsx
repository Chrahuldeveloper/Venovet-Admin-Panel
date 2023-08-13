import React from "react";

export default function ComTable() {
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
                    <th className="pl-3 py-2">Company ID</th>
                    <th className="pl-3 py-2">Username</th>
                    <th className="pl-3 py-2">Expiry date</th>
                    <th className="pl-3 py-2">Business</th>
                    <th className="pl-3 py-2">Individual</th>
                    <th className="pl-3 py-2">P Mobile no.</th>
                    <th className="pl-3 py-2">Users</th>
                    <th className="pl-3 py-2">View</th>
                    <th className="pl-3 py-2">Edit</th>
                    <th className="pl-3 py-2">Delete</th>
                  </tr>
                </thead>
                <tbody className="border-b border-[#EEEEEE] text-sm">
                  <tr>
                    <td className="md:pl-10 py-8 ">1.</td>
                    <td className="md:pl-3 py-8 text-sm">Lens and Frames</td>
                    <td className="md:pl-3 py-8 text-sm">
                      Fast Moving Consumer Goods (FMCG)
                    </td>
                    <td className="pl-3 py-8">01-01-1970</td>
                    <td className="pl-3 py-8">SAI SILKS KALAMANDIR LTD</td>
                    <td className="pl-3 py-8">PRADEEP</td>
                    <td className="pl-3 py-8">9837742555</td>
                    <td className="pl-3 py-8">Users</td>
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
