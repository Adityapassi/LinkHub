import "./share.css";
import { PermMedia, LocalOffer, LocationOn, Mood } from "@mui/icons-material";

const Share = () => {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src="/images/person/1.jpeg"
            className="share-img"
            alt="Profile Image"
          />
          <input
            type="text"
            className="share-input"
            placeholder="What's in your mind ?"
          />
        </div>
        <hr className="devider" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <PermMedia htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Photo or Video</span>
            </div>
            <div className="share-option">
              <LocalOffer htmlColor="blue" className="share-icon" />
              <span className="share-option-text">Add Tags</span>
            </div>
            <div className="share-option">
              <LocationOn htmlColor="green" className="share-icon" />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <Mood htmlColor="goldenrod" className="share-icon" />
              <span className="share-option-text">Feelings</span>
            </div>
          </div>
          <button className="share-btn">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
