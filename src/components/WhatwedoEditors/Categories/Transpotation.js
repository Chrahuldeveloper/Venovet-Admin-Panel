import React, { useState } from 'react'
function UserDetailsField({ label, children }) {
  return (
    <div className="grid grid-cols-3">
      <label className="text-[#186ad2] text-lg">{label}</label>
      {children}
    </div>
  );
}
export default function Transpotation() {

  
  const [layout, setlayout] = useState({
    Para: "",
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
      image: "",
      Para: "",
    },
    SubCat4: {
      Tittle: "",
      image: "",
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
  });


  return (
    <>
      
    </>
  )
}
