import React, { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              className="loginInput"
              type="email"
              required
              placeholder="Email"
              ref={email}
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Password"
              ref={password}
              required
              minLength="6"
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="22px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegister">
              {isFetching ? (
                <CircularProgress color="inherit" size="22px" />
              ) : (
                "Create a new account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
