import React, { useState } from "react";
import { CgDatabase } from "react-icons/cg";
import {
  BsDatabase,
  BsTelephoneForward,
  BsFillPersonFill,
  BsPencilSquare,
} from "react-icons/bs";
import { MdOutlineSocialDistance } from "react-icons/md";
import { RxButton } from "react-icons/rx";
import { AiOutlineShoppingCart, AiFillLock } from "react-icons/ai";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { AiOutlineDatabase } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function MobileSidebar({ settoogles }) {
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
    <div className=" lg:hidden fixed top-0 bottom-0 z-50  bg-black w-[100vw]  bg-opacity-60 ">
      <div className="py-7 bg-white w-[70vw] md:w-[40vw] h-full">
        <aside className="lg:hidden">
          <div className="flex w-full items-center justify-end pr-14">
            {/* <img src={fav} className="mx-auto mt-3 w-10" alt="img" /> */}
            <RxCross1
              size={26}
              color="gray"
              onClick={() => {
                settoogles(false);
              }}
            />
          </div>
          <div className="px-6 mt-4">
            <ul className=" pt-7">
              <Link to="/admin-panel/home">
                <div className="flex items-center gap-5 cursor-pointer hover:bg-[#e6e9f4] rounded-lg p-5">
                  <CgDatabase size="25" color="gray" />
                  <li className="text-sm font-semibold text-gray-500">
                    DashBoard
                  </li>
                </div>
              </Link>
              <div
                className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg"
                onClick={() => {
                  ToogleDropdown("dropdown1");
                }}
              >
                <BsDatabase size="25" color="gray" />
                <li className="text-sm font-semibold text-gray-500">
                  Who We Serve
                </li>
                <LiaGreaterThanSolid size="15" color="gray" />
              </div>
              <div
                className={`${
                  toogle.dropdown1 ? "block" : "hidden"
                } pl-8  my-6`}
              >
                <Link to={"/admin-panel/whoweserve"}>
                  <li className="text-gray-500 duration-300 ease-in-out cursor-pointer hover:text-blue-600">
                    Who We Serve
                  </li>
                </Link>
                <Link to="/admin-panel/why-us">
                  <li className="cursor-pointer hover:text-blue-600 ease-in-out my-3.5 duration-300 text-gray-500">
                    Why Us
                  </li>
                </Link>
                <Link to="/admin-panel/key-benefits">
                  <li className="text-gray-500 duration-300 ease-in-out cursor-pointer hover:text-blue-600">
                    Key Benifits
                  </li>
                </Link>
              </div>
              <Link to={"/admin-panel/whatwedo"}>
                <div className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg">
                  <AiOutlineDatabase size="25" color="gray" />
                  <li className="text-sm font-semibold text-gray-500">
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
                <li className="text-sm font-semibold text-gray-500">
                  Enquires/Contacts
                </li>
                <LiaGreaterThanSolid size="15" color="gray" />
              </div>
              <div
                className={`${
                  toogle.dropdown2 ? "block" : "hidden"
                } pl-8  my-6`}
              >
                <Link to={"/admin-panel/nature-of-enquiry"}>
                  <li className="cursor-pointer hover:text-blue-600 ease-in-out duration-300 text-gray-500 my-3.5">
                    Nature of Enquiry
                  </li>
                </Link>
                <Link to={"/admin-panel/enquiries"}>
                  <li className="cursor-pointer hover:text-blue-600 ease-in-out duration-300 text-gray-500 my-3.5">
                    Enquire
                  </li>
                </Link>
                <Link to="/admin-panel/career">
                  <li className="cursor-pointer hover:text-blue-600 ease-in-out duration-300 text-gray-500 my-3.5">
                    Career
                  </li>
                </Link>
                <Link to="/admin-panel/news-letters">
                  <li className="cursor-pointer hover:text-blue-600 ease-in-out duration-300 text-gray-500 my-3.5">
                    News Letter
                  </li>
                </Link>
              </div>
              <Link to={"/admin-panel/EditBlog"}>
                <div className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg">
                  <BsPencilSquare size="25" color="gray" />
                  <li className="text-sm font-semibold text-gray-500">Blogs</li>
                </div>
              </Link>

              <Link to={"/admin-panel/brochure"}>
                <div className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg">
                  <RxButton size="25" color="gray" />
                  <li className="text-sm font-semibold text-gray-500">
                    Brochure
                  </li>
                </div>
              </Link>
              <Link to={"/admin-panel/social-media"}>
                <div className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg">
                  <MdOutlineSocialDistance size="25" color="gray" />
                  <li className="text-sm font-semibold text-gray-500">
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
                <li className="text-sm font-semibold text-gray-500">Shop</li>
                <LiaGreaterThanSolid size="15" color="gray" />
              </div>
              <div
                className={`${
                  toogle.dropdown3 ? "block" : "hidden"
                } pl-8  my-6`}
              >
                <Link to={"/admin-panel/categories"}>
                  <li className="text-gray-500 cursor-pointer hover:text-blue-600 ease-in-out duration-300 my-3.5">
                    Categeory
                  </li>
                </Link>
                <Link to={"/admin-panel/products"}>
                  <li className="text-gray-500 cursor-pointer hover:text-blue-600 ease-in-out duration-300 my-3.5">
                    Products
                  </li>
                </Link>
                <Link to={"/admin-panel/orders"}>
                  <li className="text-gray-500 cursor-pointer hover:text-blue-600 ease-in-out duration-300 my-3.5">
                    Orders
                  </li>
                </Link>
              </div>
              <Link to="/admin-panel/profile">
                <div className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg">
                  <BsFillPersonFill size="25" color="gray" />
                  <li className="text-sm font-semibold text-gray-500">
                    Profile
                  </li>
                </div>
              </Link>
              <Link to="/admin-panel/">
                <div className="flex items-center gap-5 cursor-pointer  hover:bg-[#e6e9f4] p-5 rounded-lg">
                  <AiFillLock size="25" color="gray" />
                  <li className="text-sm font-semibold text-gray-500">
                    Logout
                  </li>
                </div>
              </Link>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
