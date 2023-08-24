import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgDatabase, CgProfile } from "react-icons/cg";
import { TbDatabaseImport } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { PiLockBold } from "react-icons/pi";
// Sidebar data
const sidebarData = [
  {
    Icon: CgDatabase,
    dropdownKey: "db-icon",
    to: "/home",
  },
  {
    Icon: CgDatabase,
    dropdownKey: "dropdown1",
    links: [
      { to: "/whoweserve", label: "Who We Serve" },
      { to: "/why-us", label: "Why Us" },
      { to: "/key-benefits", label: "Key Benefits" },
    ],
  },
  {
    Icon: TbDatabaseImport,
    dropdownKey: "dropdown2",
    links: [
      { to: "/companies", label: "Companies" },
      { to: "/trucks", label: "Trucks" },
      { to: "/properties", label: "Properties" },
    ],
  },
  {
    Icon: IoIosCall,
    dropdownKey: "dropdown3",
    links: [
      { to: "/enquiries", label: "Enquiries" },
      { to: "/career", label: "Careers" },
      { to: "/news-letters", label: "News Letter" },
    ],
  },
  {
    Icon: FaShoppingCart,
    dropdownKey: "dropdown4",
    links: [
      { to: "/categories", label: "Categories" },
      { to: "/products", label: "Products" },
      { to: "/orders", label: "Orders" },
    ],
  },
  // Icons without dropdown links
  {
    Icon: CgProfile,
    dropdownKey: "db-icon1",
    to: "/profile", // Example icon without dropdown
  },
  {
    Icon: PiLockBold,
    dropdownKey: "db-icon2",
    // Example icon without dropdown
  },
];

function Sidebar() {
  const location = useLocation();

  const [dropdown, setDropdown] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    // Add more dropdown states as needed
  });

  const toggleDropdown = (dropdownName) => {
    setDropdown((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  const DropdownContent = ({ links }) => (
    <ul className="mt-2 right-full bg-white shadow rounded-lg py-2  z-10">
      {links.map((link) => (
        <Link to={link.to} key={link.to}>
          <li className="px-4 py-2  hover:text-[#0B2A97] cursor-pointer text-sm">
            {link.label}
          </li>
        </Link>
      ))}
    </ul>
  );

  const isRouteActive = (route) => {
    return location.pathname === route;
  };

  return (
    <aside className="fixed overflow-scroll top-2 bottom-10 w-64 h-screen">
      <div className="mt-32 space-y-4 pl-4">
        {sidebarData.map(({ Icon, to, dropdownKey, links }, index) => (
          <div className="flex relative" key={dropdownKey}>
            <Link
              to={to}
              className={`flex items-center gap-5 hover:bg-[#0B2A97] w-12 h-10 justify-center hover:text-[#fff] text-gray-500 cursor-pointer rounded-lg ${
                isRouteActive(to) ||
                (links && links.some((link) => isRouteActive(link.to)))
                  ? "bg-[#0B2A97] text-[#fff]"
                  : ""
              }`}
              onClick={() => {
                if (links) {
                  toggleDropdown(dropdownKey);
                }
              }}
            >
              <Icon size={28} />
            </Link>
            {links && dropdown[dropdownKey] && (
              <div
              // className="absolute left-16 w-[100%]"
              // onMouseLeave={() => toggleDropdown(dropdownKey)}
              >
                <DropdownContent links={links} style={{ zIndex: 2 }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
