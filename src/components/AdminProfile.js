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
            <h1 className="text-xl font-semibold">Update Profile</h1>
          </div>
          <div className="w-full py-8 pt-14">
            <form className="p-8 space-y-4 max-w-4xl">
              <div className="flex items-center justify-between">
                <h1 className="font- text-[#186ad2] md:text-lg">
                  UserName <span className="text-red-500 text-lg">*</span>
                </h1>
                <input
                  type="text"
                  value={admin.UserName}
                  onchange={(e) => {
                    setadmin({ ...e, UserName: e.target.value });
                  }}
                  className="border-[1px] border-orange-500 w-64 md:w-80 lg:w-[30rem] outline-none px-4 py-2 rounded-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font- text-[#186ad2] md:text-lg">Password</h1>
                <input
                  type="text"
                  value={admin.Password}
                  onchange={(e) => {
                    setadmin({ ...e, Password: e.target.value });
                  }}
                  className="border-[1px] border-orange-500 outline-none w-64 md:w-80 lg:w-[30rem]  px-4 py-2 rounded-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font- text-[#186ad2] md:text-lg">Email</h1>
                <input
                  type="email"
                  value={admin.Email}
                  onchange={(e) => {
                    setadmin({ ...e, Email: e.target.value });
                  }}
                  className="border-[1px] border-orange-500 w-64 md:w-80 lg:w-[30rem] outline-none px-4 py-2 rounded-full"
                />
              </div>
              <div className="flex justify-center">
                <button className="bg-[#0b2a97] px-10 p-2 rounded-3xl text-white font-semibold ">
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
