import { useState } from "react";
import "./subRedditItem.css";

const SubRedditItem = ({subReddit, onSelect}) => {
    const title = subReddit.title || "No Title";
    const icon = subReddit.icon_img || "https://www.redditstatic.com/icon.png";

    return (
        <ul className="subRedditList">
          <li onClick={() => onSelect(subReddit.display_name)} className="subReddit">
            <img src={icon} alt="" width={24} height={24} />
            <span>{title}</span>
          </li>
        </ul>
    )
}

export default SubRedditItem;