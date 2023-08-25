import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

function Enquiries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "ENQUIRY"));
    const enquiryData = querySnapshot.docs.map((doc) => doc.data());
    setData(enquiryData);
  };
  return (
    <div className="bg-white my-8 rounded-xl lg:w-[50%]">
      <div>
        <h1 className="font-semibold text-xl px-5 py-5">Enquiries</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="text-left min-w-full">
          <thead className="bg-[#cee4ff] border-b border-[#1065cc]">
            <tr>
              <th className="px-6 py-4 text-[17px]">ID</th>
              <th className="px-6 py-4 text-[17px]">Name</th>
              <th className="px-6 py-4 text-[17px]">Email</th>
            </tr>
          </thead>
          <tbody className="border-b border-[#1065cc]">
            {data.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <tr>
                    <td className="w-[12rem] px-6 py-4 font-semibold text-lg">
                      {index}{" "}
                      <span className="text-sm text-[#333333] font-medium">
                        {/* 31-03-2022 12:00 am */}
                      </span>
                    </td>
                    <td className="w-[10rem] px-6 py-4 font-semibold text-lg">
                      {item.Name}{" "}
                      <span className="text-sm text-[#333333] font-medium">
                        {item.Mobile}
                      </span>
                    </td>
                    <td className="px-6 font-semibold text-lg">{item.Email}</td>
                  </tr>
                </React.Fragment>
              );
            })}

            {/* Additional rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Enquiries;
