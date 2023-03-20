import React from "react";
import Chat from "../../components/chat";
import SideBar from "../../components/sideBar";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}
