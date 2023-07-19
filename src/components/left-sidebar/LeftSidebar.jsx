import "./left-sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  HelpOutline,
  Work,
  Event,
} from "@mui/icons-material";

import { Users } from "../../dummyData";
import Friends from "../friends/Friends";

const LeftSidebar = () => {
  const filteredUsers = Users.filter((user) => user.id !== 1);
  return (
    <aside className="left-sidebar">
      <div className="sidebar-wapper">
        <ul className="sidebar-links">
          <li className="sidebar-link">
            <RssFeed className="sidebar-icons" />
            <span className="sidebar-link-text">Feeds</span>
          </li>

          <li className="sidebar-link">
            <Chat className="sidebar-icons" />
            <span className="sidebar-link-text">Chat</span>
          </li>

          <li className="sidebar-link">
            <PlayCircle className="sidebar-icons" />
            <span className="sidebar-link-text">Videos</span>
          </li>

          <li className="sidebar-link">
            <Group className="sidebar-icons" />
            <span className="sidebar-link-text">Groups</span>
          </li>

          <li className="sidebar-link">
            <Bookmark className="sidebar-icons" />
            <span className="sidebar-link-text">Feeds</span>
          </li>

          <li className="sidebar-link">
            <HelpOutline className="sidebar-icons" />
            <span className="sidebar-link-text">Questions</span>
          </li>

          <li className="sidebar-link">
            <Work className="sidebar-icons" />
            <span className="sidebar-link-text">Jobs</span>
          </li>

          <li className="sidebar-link">
            <Event className="sidebar-icons" />
            <span className="sidebar-link-text">Events</span>
          </li>
        </ul>
        <button className="sidebar-btn">Show More</button>
        <hr className="divider" />
        <ul className="friends-list">
          {filteredUsers.map((user) => (
            <Friends key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default LeftSidebar;
