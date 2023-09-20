import React, { useState } from "react";
import { db } from "../Firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

export default function AdminProfile() {
  const [admin, setadmin] = useState({
    Email: "",
    UserName: "",
    Password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // add onclick and add change the colname & docid
  const update_details = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // const docref = db.collection("LOGIN").doc("ID");
      // await docref.update({});
      const docRef = doc(db, "ADMIN_LOGIN", "login1");
      await updateDoc(docRef, admin);
      // await setDoc(docRef, admin);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
    }
  };

  return (
    <>
      {isSubmitting && ( // Render loader only when isSubmitting is true
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-100">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="70"
            visible={true}
          />
        </div>
      )}

      <div className="bg-[#F9F9F9] p-8">
        <div className="p-6 bg-white rounded-xl">
          <div className="flex flex-col justify-between px-6 pt-2 space-y-5 md:flex-row md:space-y-0">
            <h1 className="text-xl font-semibold">Update Profile</h1>
          </div>
          <div className="w-full py-8 pt-14">
            <form className="p-8 space-y-4 max-w-4xl" onSubmit={update_details}>
              <div className="md:flex space-y-4 md:space-y-0 items-center justify-between">
                <h1 className=" text-[#186ad2] md:text-lg">
                  UserName <span className="text-red-500 text-lg">*</span>
                </h1>
                <input
                  type="text"
                  value={admin.UserName}
                  onChange={(e) => {
                    setadmin({ ...admin, UserName: e.target.value });
                  }}
                  className="border-[1px] border-orange-500 w-64  md:w-80 lg:w-[30rem] outline-none px-4 py-2 rounded-full"
                />
              </div>
              <div className="md:flex space-y-4 md:space-y-0 items-center justify-between">
                <h1 className="font- text-[#186ad2] md:text-lg">Password</h1>
                <input
                  type="password"
                  value={admin.Password}
                  onChange={(e) => {
                    setadmin({ ...admin, Password: e.target.value });
                  }}
                  className="border-[1px] border-orange-500 outline-none w-64 md:w-80 lg:w-[30rem]  px-4 py-2 rounded-full"
                />
              </div>
              <div className="md:flex space-y-4 md:space-y-0 items-center justify-between">
                <h1 className="font- text-[#186ad2] md:text-lg">Email</h1>
                <input
                  type="email"
                  value={admin.Email}
                  onChange={(e) => {
                    setadmin({ ...admin, Email: e.target.value });
                  }}
                  className="border-[1px] border-orange-500 w-64 md:w-80 lg:w-[30rem] outline-none px-4 py-2 rounded-full"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#0b2a97] px-10 p-2 rounded-3xl text-white font-semibold "
                >
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
