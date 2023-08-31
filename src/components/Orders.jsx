import React from "react";

function Orders() {
  return (
    <div className="bg-white my-8  rounded-xl lg:w-[50%] shadow-lg shadow-slate-100">
      <div>
        <h1 className="font-semibold text-xl px-5 py-5">Orders</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="text-left min-w-full">
          <thead className="bg-[#cee4ff] border-b border-[#1065cc]">
            <tr>
              <th className="px-6 py-4 text-[17px]">ID</th>
              <th className="px-6 py-4 text-[17px]">Name</th>
              <th className="px-6 py-4 text-[17px]">Amount</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#1065cc]">
            <tr>
              <td className="w-[12rem] px-6 py-4 font-semibold text-lg">
                100000000000001{" "}
                <span className="text-sm text-[#333333] font-medium ">
                  31-03-2022 12:00 am
                </span>
              </td>

              <td className="w-[10rem] px-6 py-4 font-semibold text-lg">
                PRADEEP{" "}
                <span className="text-sm text-[#333333] font-medium">
                  9837742555
                </span>
              </td>

              <td className="px-6 font-semibold text-lg">Rs.480</td>
            </tr>
            {/* Additional rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
