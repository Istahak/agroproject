import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import "./ChattingSideBar.css";
function ChattingSideBar() {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col sideBar">
      <Conversations />
    </div>
  );
}

export default ChattingSideBar;
