import React, { useState } from "react";
import { CgDatabase, CgProfile } from "react-icons/cg";
import { TbDatabaseImport } from "react-icons/tb";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { PiLockBold } from "react-icons/pi";

function Sidebar() {
  const [dropdown, setdropdown] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
  });

  const ToogleDropdown = (dropdownname) => {
    setdropdown((pre) => ({
      ...pre,
      [dropdownname]: !pre[dropdownname],
    }));
  };

  return (
    <aside className="fixed overflow-scroll top-2 bottom-10">
      <div className="shadow-sm">
        <div className="px-5 mt-10">
          <img
            src="https://venovet.com/cw_admin/images/logo-full.png"
            className="md:w-[20vw] lg:w-[10vw] mx-auto"
            alt=""
          />
        </div>
        <div className="mt-16 ml-10 space-y-5 ">
          <div className="flex items-center gap-5 hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
            <CgDatabase size={32} />
            <h1 className="font-semibold">Dashboard</h1>
          </div>
          <div
            className="flex items-center gap-5 hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg"
            onClick={() => ToogleDropdown("dropdown1")}
          >
            <TbDatabaseImport size={32} />
            <h1 className="font-semibold">who we server</h1>
          </div>
          {dropdown.dropdown1 && (
            <ul className="text-center ">
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                who we server
              </li>
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                Why us
              </li>
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                Key Benifits
              </li>
            </ul>
          )}
          <div
            className="flex items-center gap-5 hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg"
            onClick={() => ToogleDropdown("dropdown2")}
          >
            <CgDatabase size={32} />
            <h1 className="font-semibold">Acess</h1>
          </div>
          {dropdown.dropdown2 && (
            <ul className="text-center ">
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                Companies
              </li>
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                Trucks
              </li>
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                Properties
              </li>
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                Others
              </li>
            </ul>
          )}
          <div
            onClick={() => ToogleDropdown("dropdown3")}
            className="flex items-center gap-5 hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg"
          >
            <MdOutlineWifiCalling3 size={32} />
            <h1 className="font-semibold">Call/Enquires</h1>
          </div>
          {dropdown.dropdown3 && (
            <ul className="text-center">
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                Enquires
              </li>
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                Careers
              </li>
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                News Letter
              </li>
            </ul>
          )}
          <div
            onClick={() => ToogleDropdown("dropdown4")}
            className="flex items-center gap-5 hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg"
          >
            <FaShoppingCart size={32} />
            <h1 className="font-semibold">Shop</h1>
          </div>
          {dropdown.dropdown4 && (
            <ul className="text-center ">
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                Categories
              </li>
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                Products
              </li>
              <li className="hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
                Orders
              </li>
            </ul>
          )}
          <div className="flex items-center gap-5 hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
            <CgProfile size={32} />
            <h1 className="font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-5 hover:bg-[#e6e9f4] text-gray-500 hover:text-[#0b2a97] px-8 py-3 cursor-pointer rounded-lg">
            <PiLockBold size={32} />
            <h1 className="font-semibold">Logout</h1>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
