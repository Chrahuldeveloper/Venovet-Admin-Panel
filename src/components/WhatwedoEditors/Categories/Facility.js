import React, { useState } from "react";
function UserDetailsField({ label, children }) {
  return (
    <div className="grid grid-cols-3">
      <label className="text-[#186ad2] text-lg">{label}</label>
      {children}
    </div>
  );
}
export default function Facility() {
  const [layout, setlayout] = useState({
    Tittle1: "",
    Para1: "",
    SubCat1: {
      image: "",
      Tittle: "",
      Para1: "",
      Para2: "",
      Para3: "",
      Para4: "",
    },
    SubCat2: {
      image: "",
      Tittle: "",
      Para1: "",
      Para2: "",
    },
    SubCat3: {
      image: "",
      Tittle: "",
      Para: "",
    },
    SubCat4: {
      image: "",
      Tittle: "",
      Para: "",
    },
    SubCat5: {
      image:"",
      Tittle1: "",
      Para1: "",
      Tittle2: "",
      Para2: "",
      Tittle3: "",
      Para3: "",
      Tittle4: "",
      Para4: "",
      Tittle5: "",
      Para5: "",
      Tittle6: "",
      Para6: "",
    },
  });

  return (
    <>
      <UserDetailsField label="Tittle1">
        <input
          type="text"
          value={layout.Tittle1}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
        />
      </UserDetailsField>
      <UserDetailsField label="Para1">
        <textarea
          type="text"
          value={layout.Para1}
          cols={8}
          rows={8}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat1image">
        <input
          type="file"
          value={layout.SubCat1.image}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat1Tittle">
        <input
          type="text"
          value={layout.SubCat1.Tittle}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat1Para1">
        <textarea
          type="text"
          value={layout.SubCat1.Para1}
          cols={8}
          rows={8}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat1Para2">
        <textarea
          type="text"
          value={layout.SubCat1.Para2}
          cols={8}
          rows={8}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat1Para3">
        <textarea
          type="text"
          value={layout.SubCat1.Para3}
          cols={8}
          rows={8}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat1Para4">
        <textarea
          type="text"
          value={layout.SubCat1.Para4}
          cols={8}
          rows={8}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat2image">
        <input
          type="file"
          value={layout.SubCat2.image}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat2Tittle">
        <input
          type="text"
          value={layout.SubCat2.Tittle}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat1Para4">
        <textarea
          type="text"
          value={layout.SubCat2.Para1}
          cols={8}
          rows={8}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat1Para4">
        <textarea
          type="text"
          value={layout.SubCat2.Para1}
          cols={8}
          rows={8}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat3image">
        <input
          type="file"
          value={layout.SubCat3.image}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat3Tittle">
        <input
          type="text"
          value={layout.SubCat3.Tittle}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat3Para">
        <textarea
          type="text"
          value={layout.SubCat3.Para}
          cols={8}
          rows={8}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat4image">
        <input
          type="file"
          value={layout.SubCat4.image}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat4Tittle">
        <input
          type="text"
          value={layout.SubCat4.Tittle}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
        />
      </UserDetailsField>
      <UserDetailsField label="SubCat4Para">
        <textarea
          type="text"
          value={layout.SubCat4.Para}
          cols={8}
          rows={8}
          className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
        />
      </UserDetailsField>
    </>
  );
}
