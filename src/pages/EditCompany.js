import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { db, storage } from "../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { RotatingLines } from "react-loader-spinner";

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

export default function EditCompany() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      logo: imageFile,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const imageRef = ref(storage, `images/${Image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, Image);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.error(error);
        },
        async () => {
          // download url for upload file
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const formData = {
            ...form,
            logo: downloadURL,
          };

          const docRef = doc(db, "COMPANIES", editid);
          await updateDoc(docRef, formData);
          setIsSubmitting(false);
          navigate("/admin-panel/companies");
        }
      );
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
    }
  };

  const [form, setForm] = useState({
    Username: "",
    Password: "",
    Users: "",
    Service: "",
    Business: "",
    PanNumberBuisness: "",
    GST: "",
    logo: "",
    Name: "",
    Gender: "",
    DOB: "",
    Aadhar: "",
    Pan: "",
    Mobile: "",
    secondaryMobile: "",
    Whatsapp: "",
    Email: "",
    Website: "",
    Address1: "",
    Address2: "",
    Locality: "",
    Country: "",
    State: "",
    City: "",
    Pincode: "",
  });

  const { editid } = useParams();

  const handleInputChange = (field, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  return (
    <div>
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
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="bg-[#F9F9F9] lg:ml-24">
        <Navbar />

        <div className="bg-white py-4 m-8 rounded-3xl">
          <div className="border-b font-semibold text-xl px-8 py-2">
            <h1>Update Company Details</h1>
          </div>
          <form className="p-8 space-y-4" onSubmit={handleSubmit}>
            <UserDetailsField label="Username" required>
              <input
                type="text"
                value={form.Username}
                onChange={(e) => handleInputChange("Username", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Password" required>
              <input
                type="password"
                value={form.Password}
                onChange={(e) => handleInputChange("Password", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="No of Users" required>
              <input
                type="number"
                value={form.Users}
                onChange={(e) => handleInputChange("Users", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Service type" required>
              <select
                value={form.Service}
                defaultValue={"Transporters"}
                onChange={(e) => handleInputChange("Service", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              >
                <option>Transporters</option>
                <option>Property Owners</option>
                <option>Others</option>
              </select>
            </UserDetailsField>
            <UserDetailsField label="Business name" required>
              <input
                value={form.Business}
                onChange={(e) => handleInputChange("Business", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Pan number (Business)">
              <input
                value={form.PanNumberBuisness}
                onChange={(e) =>
                  handleInputChange("PanNumberBuisness", e.target.value)
                }
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="GST Number">
              <input
                value={form.GST}
                onChange={(e) => handleInputChange("GST", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Company logo">
              <input
                type="file"
                onChange={handleImageChange}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Individual name" required>
              <input
                value={form.Name}
                onChange={(e) => handleInputChange("Name", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Gender" required>
              <select
                value={form.Gender}
                onChange={(e) => handleInputChange("Gender", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </UserDetailsField>
            <UserDetailsField label="Date of birth (As per Aadhar)" required>
              <input
                type="date"
                value={form.DOB}
                onChange={(e) => handleInputChange("DOB", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Aadhar card number" required>
              <input
                type="number"
                value={form.Aadhar}
                onChange={(e) => handleInputChange("Aadhar", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Pancard number (Individual)" required>
              <input
                value={form.Pan}
                onChange={(e) => handleInputChange("Pan", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Mobile no (Primary)" required>
              <input
                type="number"
                value={form.Mobile}
                onChange={(e) => handleInputChange("Mobile", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Secondary mobile no">
              <input
                type="number"
                value={form.secondaryMobile}
                onChange={(e) =>
                  handleInputChange("secondaryMobile", e.target.value)
                }
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Whatsapp number" required>
              <input
                type="number"
                value={form.Whatsapp}
                onChange={(e) => handleInputChange("Whatsapp", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Email">
              <input
                type="email"
                value={form.Email}
                onChange={(e) => handleInputChange("Email", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Website">
              <input
                value={form.Website}
                onChange={(e) => handleInputChange("Website", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Address line 1" required>
              <input
                value={form.Address1}
                onChange={(e) => handleInputChange("Address1", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Address line 2" required>
              <input
                value={form.Address2}
                onChange={(e) => handleInputChange("Address2", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Locality" required>
              <input
                value={form.Locality}
                onChange={(e) => handleInputChange("Locality", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Country" required>
              <input
                value={form.Country}
                onChange={(e) => handleInputChange("Country", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="State" required>
              <input
                value={form.State}
                onChange={(e) => handleInputChange("State", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="City" required>
              <input
                value={form.City}
                onChange={(e) => handleInputChange("City", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>
            <UserDetailsField label="Pincode" required>
              <input
                value={form.Pincode}
                onChange={(e) => handleInputChange("Pincode", e.target.value)}
                className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
              />
            </UserDetailsField>

            <div className="flex items-center justify-center pt-10">
              <button
                className="rounded-full text-white px-4 py-2 bg-[#0B2A97]"
                type="submit"
              >
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
