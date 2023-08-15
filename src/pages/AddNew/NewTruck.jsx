import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { db, storage } from "../../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

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
        defaultValue={options[0]}
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

export default function NewTruck() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    vendor: "",
    truckType: "",
    loadType: "Part",
    serviceState: indianStates[0],
    ratePerKm: "",
    ratePerKg: "",
    ratePerTon: "",
    tolls: "Included",
    loadingCharges: "Included",
    unloadingCharges: "Included",
    multiPointDelivery: "Yes",
    longLease: "Yes",
    gpsTracking: "Yes",
    transportInsurance: "Yes",
    vehiclePhoto1: null,
    vehiclePhoto2: null,
  });

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      vehiclePhoto1: imageFile,
    }));
  };

  const handlesecondImageChange = (event) => {
    const imageFile = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      vehiclePhoto2: imageFile,
    }));
  };
  const handleInputChange = (field, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const imageRef = ref(storage, `trucks/${form.vehiclePhoto1.name}`);
      const uploadTask = uploadBytesResumable(
        imageRef,
        form.vehiclePhoto1.name
      );

      const imageRef2 = ref(storage, `trucks/${form.vehiclePhoto2.name}`);
      const uploadTask2 = uploadBytesResumable(
        imageRef2,
        form.vehiclePhoto2.name
      );

      await Promise.all([uploadTask, uploadTask2]);

      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      const downloadURL2 = await getDownloadURL(uploadTask2.snapshot.ref);

      const formData = {
        ...form,
        vehiclePhoto1: downloadURL,
        vehiclePhoto2: downloadURL2,
      };

      await setDoc(doc(db, "TRUCKS", form.vendor), formData);

      navigate("/trucks");
    } catch (error) {
      console.log(error);
    }
  };

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
          <form className="p-8 space-y-4" onSubmit={handleSubmit}>
            <UserDetailsField label="Vendor" required>
              <input
                type="text"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
                value={form.vendor}
                onChange={(e) => handleInputChange("vendor", e.target.value)}
              />
            </UserDetailsField>

            <UserDetailsField label="Truck type" required>
              <input
                type="text"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
                value={form.truckType}
                onChange={(e) => handleInputChange("truckType", e.target.value)}
              />
            </UserDetailsField>

            <SelectField
              label="Load type"
              options={["Part", "Full", "Both"]}
              value={form.loadType}
              onChange={(value) => handleInputChange("loadType", value)}
            />

            <SelectField
              label="Service State"
              options={indianStates}
              value={form.serviceState}
              onChange={(value) => handleInputChange("serviceState", value)}
            />

            {/* Rate fields */}

            <UserDetailsField label="Rate per km">
              <input
                type="text"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
                value={form.ratePerKm}
                onChange={(e) => handleInputChange("ratePerKm", e.target.value)}
              />
            </UserDetailsField>

            <UserDetailsField label="Rate per kg">
              <input
                type="text"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
                value={form.ratePerKg}
                onChange={(e) => handleInputChange("ratePerKg", e.target.value)}
              />
            </UserDetailsField>

            <UserDetailsField label="Rate per ton">
              <input
                type="text"
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
                value={form.ratePerTon}
                onChange={(e) =>
                  handleInputChange("ratePerTon", e.target.value)
                }
              />
            </UserDetailsField>

            {/* Tolls, loading, and unloading charges */}

            <SelectField
              label="Tolls"
              options={["Included", "Excluded"]}
              value={form.tolls}
              onChange={(value) => handleInputChange("tolls", value)}
            />

            <SelectField
              label="Loading charges"
              options={["Included", "Excluded"]}
              value={form.loadingCharges}
              onChange={(value) => handleInputChange("loadingCharges", value)}
            />

            <SelectField
              label="Unloading charges"
              options={["Included", "Excluded"]}
              value={form.unloadingCharges}
              onChange={(value) => handleInputChange("unloadingCharges", value)}
            />

            {/* Multi point delivery, long lease, GPS tracking, transport insurance */}

            <SelectField
              label="Multi point delivery"
              options={["Yes", "No"]}
              value={form.multiPointDelivery}
              onChange={(value) =>
                handleInputChange("multiPointDelivery", value)
              }
            />

            <SelectField
              label="Long lease"
              options={["Yes", "No"]}
              value={form.longLease}
              onChange={(value) => handleInputChange("longLease", value)}
            />

            <SelectField
              label="GPS Tracking"
              options={["Yes", "No"]}
              value={form.gpsTracking}
              onChange={(value) => handleInputChange("gpsTracking", value)}
            />

            <SelectField
              label="Transport Insurance"
              options={["Yes", "No"]}
              value={form.transportInsurance}
              onChange={(value) =>
                handleInputChange("transportInsurance", value)
              }
            />

            {/* Vehicle photos */}

            <UserDetailsField label="Vehicle photo">
              <input
                type="file"
                onChange={handleImageChange}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>

            <UserDetailsField label="Vehicle photo">
              <input
                type="file"
                onChange={handlesecondImageChange}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>

            <div className="flex items-center justify-center pt-10">
              <button
                type="submit"
                className="rounded-full text-white px-4 py-2 bg-[#0B2A97]"
              >
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
