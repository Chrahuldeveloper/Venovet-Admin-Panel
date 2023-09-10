import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import { RotatingLines } from "react-loader-spinner";

export default function ProductsTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    setIsSubmitting(true);
    const querySnapshot = await getDocs(collection(db, "PRODUCTS"));
    const enquiryData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setData(enquiryData);
    setIsSubmitting(false);
  };

  const DeleteDoc = async (docId) => {
    try {
      const docRef = doc(db, "PRODUCTS", docId);
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
      navigate("/home");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div className="bg-[#F9F9F9] p-8">
      {isSubmitting && (
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
      <div className="p-6 bg-white rounded-xl">
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between md:px-6 pt-2">
          <h1 className="md:text-xl font-semibold">Products</h1>
          <Link to={"/addnewproduct"}>
            {" "}
            <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
              Add New Product
            </button>
          </Link>
        </div>
        <div className="w-full py-8 pt-14">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-y border-[#EEEEEE]">
                <tr>
                  <th className="py-2 md:pl-10">S.No</th>
                  <th className="py-2 md:pl-10">Category</th>
                  <th className="py-2 pl-5 md:pl-10">Product Name</th>
                  <th className="py-2 pl-5 md:pl-10">Price</th>
                  <th className="py-2 pl-10">Image</th>
                  <th className="py-2 pl-10">Edit</th>
                  <th className="py-2 pl-10">Delete</th>
                </tr>
              </thead>
              {data.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    <tbody className="border-b border-[#EEEEEE]">
                      <tr>
                        <td className="py-8 pl-4 md:pl-14 ">{i + 1}</td>
                        <td className="py-8 text-sm pl-5 md:pl-10">
                          {item.Category}
                        </td>
                        <td className="py-8 text-sm pl-5 md:pl-10">
                          {item.ProductName}
                        </td>
                        <td className="py-8 text-sm pl-5 md:pl-10">
                          {item.Dealprice}
                        </td>

                        <td className="py-8 pl-10">
                          <img
                            className="w-24 rounded md:rounded-lg"
                            src={item.Image1.image}
                            alt="img.png"
                          />
                        </td>
                        <td
                          onClick={() => {
                            navigate(`/editProduct/${item.ProductName}`);
                          }}
                          className="py-8 pl-10 cursor-pointer text-[#7e7e7e]"
                        >
                          Edit
                        </td>
                        <td
                          className="py-8 pl-10 cursor-pointer text-[#7e7e7e]"
                          onClick={() => {
                            DeleteDoc(item.id);
                          }}
                        >
                          Delete
                        </td>
                      </tr>
                    </tbody>
                  </React.Fragment>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
