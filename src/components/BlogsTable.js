import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import { RotatingLines } from "react-loader-spinner";

export default function BlogsTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    setIsSubmitting(true);
    const querySnapshot = await getDocs(collection(db, "BLOGS"));
    const enquiryData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setData(enquiryData);
    setIsSubmitting(false);
  };
  const Deletedoc = async (docid) => {
    setIsSubmitting(true);
    try {
      const docRef = doc(db, "BLOGS", docid);
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
      setIsSubmitting(false);
      navigate("/admin-panel/home");
    } catch (error) {
      setIsSubmitting(false);
      alert("Sorry! Couldn't delete document");
      console.error("Error deleting document:", error);
    }
  };
  return (
    <>
      <div className="bg-[#F9F9F9] p-8">
        {isSubmitting && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-75">
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
          <div className="flex flex-col justify-between pt-2 space-y-5 md:flex-row md:space-y-0 md:px-6">
            <h1 className="font-semibold md:text-xl">Blogs</h1>
            <Link to={"/admin-panel/addnewblog"}>
              {" "}
              <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
                Add New Blog
              </button>
            </Link>
          </div>
          <div className="w-full py-8 pt-14">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-y border-[#EEEEEE]">
                  <tr>
                    <th className="py-2 md:pl-10">S.No</th>
                    <th className="py-2 pl-5 md:pl-10">Title</th>
                    <th className="py-2 pl-10">Image</th>
                    <th className="py-2 pl-10">Edit</th>
                    <th className="py-2 pl-10">Delete</th>
                  </tr>
                </thead>
                {data?.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <tbody className="border-b border-[#EEEEEE]">
                        <tr>
                          <td className="py-8 pl-4 md:pl-14 ">{i + 1}</td>
                          <td className="py-8 pl-5 text-sm md:pl-10">
                            {item.Tittle1}
                          </td>
                          <td className="py-8 pl-10">
                            <img
                              src={item.Blogimage}
                              alt="img.png"
                              className="w-24 rounded md:rounded-lg"
                            />
                          </td>
                          <td
                            className="py-8 pl-10 cursor-pointer text-[#7e7e7e]"
                            onClick={() => {
                              navigate(`/admin-panel/EditBlog/edit/${item.id}`);
                            }}
                          >
                            Edit
                          </td>
                          <td
                            className="py-8 pl-10 cursor-pointer text-[#7e7e7e]"
                            onClick={() => {
                              alert(
                                ` Are you Sure you want to delete ${item.Tittle} `
                              );
                              Deletedoc(item.id);
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
    </>
  );
}
