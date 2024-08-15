import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/onebox");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
      <h1>LoginPage</h1>
            <label htmlFor="email">Enter Your Email</label>
            <input 
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email" 
                required 
                placeholder="Enter your email here"
            />
            <label htmlFor="password">Enter Your Password</label>
            <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required 
                placeholder="Enter your password here"
            />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
