import React from "react";

export default function KeyTable() {
  return (
    <div className="bg-[#F9F9F9] p-8">
      <div className="bg-white rounded-xl p-6">
        <div className="flex justify-between px-6 pt-2">
          <h1 className="text-xl font-semibold">Key Benefits</h1>
          <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
            Add Key Benefits
          </button>
        </div>
        <div className="py-8 pt-14 w-full">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-y border-[#EEEEEE]">
                <tr>
                  <th className="pl-10 py-2">S.No</th>
                  <th className="pl-10 py-2">Service Title</th>
                  <th className="pl-10 py-2">Title</th>
                  <th className="pl-10 py-2">Text</th>
                  <th className="pl-10 py-2">Edit</th>
                  <th className="pl-10 py-2">Delete</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#EEEEEE]">
                <tr>
                  <td className="md:pl-14 py-8 ">1.</td>
                  <td className="md:pl-10 py-8 text-sm">Lens and Frames</td>
                  <td className="md:pl-10 py-8 text-sm">
                    Which Plan Is Right For Me?
                  </td>
                  <td className="pl-10 py-8">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
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
