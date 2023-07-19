import { Link } from "react-router-dom";
import "../../public/style.css";
import { useEffect } from "react";

const Login = () => {
  useEffect(()=>{
    document.title="LinkHub - Log In"
  });
  return (
    <div className="login">
      <div className="login-wapper">
        <div className="login-left">
          <h2 className="login-logo">LinkHub</h2>
          <p className="login-desc">
            Connect with friends and the world around you with LinkHub
          </p>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input type="email" placeholder="Email" className="login-input" />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <button className="login-btn">Log In</button>
            <p className="forgot-pass">Forgot Password ?</p>
            <button className="register-btn">
              <Link to="/register">Create a New Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
