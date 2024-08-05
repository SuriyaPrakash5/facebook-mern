import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleMoveToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <form className="registerBox" onSubmit={handleClick}>
            <input
              className="loginInput"
              ref={username}
              placeholder="Username"
              required
            />
            <input
              className="loginInput"
              ref={email}
              placeholder="Email"
              required
              type="email"
            />
            <input
              className="loginInput"
              ref={password}
              placeholder="Password"
              required
              type="password"
              minLength="6"
            />
            <input
              className="loginInput"
              ref={passwordAgain}
              placeholder="Password Again"
              required
              type="password"
              minLength="6"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegister" onClick={handleMoveToLogin}>
              Log into Your Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
