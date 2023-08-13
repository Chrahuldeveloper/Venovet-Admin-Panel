import React from "react";

export default function EnquiryTable() {
  return (
    <div>
      <div className="bg-[#F9F9F9] p-8">
        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-between px-6 pt-2">
            <h1 className="text-xl font-semibold">Enquiries</h1>
            {/* <button className="bg-[#0B2A97] px-3 py-3 text-white rounded-3xl text-sm font-semibold">
              Add Company
            </button> */}
          </div>
          <div className="py-8 pt-14 w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="pl-3 py-2">S.No</th>
                    <th className="pl-3 py-2">Enq ID</th>
                    <th className="pl-3 py-2">Customer Name</th>
                    <th className="pl-3 py-2">Email</th>
                    <th className="pl-3 py-2">Mobile</th>
                    <th className="pl-3 py-2">Subject</th>
                    <th className="pl-3 py-2">Message</th>
                    <th className="pl-3 py-2">Delete</th>
                    {/* <th className="pl-3 py-2">View</th>
                    <th className="pl-3 py-2">Edit</th>
                    <th className="pl-3 py-2">Delete</th> */}
                  </tr>
                </thead>
                <tbody className="border-b border-[#EEEEEE] text-sm">
                  <tr>
                    <td className="md:pl-10 py-8 ">1.</td>
                    <td className="md:pl-3 py-8 text-sm">100000000000001</td>
                    <td className="md:pl-3 py-8 text-sm">PRADEEP</td>
                    <td className="pl-3 py-8">pradeep.bpc@gmail.com</td>
                    <td className="pl-3 py-8">9837742555</td>
                    <td className="pl-3 py-8">Products related</td>
                    <td className="pl-3 py-8"> hii</td>
                    <td className="pl-3 py-8">Delete</td>
                    {/* <td className="pl-3 py-8">View</td>
                    <td className="pl-3 py-8">Edit</td>
                    <td className="pl-3 py-8">Delete</td> */}
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
