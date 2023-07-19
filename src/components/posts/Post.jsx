import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

const Post = ({ data }) => {
  let user = Users.filter((u) => u.id === data.userId);

  let [like, setLike] = useState(data.like);
  let [isLike, setIsLike] = useState(false);

  const handlerLike = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <div className="post">
      <div className="post-wapper">
        <div className="post-top">
          <div className="post-top__left">
            <img className="profile-img" src={user[0].profilePicture} alt="" />
            <span className="user-name">{user[0].username}</span>
            <span className="post-time">{data.date}</span>
          </div>
          <div className="post-top__right">
            <MoreVert className="post-icon" />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{data.desc}</span>
          <img src={data.photo} className="post-img" alt="Post-1" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom__left">
            <img
              className="post-like-icon"
              src="/images/like.png"
              onClick={handlerLike}
              alt=""
            />
            <img
              className="post-like-icon"
              src="/images/heart.png"
              onClick={handlerLike}
              alt=""
            />
            <span className="post-like-counter">{like} people like it</span>
          </div>
          <div className="post-bottom__right">
            <span className="comment-text">{data.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
