import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { Link } from "react-router-dom";

export default function CareerTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "CARIEER"));
    const CarrierData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(CarrierData);
  };

  const deleteDoc = async (id) => {
    try {
      await deleteDoc(doc(db, "CAREER", id));
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-[#F9F9F9] p-8">
        <div className="bg-white rounded-xl p-6">
          <div className="flex justify-between px-6 pt-2">
            <h1 className="text-xl font-semibold">Careers</h1>
          </div>
          <div className="py-8 pt-14 w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="md:pl-3 py-2">S.No</th>
                    <th className="pl-3 py-2">ID</th>
                    <th className="pl-3 py-2">Name</th>
                    <th className="pl-3 py-2">Email</th>
                    <th className="pl-3 py-2">Mobile</th>
                    <th className="pl-3 py-2">Resume</th>
                    <th className="pl-3 py-2">Skills</th>
                    <th className="pl-3 py-2">Date</th>
                    <th className="pl-3 py-2">Delete</th>
                  </tr>
                </thead>
                <tbody className="border-b border-[#EEEEEE] text-sm">
                  <tr>
                    {data.map((_, index) => {
                      return (
                        <>
                          <td className="md:pl-10 py-8 ">{index + 1}</td>
                          <td className="pl-3 py-8 text-sm">{_.item}</td>
                          <td className="pl-3 py-8 text-sm">{_.Name}</td>
                          <td className="pl-3 py-8">{_.Email}</td>
                          <td className="pl-3 py-8">{_.Mobile}</td>
                          <td className="pl-3 py-8 cursor-pointer">
                            <Link to={`${_.Resume}`}>Resume</Link>
                          </td>
                          <td className="pl-3 py-8">{_.Skills}</td>
                          <td className="pl-3 py-8">{_.Date}</td>
                          <td
                            className="pl-3 py-8 text-[#7e7e7e]"
                            onClick={() => {
                              deleteDoc(_.id);
                            }}
                          >
                            Delete
                          </td>
                        </>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
