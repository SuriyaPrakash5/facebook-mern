import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "6351181375f5b2ba219cabf1",
    username: "selvam",
    email: "selvam@gmail.com",
    password: "$2b$10$uDuVjDVrJYmkdDwO6nOL/e2hPxSIpkMbdevccsN/QVyujyi/SRLmy",
    profilePicture: "person/2.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: true,
    desc: "Hello Guys!",
    city: "Trich1y",
    from: "Tamil Nadu",
    relationship: 1,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
