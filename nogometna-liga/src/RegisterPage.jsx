import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config/firebase-config';
import { useNavigate } from 'react-router-dom';

function SignUp({goToLogin, setUserName}) {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const navigate = useNavigate();
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
      navigate("/main");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="page-container">
      
      <div className="left-side">
        <h1 className="main-title">NOGOMETNA LIGA</h1>
        <p className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Curabitur eget nisl nec nulla vehicula porttitor. 
          Mauris consequat tincidunt eros, eu dapibus urna mollis vel.
        </p>
      </div>

      
      <div className="right-side">
        <div className="login-box">
          <h1 className="login-title">Sign Up</h1>
          <input
            className="login-input"
            placeholder="Email"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button className="login-button" onClick={register}>
            Sign Up
          </button>
          <hr id = "hr-separator"></hr>
          <button className="login-button" id="signup-button" onClick={goToLogin}>Go to Login</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;