import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

function UserDetailsField({ label, required, children }) {
  return (
    <div className="grid grid-cols-3">
      <label className="text-[#186ad2] text-lg">
        {label} {required && <span className="text-red-500 text-lg">*</span>}
      </label>
      {children}
    </div>
  );
}

function SelectField({ label, options, defaultValue }) {
  return (
    <UserDetailsField label={label}>
      <select
        className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </UserDetailsField>
  );
}

export default function EditTrucks() {
  const { truckid } = useParams();

  return (
    <div>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] lg:ml-24">
        <Navbar />

        <div className="bg-white py-4 m-8 rounded-3xl">
          <div className="border-b font-semibold text-xl px-8 py-2">
            <h1>Update Truck Details</h1>
          </div>
          <form className="p-8 space-y-4">
            <UserDetailsField label="Vendor" required>
              <input
                type="text"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>

            <UserDetailsField label="Truck type" required>
              <input
                type="text"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>

            <SelectField
              label="Load type"
              options={["Part", "Full", "Both"]}
              defaultValue="Part"
            />

            <SelectField
              label="Service State"
              options={indianStates}
              defaultValue={indianStates[0]} // Set a default state
            />

            {/* Rate fields */}

            <UserDetailsField label="Rate per km">
              <input
                type="text"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>

            <UserDetailsField label="Rate per kg">
              <input
                type="text"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>

            <UserDetailsField label="Rate per ton">
              <input
                type="text"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>

            {/* Tolls, loading, and unloading charges */}

            <SelectField
              label="Tolls"
              options={["Included", "Excluded"]}
              defaultValue="Included"
            />

            <SelectField
              label="Loading charges"
              options={["Included", "Excluded"]}
              defaultValue="Included"
            />

            <SelectField
              label="Unloading charges"
              options={["Included", "Excluded"]}
              defaultValue="Included"
            />

            {/* Multi point delivery, long lease, GPS tracking, transport insurance */}

            <SelectField
              label="Multi point delivery"
              options={["Yes", "No"]}
              defaultValue="Yes"
            />

            <SelectField
              label="Long lease"
              options={["Yes", "No"]}
              defaultValue="Yes"
            />

            <SelectField
              label="GPS Tracking"
              options={["Yes", "No"]}
              defaultValue="Yes"
            />

            <SelectField
              label="Transport Insurance"
              options={["Yes", "No"]}
              defaultValue="Yes"
            />

            {/* Vehicle photos */}

            <UserDetailsField label="Vehicle photo">
              <input
                type="file"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>

            <UserDetailsField label="Vehicle photo">
              <input
                type="file"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>

            <div className="flex items-center justify-center pt-10">
              <button className="rounded-full text-white px-4 py-2 bg-[#0B2A97]">
                Submit
              </button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
}
