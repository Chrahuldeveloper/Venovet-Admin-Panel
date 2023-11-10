import React, { useState } from "react";
import { CgDatabase } from "react-icons/cg";
import {
  BsDatabase,
  BsFillPersonFill,
  BsTelephoneForward,
} from "react-icons/bs";
import { MdOutlineSocialDistance } from "react-icons/md";
import { AiOutlineShoppingCart, AiFillLock } from "react-icons/ai";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logo } from "../assets";
export default function Sidebar() {
  const [toogle, settoogle] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
  });

  const ToogleDropdown = (dropdown) => {
    settoogle((pre) => ({
      ...pre,
      [dropdown]: !pre[dropdown],
    }));
  };

  return (
    <aside className="hidden lg:block ">
      <img src={logo} className="mx-auto mt-10 " alt="" />
      <div className="mt-5 ">
        <ul className="px-5 pt-8">
          <Link to="/home">
            <div className="flex items-center gap-5 cursor-pointer hover:bg-[#e6e9f4] rounded-lg p-5">
              <CgDatabase size="25" color="gray" />
              <li className="text-lg font-semibold text-gray-500">DashBoard</li>
            </div>
          </Link>
          <div
            className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg"
            onClick={() => {
              ToogleDropdown("dropdown1");
            }}
          >
            <BsDatabase size="25" color="gray" />
            <li className="text-lg font-semibold text-gray-500">
              Who We Serve
            </li>
            <LiaGreaterThanSolid size="15" color="gray" />
          </div>
          <div
            className={`${toogle.dropdown1 ? "block" : "hidden"} pl-8  my-6`}
          >
            <Link to={"/whoweserve"}>
              <li className="text-gray-500 duration-300 ease-in-out cursor-pointer hover:text-blue-600">
                Who We Serve
              </li>
            </Link>
            <Link to="/why-us">
              <li className="cursor-pointer hover:text-blue-600 ease-in-out my-3.5 duration-300 text-gray-500">
                Why Us
              </li>
            </Link>
            <Link to="/key-benefits">
              <li className="text-gray-500 duration-300 ease-in-out cursor-pointer hover:text-blue-600">
                Key Benifits
              </li>
            </Link>
          </div>

          <Link to={"/whatwedo"}>
            <div className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg">
              <AiOutlineDatabase size="25" color="gray" />
              <li className="text-lg font-semibold text-gray-500">
                what we do
              </li>
              <LiaGreaterThanSolid size="15" color="gray" />
            </div>
          </Link>

          <div
            className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg"
            onClick={() => {
              ToogleDropdown("dropdown2");
            }}
          >
            <BsTelephoneForward size="25" color="gray" />
            <li className="text-lg font-semibold text-gray-500">
              Enquires/Contacts
            </li>
            <LiaGreaterThanSolid size="15" color="gray" />
          </div>

          <div
            className={`${toogle.dropdown2 ? "block" : "hidden"} pl-8  my-6`}
          >
            <Link to={"/nature-of-enquiry"}>
              <li className="cursor-pointer hover:text-blue-600 ease-in-out duration-300 text-gray-500 my-3.5">
                Nature of Enquiry
              </li>
            </Link>
            <Link to={"/enquiries"}>
              <li className="cursor-pointer hover:text-blue-600 ease-in-out duration-300 text-gray-500 my-3.5">
                Enquire
              </li>
            </Link>
            <Link to="/career">
              <li className="cursor-pointer hover:text-blue-600 ease-in-out duration-300 text-gray-500 my-3.5">
                Career
              </li>
            </Link>
            <Link to="/news-letters">
              <li className="cursor-pointer hover:text-blue-600 ease-in-out duration-300 text-gray-500 my-3.5">
                News Letter
              </li>
            </Link>
          </div>
          <Link to={"/EditBlog"}>
            <div className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg">
              <BsPencilSquare size="25" color="gray" />
              <li className="text-lg font-semibold text-gray-500">Blogs</li>
            </div>
          </Link>

          {/* <Link to={"/brochure"}>
            <div className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg">
              <RxButton size="25" color="gray" />
              <li className="text-lg font-semibold text-gray-500">Brochure</li>
            </div>
          </Link> */}
          <Link to={"/social-media"}>
            <div className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg">
              <MdOutlineSocialDistance size="25" color="gray" />
              <li className="text-lg font-semibold text-gray-500">
                SocialMedia-Icons
              </li>
            </div>
          </Link>

          <div
            className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg"
            onClick={() => {
              ToogleDropdown("dropdown3");
            }}
          >
            <AiOutlineShoppingCart size="25" color="gray" />
            <li className="text-lg font-semibold text-gray-500">Shop</li>
            <LiaGreaterThanSolid size="15" color="gray" />
          </div>
          <div
            className={`${toogle.dropdown3 ? "block" : "hidden"} pl-8  my-6`}
          >
            <Link to={"/categories"}>
              <li className="text-gray-500 cursor-pointer hover:text-blue-600 ease-in-out duration-300 my-3.5">
                Categeory
              </li>
            </Link>
            <Link to={"/products"}>
              <li className="text-gray-500 cursor-pointer hover:text-blue-600 ease-in-out duration-300 my-3.5">
                Products
              </li>
            </Link>
            <Link to={"/orders"}>
              <li className="text-gray-500 cursor-pointer hover:text-blue-600 ease-in-out duration-300 my-3.5">
                Orders
              </li>
            </Link>
          </div>
          <Link to="/profile">
            <div className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg">
              <BsFillPersonFill size="25" color="gray" />
              <li className="text-lg font-semibold text-gray-500">Profile</li>
            </div>
          </Link>
          <Link to="/">
            <div className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg">
              <AiFillLock size="25" color="gray" />
              <li className="text-lg font-semibold text-gray-500">Logout</li>
            </div>
          </Link>
        </ul>
      </div>
    </aside>
  );
}
