import React from "react";
import Topbar from "../../components/TopBar/Topbar";
import Sidebar from "../../components/SideBar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/RightBar/Rightbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
