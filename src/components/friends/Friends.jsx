import "./friends.css";

const Friends = ({ user }) => {
  return (
    <li className="friend-list">
      <img className="friend-img" src={user.profilePicture} alt="image" />
      <span className="friend-name">{user.username}</span>
    </li>
  );
};

export default Friends;
