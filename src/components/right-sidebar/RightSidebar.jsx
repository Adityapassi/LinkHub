import "./right-sidebar.css";
import { Users } from "../../dummyData";
import Online from "../online-users/Online";
import { Fragment } from "react";

const RightSidebar = ({ profile }) => {
  const filteredUsers = Users.filter((user) => user.id !== 1);
  const HomeRightbar = () => {
    return (
      <Fragment>
        <div className="birthday-container">
          <img className="birthday-img" src="images/gift.png" alt="Gift" />
          <span className="birthdat-text">
            <b>Aditya</b> and <b>5 other friends</b> have a birthday today
          </span>
        </div>
        <div className="rigth-sidebar-ad">
          <img className="ad-img" src="images/ad.png" alt="Ad" />
        </div>
        <h4 className="rigth-bar-title">Online Friends</h4>
        <ul className="firend-list">
          {filteredUsers.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </Fragment>
    );
  };

  const ProfileRightbar = () => {
    return (
      <Fragment>
        <h2 className="rightbar-title">User information</h2>
        <ul className="user-info">
          <li className="user-info-item">
            <span className="user-info-key">City: </span>
            <span className="user-info-value">New York </span>
          </li>

          <li className="user-info-item">
            <span className="user-info-key">From: </span>
            <span className="user-info-value">Madrid </span>
          </li>

          <li className="user-info-item">
            <span className="user-info-key">Relationship: </span>
            <span className="user-info-value">Single </span>
          </li>
        </ul>
        <h2 className="rightbar-title">Mutual Friends</h2>
        <ul className="mutual-friends">
          <li className="mutual-friend">
            <img
              className="mutual__friend-img"
              src="images/person/2.jpeg"
              alt="Friend"
            />
            <strong className="mutual__friend-name">Jane Doe</strong>
          </li>
          <li className="mutual-friend">
            <img
              className="mutual__friend-img"
              src="images/person/3.jpeg"
              alt="Friend"
            />
            <strong className="mutual__friend-name">Jane Doe</strong>
          </li>
          <li className="mutual-friend">
            <img
              className="mutual__friend-img"
              src="images/person/4.jpeg"
              alt="Friend"
            />
            <strong className="mutual__friend-name">Jane Doe</strong>
          </li>
          <li className="mutual-friend">
            <img
              className="mutual__friend-img"
              src="images/person/4.jpeg"
              alt="Friend"
            />
            <strong className="mutual__friend-name">Jane Doe</strong>
          </li>
          <li className="mutual-friend">
            <img
              className="mutual__friend-img"
              src="images/person/5.jpeg"
              alt="Friend"
            />
            <strong className="mutual__friend-name">Jane Doe</strong>
          </li>
          <li className="mutual-friend">
            <img
              className="mutual__friend-img"
              src="images/person/6.jpeg"
              alt="Friend"
            />
            <strong className="mutual__friend-name">Jane Doe</strong>
          </li>
        </ul>
      </Fragment>
    );
  };

  return (
    <aside className="right-sidebar">
      <div className="right-sidebar-wapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </aside>
  );
};

export default RightSidebar;
