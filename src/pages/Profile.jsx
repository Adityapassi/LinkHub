import Navbar from "../components/navbar/Navbar";
import LeftSidebar from "../components/left-sidebar/LeftSidebar";
import RightSidebar from "../components/right-sidebar/RightSidebar";
import Feeds from "../components/feeds/Feeds";
import { useEffect, useState } from "react";
import "../../public/style.css";

const Profile = () => {
  useEffect(() => {
    document.title = "LinkHub - Profile";
  });

  let [searchTerm, setSearchTerm] = useState("");
  const handlerSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <Navbar searchTerm={searchTerm} onSearch={handlerSearch}></Navbar>
      <div className="container">
        <LeftSidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profie-img-container">
              <img className="cover-img" src="images/post/3.jpeg" alt="" />
              <img
                className="profile-image"
                src="images/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="profile-info">
              <h2 className="profile-name">Jane Doe</h2>
              <p className="profiel-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                beatae labore nemo error, commodi eaque vel quasi enim, quia
                quos officiis mollitia molestiae cum pariatur perspiciatis!
                Explicabo inventore temporibus amet!
              </p>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feeds searchTerm={searchTerm} />
            <RightSidebar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
