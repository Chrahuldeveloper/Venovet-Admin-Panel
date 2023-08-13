import React from "react";
import { FaUsers, FaTruck, FaHome, FaRupeeSign } from "react-icons/fa";

const data = [
  {
    img: <FaUsers size={22} />,
    Name: "Vendors",
    Qty: "3",
  },
  {
    img: <FaTruck size={22} />,
    Name: "Vendors",
    Qty: "3",
  },
  {
    img: <FaHome size={22} />,
    Name: "Vendors",
    Qty: "3",
  },
  {
    img: <FaRupeeSign size={22} />,
    Name: "Vendors",
    Qty: "3",
  },
];

function DbCards() {
  return (
    <div className="grid lg:grid-cols-2 gap-4 md:gap-y-8">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${index === 0 && "hover:bg-[#297F00]"} ${
              index === 1 && "hover:bg-[#6f42c1]"
            } ${index === 2 && "hover:bg-[#e83e8c]"} ${
              index === 3 && "hover:bg-[#ff9900]"
            } transition ease-in-out duration-500 flex space-x-8 bg-white items-center  lg:w-[35rem] p-4 md:p-8 rounded-3xl`}
          >
            <div
              className={` ${index === 0 && "bg-[#e3f9e9]"} ${
                index === 1 && "bg-[#f1dffe]"
              } ${index === 2 && "bg-[#fff3f7]"} ${
                index === 3 && "bg-[#fff5dd]"
              } "} rounded-full p-7 `}
            >
              {item.img}
            </div>
            <div className="space-y-2  ">
              <p className="font-semibold">{item.Name}</p>
              <p className="font-bold text-3xl">{item.Qty}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DbCards;
