import React from "react";
import Raw from "./Raw";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibarayIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlineIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlineIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExploreIcon from "@material-ui/icons/Explore";

function SideBar() {
  return (
    <div className="sidebar">
      <Raw selected={true} Icon={HomeIcon} title="Home" />
      <Raw Icon={ExploreIcon} title="Explore" />
      <Raw Icon={SubscriptionIcon} title="Subcription" />
      <hr />

      <Raw Icon={VideoLibarayIcon} title="Library" />
      <Raw Icon={HistoryIcon} title="History" />
      <Raw Icon={OndemandVideoIcon} title="Your Videos" />
      <Raw Icon={WatchLaterIcon} title="Watch Later" />
      <Raw Icon={ThumbUpAltOutlineIcon} title="Liked Videos" />
      <Raw Icon={ExpandMoreOutlineIcon} title=" Show More" />

      <hr />
    </div>
  );
}

export default SideBar;
