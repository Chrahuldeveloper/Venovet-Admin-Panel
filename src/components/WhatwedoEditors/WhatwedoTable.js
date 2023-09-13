import React from "react";
import { useNavigate } from "react-router-dom";

export default function WhatwedoTable() {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      Tittle: "Warehouse Management (2PL & 3PL)",
      image: "https://venovet.com/assets/images/pagetop-bg1.jpg",
    },
    {
      id: 12,
      Tittle: "Transportation Fleet",
      image: "https://venovet.com/assets/images/pagetop-bg1.jpg",
    },
    {
      id: 11,
      Tittle: "Value Added Services",
      image: "https://venovet.com/assets/images/pagetop-bg1.jpg",
    },
    {
      id: 31,
      Tittle: "SCM Automation",
      image: "https://venovet.com/assets/images/pagetop-bg1.jpg",
    },
    {
      id: 122,
      Tittle: "Inventory Audits & Analytics",
      image: "https://venovet.com/assets/images/pagetop-bg1.jpg",
    },
    {
      id: 111,
      Tittle: "Logistics Projects Designing",
      image: "https://venovet.com/assets/images/pagetop-bg1.jpg",
    },
    {
      id: 133,
      Tittle: "Internet Supply Chain",
      image: "https://venovet.com/assets/images/pagetop-bg1.jpg",
    },
    {
      id: 1241,
      Tittle: "ERP Solutions",
      image: "https://venovet.com/assets/images/pagetop-bg1.jpg",
    },
    {
      id: 1345,
      Tittle: "Industrial Real States",
      image: "https://venovet.com/assets/images/pagetop-bg1.jpg",
    },
    {
      id: 154,
      Tittle: "Facility Management",
      image: "https://venovet.com/assets/images/pagetop-bg1.jpg",
    },
    {
      id: 1653,
      Tittle: "Industrial Security Services",
      image: "https://venovet.com/assets/images/pagetop-bg1.jpg",
    },
  ];

  return (
    <>
      <div className="bg-[#F9F9F9] p-8">
        <div className="p-6 bg-white rounded-xl">
          <div className="flex flex-col justify-between pt-2 space-y-5 md:flex-row md:space-y-0 md:px-6">
            <h1 className="font-semibold md:text-xl">What we do</h1>
            {/* <Link to={"/addnewserve"}>
              {" "}
              <button className="bg-[#0B2A97] px-5 py-3 text-white rounded-3xl text-sm font-semibold">
                Add New 
              </button>
            </Link> */}
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
                    {/* <th className="py-2 pl-10">Delete</th> */}
                  </tr>
                </thead>
                {data.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <tbody className="border-b border-[#EEEEEE]">
                        <tr>
                          <td className="py-8 pl-4 md:pl-14 ">{i + 1}</td>
                          <td className="py-8 pl-5 text-sm md:pl-10">
                            {item.Tittle}
                          </td>
                          <td className="py-8 pl-10">
                            <img
                              src={item.image}
                              alt="img.png"
                              className="w-14 h-14"
                            />
                          </td>
                          <td
                            className="py-8 pl-10 cursor-pointer text-[#7e7e7e]"
                            onClick={() => {
                              navigate(`/edit/whatwedo/${item.Tittle}`);
                            }}
                          >
                            Edit
                          </td>
                          {/* <td
                            className="py-8 pl-10 cursor-pointer text-[#7e7e7e]"
                            onClick={() => {
                              alert(
                                ` Are you Sure you want to delete ${item.Tittle} `
                              );
                            }}
                            // handleDelete(item.id)
                          >
                            Delete
                          </td> */}
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
