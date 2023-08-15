import React, { useState } from "react";
import { db } from "../Firebase";

export default function AdminProfile() {
  const [admin, setadmin] = useState({
    Email: "admin",
    UserName: "Pradeep",
    Password: "venovet",
  });

  //   add onclick and add change the colname & docid
  //   const update_details = async () => {
  //     try {
  //       const docref = db.collection("COLLECTIONNAME").doc("ADDDOCID");
  //       await docref.update({});
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <>
      <div className="bg-[#F9F9F9] p-8">
        <div className="p-6 bg-white rounded-xl">
          <div className="flex flex-col justify-between px-6 pt-2 space-y-5 md:flex-row md:space-y-0">
            <h1 className="text-xl font-semibold">Why Us</h1>
            <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
              Admin Details
            </button>
          </div>
          <div className="w-full py-8 pt-14">
            <form className="pl-20 space-y-10 md:max-w-3xl">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-blue-500 md:text-lg">
                  UserName*
                </h1>
                <input
                  type="text"
                  value={admin.UserName}
                  onchange={(e) => {
                    setadmin({ ...e, UserName: e.target.value });
                  }}
                  className="border-[1px] border-orange-500 outline-none px-10 py-2.5 rounded-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-blue-500 md:text-lg">
                  Password
                </h1>
                <input
                  type="text"
                  value={admin.Password}
                  onchange={(e) => {
                    setadmin({ ...e, Password: e.target.value });
                  }}
                  className="border-[1px] border-orange-500 outline-none px-10 py-2.5 rounded-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-blue-500 md:text-lg">
                  Email*
                </h1>
                <input
                  type="email"
                  value={admin.Email}
                  onchange={(e) => {
                    setadmin({ ...e, Email: e.target.value });
                  }}
                  className="border-[1px] border-orange-500 outline-none px-10 py-2.5 rounded-full"
                />
              </div>
              <div className="flex justify-center">
                <button className="bg-[#0b2a97] px-10 p-2 rounded-xl text-white font-semibold ">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
