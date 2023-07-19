import { Link } from "react-router-dom";
import "./navbar.css";
import { Chat, Person, Search, Notifications } from "@mui/icons-material";

const Navbar = ({ searchTerm, onSearch }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <strong className="logo">LinkHub</strong>
        </Link>
      </div>
      <div className="nav-center">
        <div className="search-bar">
          <Search />
          <input
            type="text"
            className="search"
            placeholder="Search for Friend, Post, Video"
            value={searchTerm}
            onChange={onSearch}
          />
        </div>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <Link to="/">
            <li className="nav-link">Home</li>
          </Link>
          <li className="nav-link">Timeline</li>
        </ul>
        <ul className="nav-links iconl-inks">
          <li className="icon-link">
            <Person />
            <span className="icon-link__badge">2</span>
          </li>
          <li className="icon-link">
            <Chat />
            <span className="icon-link__badge">4</span>
          </li>
          <li className="icon-link">
            <Notifications />
            <span className="icon-link__badge">6</span>
          </li>
        </ul>
        <Link to="/profile">
          <img
            src="/images/person/1.jpeg"
            className="profile-img"
            alt="profile-image"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
