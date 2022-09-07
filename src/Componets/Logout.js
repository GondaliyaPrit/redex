import React from "react";
import { logout } from "../fetures/userSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const handellogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      <h1>
        Welcome <span className="username"> Prit</span>
        <button
          type="submit"
          className="Submit-btn"
          onClick={(e) => handellogout(e)}
        >
          Logout
        </button>
      </h1>
    </div>
  );
};

export default Logout;
