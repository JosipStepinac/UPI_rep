import * as React from 'react';
import { auth } from './config/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import './MainPage.css';
import searchIcon from './assets/searchicon.png';
import { Link } from 'react-router-dom';
import DataUt from './en.1.json';
import {useTable} from 'react-table';


function MainPage({ logout, user }) {

  const data = React.useMemo(() => DataUt,[]);
  const columns = React.useMemo(() => [
    {
      Header: "Datum",
      accessor: "date"
    },
    {
      Header: "Domaćin",
      accessor: "team1"
    },
    {
      Header: "Gost",
      accessor: "team2"
    },
     {
       Header: "Rezultat",
       accessor: "score"
     },
  ],
  []
 );

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns,data});  

  return (
    <div className="main-page-container">
      
        <div className="top-side">
          <h1 >Nogometna liga</h1>
          <div className='user-show'>
            <p>User: {user.email}</p>
            <button onClick={logout}>Sign Out</button>
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
            <table className="football-matches-table"{...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup)=>(
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column)=>(
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                      ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row)=>{
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell)=> (
                        <td {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          </div>

        </div>
    </div>
  )
}

export default MainPage;

