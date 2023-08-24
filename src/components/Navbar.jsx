import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between px-4 md:px-12 py-8">
        <div>
          <Link
            to={"/home"}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <h1 className="font-bold text-2xl md:text-2xl">Dashboard</h1>
          </Link>
        </div>

        <div className="flex space-x-4 cursor-pointer">
          <img
            className="w-10 h-10"
            src="https://venovet.com/cw_admin/images/favicon.png"
            alt=""
          />
          <div>
            <p className="font-semibold text-lg"> superadmin</p>
            <p className="text-sm text-[#777777]">admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
