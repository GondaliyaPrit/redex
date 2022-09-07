import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../fetures/userSlice";

const Login = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        Name: Name,
        Email: Email,
        password: password,
        loggedIn: true,
      })
    );
  };
  return (
    <>
      <div className="login" onSubmit={(e) => handlesubmit(e)}>
        <form className="Login_from">
          <h1> Login Here !</h1>
          <input
            type="name"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="Email"
            placeholder="Name"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit" className="Submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
