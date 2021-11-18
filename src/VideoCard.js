import { Avatar } from "@material-ui/core";
import React from "react";
import "./VideoCard.css";
function VideoCard({ title, channelname, thumb, views, timestamp, userimage }) {
    return <div className="videocard">
        <img src={thumb} alt="." />
        <div className="videoinfo">
            <Avatar src={userimage} alt={channelname} className="avatar_img" />
            <div className="info">
                <h5 className="video_title">{title}</h5>
                <p className="video_channelname">{channelname}</p>
                <div className="video_views_time">
                    <p className="views">{views}</p>
                    <p className="timestamp">{timestamp}</p>
                </div>
            </div>
        </div>
    </div>;
}

export default VideoCard;
