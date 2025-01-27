import * as React from 'react';
import { auth } from './config/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
// import dataClubs from S;
import './SecondaryPage.css';
import logo from './assets/logo.png';
import Data from './en.1.clubs.json';
import {useTable} from 'react-table';


function SecondaryPage({ logout, user }) {

  const data = React.useMemo(() => Data,[]);
  const columns = React.useMemo(() => [
     {
      Header: "Ime",
      accessor: "name"
    },
    {
      Header: "Odigrane utakmice",
      accessor: "played"
    },
    {
      Header: "Pobjede",
      accessor: "wins"
    },
     {
       Header: "Nerješene",
       accessor: "draws"
     },
     {
      Header: "Porazi",
      accessor: "loses"
    },
    {
      Header: "Gol razlika",
      accessor: "gd"
    },{
      Header: "Bodovi",
      accessor: "points"
    },
  ],
  []
 );

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns,data}); 

  if (!user) {
    return (
      <div>
        <h2>Please log in to view the standings</h2>
      </div>
    );
  }

  return (
    <div className="s-page-container">
      
        <div className="s-top-side">
          <img src={logo} alt="Logo" className="logo" /> 
          
          <h1 className="premier">Premier League</h1>
          <div className='s-user-show'>
            <p>User: {user.email}</p>
            <button onClick={logout}>Sign Out</button>
          </div>
        </div>
        <div className='goback'>
              <a href="javascript: history.go(-1)">⬅</a>
        </div>


        <div className="secondary-container">

          <div className="window-rightside">
            <div className="standings-container-two">
              <h2>TABLICA</h2>
              <table className="standings-table-two"{...getTableProps()}>
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


export default SecondaryPage;
