import { useState, useEffect } from 'react';
import { auth } from './config/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import './MainPage.css';
function MainPage({ logout, user }) {
  return (
    <div className="main-page-container">
      
        <div>
          <h1 className='title-text'>Main Page</h1>
          <div className='user-show'>
            <p>User: {user.email}</p>
            <button onClick={logout}>Sign Out</button>
          </div>
          
        </div>
    </div>
  );
}

export default MainPage;
