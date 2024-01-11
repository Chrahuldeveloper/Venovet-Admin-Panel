import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import MobileSidebar from "./MobileSidebar";
import { fav } from "../assets";
function Navbar() {
  const [toogle, settoogle] = useState(false);

  return (
    <>
      <nav className="bg-white">
        <div className="flex items-center justify-between px-4 py-8 md:px-12">
          <div className="flex items-center gap-8">
            <AiOutlineMenu
              size={25}
              color="gray"
              className="lg:hidden"
              onClick={() => {
                settoogle(true);
              }}
            />
            <Link
              to={"/admin-panel/home"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <h1 className="text-2xl font-bold md:text-2xl">Dashboard</h1>
            </Link>
          </div>

          <div className="flex space-x-4 cursor-pointer">
            <img className="w-10 h-10" src={fav} alt="" />
            <div>
              <p className="text-lg font-semibold"> superadmin</p>
              <p className="text-sm text-[#777777]">admin</p>
            </div>
          </div>
        </div>
      </nav>
      {toogle ? <MobileSidebar settoogles={settoogle} /> : null}
    </>
  );
}

export default Navbar;
