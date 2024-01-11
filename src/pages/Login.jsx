import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import { logo } from "../assets";

export default function Login() {
  const [user, setuser] = useState({
    // Role: "",
    Name: "",
    Password: "",
  });
  const [data, setData] = useState();

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "ADMIN_LOGIN"));
    const enquiryData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setData(enquiryData);
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    if (
      // user.Role === "Superadmin" &&
      user.Name === data[0].UserName &&
      user.Password === data[0].Password
    ) {
      navigate("/admin-panel/home");
    } else {
      alert("Wrong Password. Try Again!!");
    }
  };

  return (
    <body className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-[#0b2a97] p-8 rounded-lg w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw]">
        <div className="text-center space-y-3.5">
          <img src={logo} className="mx-auto" alt="" />
          <h1 className="text-white md:text-lg">Sign in your account</h1>
        </div>
        <form className="mt-5 flex justify-center flex-col text-white gap-10">
          {/* <select
            name="adminrole"
            value={user.Role}
            onChange={(e) => {
              setuser({ ...user, Role: e.target.value });
            }}
            className="text-black rounded-full p-3 outline-none"
          >
            <option value=""></option>
            <option value="Superadmin">Super admin</option>
            <option value="Company">Company</option>
            <option value="User">User</option>
          </select> */}

          <div className="flex flex-col space-y-2">
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              id="Username"
              value={user.Name}
              onChange={(e) => {
                setuser({ ...user, Name: e.target.value });
              }}
              className="rounded-full p-3 text-black outline-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="Password"
              value={user.Password}
              onChange={(e) => {
                setuser({ ...user, Password: e.target.value });
              }}
              className="rounded-full p-3 text-black outline-none"
            />
          </div>
          <button
            onClick={Login}
            className="bg-white py-3 rounded-full text-[#0b2a97] font-semibold"
          >
            LOGIN
          </button>
        </form>
      </div>
    </body>
  );
}
