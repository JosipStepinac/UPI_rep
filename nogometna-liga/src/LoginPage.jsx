import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config/firebase-config';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Navigate } from 'react-router-dom';

function Login({ signup }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
      navigate("/main");
    } catch (error) {
        alert(error);
    }
  };
  

  return (
    <div className="page-container">
      
      <div className="left-side">
        <h1 className="main-title">NOGOMETNA LIGA</h1>
        <p className="description-text">
          Mjesto za najveće navijače sa željom da prate sve nogometne lige svijeta
        </p>
      </div>

      
      <div className="right-side">
        <div className="login-box">
          <h1 className="login-title">Login</h1>
          <input
            className="login-input"
            placeholder="Email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button className="login-button" onClick={login}>
            Login
          </button>
          <hr id = "hr-separator"></hr>
          <button className="login-button" id="signup-button" onClick={signup}>Go to Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;