import React from "react";

export default function NewsTable() {
  return (
    <div>
      <div className="bg-[#F9F9F9] p-8">
        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-between px-6 pt-2">
            <h1 className="text-xl font-semibold">News Letters</h1>
          </div>
          <div className="py-8 pt-14 w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="md:pl-3 py-2">S.No</th>
                    <th className="pl-3 py-2">Email</th>
                    <th className="pl-3 py-2">Date</th>
                    <th className="pl-3 py-2">Delete</th>
                  </tr>
                </thead>
                <tbody className="border-b border-[#EEEEEE] text-sm">
                  <tr>
                    <td className="md:pl-10 py-8 ">1.</td>
                    <td className="pl-3 py-8">pradeep.bpc@gmail.com</td>
                    <td className="pl-3 py-8"> 31-03-2022</td>
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
