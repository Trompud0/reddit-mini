import { useState } from "react";

const SubRedditItem = ({subReddit, onSelect}) => {
    const title = subReddit.title || "No Title";
    const icon = subReddit.icon_img || "https://www.redditstatic.com/icon.png";

    return (
        <div onClick={() => onSelect(subReddit.display_name)}>
          <img src={icon} alt="" width={24} height={24} />
          <span>{title}</span>
        </div>
    )
}

export default SubRedditItem;