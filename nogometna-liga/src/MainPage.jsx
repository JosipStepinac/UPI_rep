import { useState, useEffect } from 'react';
import { auth } from './config/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import './MainPage.css';
import searchIcon from './assets/searchicon.png';
import { Link } from 'react-router-dom';


function MainPage({ logout, user }) {

  return (
    <div className="main-page-container">
      
        <div className="top-side">
          <h1 >NOGOMETNA LIGA</h1>
          <div className='user-show'>
            <button onClick={logout}>Sign Out</button>
            <p>User: {user.email}</p>
          </div>
          <div className='header-content'>
            <nav className="navbar">
                <ul>
                  <li class="dropdown">
                      <a href="#" class="dropbtn">Izbornik</a>
                      <div class="dropdown-content">
                          <Link to="/secondary">
                            <a>Premier League</a>
                          </Link>
                          <a href="#">HNL</a>
                          <a href="#">World</a>
                      </div>
                  </li>
                </ul>
                <div className='search-bar'>
                  <input
                    className="search-container"
                  />
                  <button type="submit" className="search-button">
                    <img src={searchIcon} alt="Search" className="search-icon" />
                  </button>
                </div>
              </nav>
          </div>
        </div>

        <div className="main-secondary-container">


          
          <div className="main-window-rightside">
            <h1 className='title-text'>REZULTATI</h1>
            <div className="football-matches-container">
            <table className="football-matches-table">
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Utakmica</th>
                  <th>Rezultat</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Rows */}
                <tr>
                  <td>2025-01-21</td>
                  <td>MAN C vs ARS</td>
                  <td>2-1</td>
                </tr>
                <tr>
                  <td>2025-01-22</td>
                  <td>TOT vs CHE</td>
                  <td>1-1</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>LEI vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>LEI vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>LEI vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>LEI vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
                <tr>
                  <td>2025-01-23</td>
                  <td>SA vs WOL</td>
                  <td>3-0</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>

        </div>
    </div>
  )
}

export default MainPage;

