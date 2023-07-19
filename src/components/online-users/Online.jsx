import "./online.css";

const Online = ({ user }) => {
  return (
    <li className="friend">
      <div className="friend-container">
        <img
          className="profile-img"
          src={user.profilePicture}
          alt="Profie Image"
        />
        <span className="show-online"></span>
      </div>
      <span className="friend-name">{user.username}</span>
    </li>
  );
};

export default Online;
