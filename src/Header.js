import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
function Header() {
  const collapes = () => {
    var sidebar = document.getElementsByClassName("sidebar");
    sidebar[0].classList.toggle("sidebar_collapes");
    var title = document.querySelectorAll(".title");
    title.forEach((element) => {
      element.classList.toggle("title_collapes");
    });
    var raw = document.querySelectorAll(".raw");
    raw.forEach((element) => {
      element.classList.toggle("raw_collapes");
    });
    var category = document.getElementsByClassName("category");
    category[0].classList.toggle("category_collapes");
  };
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon
          onClick={function () {
            collapes();
          }}
        />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png"
          alt="YouTube"
        />
      </div>
      <div className="header_mid">
        <input type="text" placeholder="Search" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_right">
        <VideoCallIcon className="header_icons" />
        <AppsIcon className="header_icons" />
        <NotificationIcon className="header_icons" />
        <Avatar src="" alt="login" className="header_icons avatar" />
      </div>
    </div>
  );
}

export default Header;
