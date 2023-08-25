import React, { useState } from "react";
function UserDetailsField({ label, children }) {
  return (
    <div className="grid grid-cols-3">
      <label className="text-[#186ad2] text-lg">{label}</label>
      {children}
    </div>
  );
}
export default function InventoryAudits() {
  const [layout, setlayout] = useState({
    SubCat1: {
      Tittle: "",
      image: "",
      Para: "",
    },
    SubCat2: {
      Tittle: "",
      image: "",
      Para: "",
    },
    SubCat3: {
      Tittle: "",
      Para: "",
    },
    SubCat4: {
      Tittle: "",
      Para: "",
    },
    SubCat5: {
      Tittle: "",
      Para: "",
    },
    SubCat6: {
      Tittle: "",
      Para: "",
    },
    SubCat7: {
      Tittle: "",
      Para: "",
    },
    SubCat8: {
      Tittle: "",
      Para: "",
    },
    SubCat9: {
      Tittle: "",
      Para: "",
    },
    SubCat10: {
      Tittle: "",
      Para: "",
    },
    SubCat11: {
      Tittle: "",
      Para: "",
    },
  });

  return (
    <>
      <form className="pl-10 space-y-4 pt-7">
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
        <UserDetailsField label="SubCat1Para">
          <textarea
            type="text"
            value={layout.SubCat1.Para}
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
        <UserDetailsField label="SubCat2Para">
          <textarea
            type="text"
            value={layout.SubCat2.Para}
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
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



        
        <UserDetailsField label="SubCat5Tittle">
          <input
            type="text"
            value={layout.SubCat5.Tittle}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat5Para">
          <textarea
            type="text"
            value={layout.SubCat5.Para}
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>


        <UserDetailsField label="SubCat6Tittle">
          <input
            type="text"
            value={layout.SubCat6.Tittle}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat6Para">
          <textarea
            type="text"
            value={layout.SubCat6.Para}
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>









      
        <UserDetailsField label="SubCat7Tittle">
          <input
            type="text"
            value={layout.SubCat7.Tittle}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat7Para">
          <textarea
            type="text"
            value={layout.SubCat7.Para}
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>



        <UserDetailsField label="SubCat8Tittle">
          <input
            type="text"
            value={layout.SubCat8.Tittle}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat8Para">
          <textarea
            type="text"
            value={layout.SubCat8.Para}
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>


        <UserDetailsField label="SubCat9Tittle">
          <input
            type="text"
            value={layout.SubCat9.Tittle}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat9Para">
          <textarea
            type="text"
            value={layout.SubCat9.Para}
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>



        <UserDetailsField label="SubCat10Tittle">
          <input
            type="text"
            value={layout.SubCat10.Tittle}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat10Para">
          <textarea
            type="text"
            value={layout.SubCat10.Para}
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>


        <UserDetailsField label="SubCat11Tittle">
          <input
            type="text"
            value={layout.SubCat11.Tittle}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2] rounded-full"
          />
        </UserDetailsField>
        <UserDetailsField label="SubCat11Para">
          <textarea
            type="text"
            value={layout.SubCat11.Para}
            cols={8}
            rows={8}
            className="outline-none border w-30rem font-semibold text-sm border-[#eb5f0f] px-4 py-2 focus:border-[#186ad2]  rounded-xl"
          />
        </UserDetailsField>



       




        



        
      </form>
    </>
  );
}
