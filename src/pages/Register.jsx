import { useEffect } from "react";
import "../../public/style.css";
import { Link } from "react-router-dom";

const Register = () => {
  useEffect(() => {
    document.title = "LinkHub - Register";
  });
  return (
    <div className="register">
      <div className="register-wapper">
        <div className="register-left">
          <h2 className="register-logo">LinkHub</h2>
          <p className="register-desc">
            Connect with friends and the world around you with LinkHub
          </p>
        </div>
        <div className="register-right">
          <div className="register-box">
            <input
              type="text"
              placeholder="Username"
              className="register-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="register-input"
            />
            <input
              type="password"
              placeholder="Password"
              className="register-input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="register-input"
            />
            <button className="login-btn">Sign Up</button>
            <button className="register-btn">
              <Link to="/login">Log into Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
