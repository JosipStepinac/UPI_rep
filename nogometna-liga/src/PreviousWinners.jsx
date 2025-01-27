import React from "react";
import "./PreviousWinners.css";
import logo from "./assets/logo.png";
function PreviousWinners({ logout, user }) {
  const winners = [
    { year: 2024, team: "Manchester City" },
    { year: 2023, team: "Arsenal" },
    { year: 2022, team: "Liverpool" },
    { year: 2021, team: "Chelsea" },
    { year: 2020, team: "Manchester United" },
  ];
  if (!user) {
    return (
      <div>
        <h2>Please log in to view the previous winners</h2>
      </div>
    );
  }
  return (
    <div className="winners-page-container">
      <div className="winners-top-side">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="premier">Premier League - Previous Winners</h1>
        <div className="winners-user-show">
          <p>User: {user.email}</p>
          <button onClick={logout}>Sign Out</button>
        </div>
      </div>
      <div className="goback">
        <a href="javascript: history.go(-1)">⬅</a>
      </div>
      <div className="winners-container">
        <h2>Prethodni pobednici</h2>
        <table className="winners-table">
          <thead>
            <tr>
              <th>Godina</th>
              <th>Tim</th>
            </tr>
          </thead>
          <tbody>
            {winners.map((winner, index) => (
              <tr key={index}>
                <td>{winner.year}</td>
                <td>{winner.team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PreviousWinners;