import React, { useEffect, useState } from "react";
import { FaUsers, FaRupeeSign } from "react-icons/fa";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { RotatingLines } from "react-loader-spinner";

function DbCards() {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const data = [
    {
      img: <FaUsers size={22} />,
      Name: "Enquiries",
      Qty: items.length,
    },
    {
      img: <FaRupeeSign size={22} />,
      Name: "Orders",
      Qty: orders.length,
    },
  ];

  // enquiries data
  const fetchData = async () => {
    setIsSubmitting(true);

    const querySnapshot = await getDocs(collection(db, "ENQUIRY"));
    const enquiryData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setItems(enquiryData);
    setIsSubmitting(false);
  };

  // orders data
  const fetchOrdersData = async () => {
    const querySnapshot = await getDocs(collection(db, "ORDERS"));
    const enquiryData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setOrders(enquiryData);
  };

  useEffect(() => {
    fetchData();
    fetchOrdersData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="grid lg:grid-cols-2 gap-4 md:gap-y-8">
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
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${index === 0 && "hover:bg-[#2bc155]"} ${
              index === 1 && "hover:bg-[#a02cfa]"
            } ${index === 2 && "hover:bg-[#f94687]"} ${
              index === 3 && "hover:bg-[#ffbe1a]"
            } transition ease-in-out duration-500 flex space-x-8 bg-white items-center shadow-lg cursor-pointer shadow-slate-100 lg:max-w-2xl p-4 md:p-8 rounded-3xl hover:text-white font-semibold`}
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
            <div className="space-y-2">
              <p className="font-semibold  ">{item.Name}</p>
              <p className="font-bold text-3xl">{item.Qty}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DbCards;
