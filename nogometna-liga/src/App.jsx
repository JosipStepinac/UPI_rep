import { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from "./RegisterPage";
import Login from './LoginPage';
import MainPage from './MainPage';
import { useNavigate } from 'react-router-dom';
import Register from './RegisterPage';
import './App.css'
import {auth} from "./config/firebase-config";
function App() {

  /// Konstante koje prate tko je ulogiran, tj za registraciju.

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  const navigate = useNavigate();
  /// Promjena i pracenje ulogiranog korisnika.

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])

  /// Funkcije za registraciju, login i za odjavu.

  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    }
    catch (error){
      console.log(error.message);

    }
    
  };

  const login = async () => {
    
    try{
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/main");
      (console.log(user));
      (console.log(user));
      
      
    }
    catch (error){
      console.log(error.message);

    }
    
  };

  const logout = async () => {

    await signOut(auth);
    navigate("/");
    
  };
  
  const goToLogin = async () => {
    navigate("/")
  }
  const signup = async()=>{
    navigate("/signup")
  }

  return (
    <div>
      <Routes>
        {/* Route za signup */}
        <Route 
          path="/signup" 
          element={
            <SignUp 
              setRegisterEmail={setRegisterEmail}
              setRegisterPassword={setRegisterPassword}
              goToLogin={goToLogin}
              register={register}
            />
          }
        />
        
        {/* Route za login */}
        <Route 
          path="/" 
          element={
            <Login 
              setLoginEmail={setLoginEmail}
              setLoginPassword={setLoginPassword}
              signup={signup}
              login={login}
            />
          }
        />
        
        {/* Route za Main Page nakon logina */}
        <Route 
          path="/main" 
          element={<MainPage logout={logout} user={user} />}
        />
      </Routes>
    </div>
  );}

export default App
