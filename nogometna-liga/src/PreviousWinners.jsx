import React from "react";
import "./PreviousWinners.css";
import logo from "./assets/logo.png";

function PreviousWinners({ logout, user }) {
  const winners = [
    { year: "2023 / 2024", team: "Manchester City" },
    { year: "2022 / 2023", team: "Manchester City" },
    { year: "2021 / 2022", team: "Manchester City" },
    { year: "2020 / 2021", team: "Manchester City" },
    { year: "2019 / 2020", team: "Liverpool" },
    { year: "2018 / 2019", team: "Manchester City" },
    { year: "2017 / 2028", team: "Manchester City" },
    { year: "2016 / 2017", team: "Chelsea" },
    { year: "2015 / 2016", team: "Leicester City" },
    { year: "2014 / 2015", team: "Chelsea" },
    { year: "2013 / 2014", team: "Manchester City" },
    { year: "2012 / 2013", team: "Manchester United" },
    { year: "2011 / 2012", team: "Manchester City" },
    { year: "2010 / 2011", team: "Manchester United" },
    { year: "2009 / 2010", team: "Manchester City" },
    { year: "2008 / 2009", team: "Manchester United" },
    { year: "2007 / 2008", team: "Manchester United" },
    { year: "2006 / 2007", team: "Manchester United" },
    { year: "2005' / 2006", team: "Chelsea" },
    { year: "2004 / 2005", team: "Chelsea" },
    { year: "2003 / 2004", team: "Arsenal" },
    { year: "2002 / 2003", team: "Manchester United" },
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
        <img src={logo} alt="Logof" className="logof" />
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
        <h2>Prethodni pobjednici</h2>
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