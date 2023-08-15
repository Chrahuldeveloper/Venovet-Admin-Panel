import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

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

export default function EditAccess() {
  const { editid } = useParams();

  return (
    <div>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] lg:ml-24">
        <Navbar />

        <div className="bg-white py-4 m-8 rounded-3xl">
          <div className="border-b font-semibold text-xl px-8 py-2">
            <h1>Update Company Details</h1>
          </div>
          <form className="p-8 space-y-4">
            <UserDetailsField label="Username" required>
              <input
                type="text"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Password" required>
              <input
                type="password"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="No of Users" required>
              <input
                type="number"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Service type" required>
              <select className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full">
                <option>Transporters</option>
                <option>Property Owners</option>
                <option>Others</option>
              </select>
            </UserDetailsField>
            <UserDetailsField label="Business name" required>
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>
            <UserDetailsField label="Pan number (Business)">
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>
            <UserDetailsField label="GST Number">
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>
            <UserDetailsField label="Company logo">
              <input
                type="file"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Individual name" required>
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>
            <UserDetailsField label="Gender" required>
              <select className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </UserDetailsField>
            <UserDetailsField label="Date of birth (As per Aadhar)" required>
              <input
                type="date"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Aadhar card number" required>
              <input
                type="number"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Pancard number (Individual)" required>
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>
            <UserDetailsField label="Mobile no (Primary)" required>
              <input
                type="number"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Secondary mobile no">
              <input
                type="number"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Whatsapp number" required>
              <input
                type="number"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Email">
              <input
                type="email"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Website">
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>
            <UserDetailsField label="Address line 1" required>
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>
            <UserDetailsField label="Address line 2" required>
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>
            <UserDetailsField label="Locality" required>
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>
            <UserDetailsField label="Country" required>
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>
            <UserDetailsField label="State" required>
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>
            <UserDetailsField label="City" required>
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>
            <UserDetailsField label="Pincode" required>
              <input className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full" />
            </UserDetailsField>

            <div className="flex items-center justify-center pt-10">
              <button className="rounded-full text-white px-4 py-2 bg-[#0B2A97]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
