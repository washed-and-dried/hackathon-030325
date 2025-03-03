import { useState } from "react";
import "./Login.css";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="login-card">
      <h2 className="login-title">{isSignup ? "Sign Up" : "Login"}</h2>
      <div className="login-form">
        {isSignup && (
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" />
          </div>
        )}
        {isSignup ? (
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" />
          </div>
        ) : (
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
        )}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="login-button">
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
        {!isSignup && (
          <button className="reset-button">Forgot Password?</button>
        )}
        <button
          className="toggle-button"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}
