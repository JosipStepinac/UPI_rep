import { useState, useEffect } from 'react';
import { auth } from './config/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import './SecondaryPage.css';
import logo from './assets/logo.png';


function SecondaryPage({ logout, user }) {

    const [teams, setTeams] = useState([]);
  
    // Fetch the teams data (this could be an API call or data from a database)
    useEffect(() => {
      // Mocking the data for now
      const fetchedData = [
        { rank: 1, team: 'ARSENAL', played: 20, wins: 15, draws: 3, losses: 2, goalDifference: '+25', points: 48 },
        { rank: 2, team: 'MANCHESTER CITY', played: 20, wins: 14, draws: 4, losses: 2, goalDifference: '+18', points: 46 },
        { rank: 3, team: 'MANCHESTER UNITED', played: 20, wins: 12, draws: 5, losses: 3, goalDifference: '+12', points: 41 },
        { rank: 4, team: 'SOUTHAMPTON', played: 20, wins: 10, draws: 7, losses: 3, goalDifference: '+7', points: 37 },
        { rank: 5, team: 'CRYSTAL PALACE', played: 20, wins: 13, draws: 3, losses: 2, goalDifference: '+25', points: 33 },
        { rank: 6, team: 'NOTINGHAM FOREST', played: 20, wins: 12, draws: 4, losses: 2, goalDifference: '+18', points: 32 },
        { rank: 7, team: 'EVERTON', played: 20, wins: 12, draws: 2, losses: 3, goalDifference: '+12', points: 30 },
        { rank: 8, team: 'CHELSEA', played: 20, wins: 10, draws: 3, losses: 3, goalDifference: '+7', points: 25 },
        { rank: 9, team: 'TOTTENHAM HOTSPUR', played: 20, wins: 15, draws: 3, losses: 2, goalDifference: '+25', points: 24 },
        { rank: 10, team: 'LIVERPOOL', played: 20, wins: 14, draws: 4, losses: 2, goalDifference: '+18', points: 23 },
        { rank: 11, team: 'ASTON VILLA', played: 20, wins: 12, draws: 5, losses: 3, goalDifference: '+12', points: 21 },
        { rank: 12, team: 'NEWCASTLE', played: 20, wins: 10, draws: 7, losses: 3, goalDifference: '+7', points: 19 },
        { rank: 13, team: 'BOURNEMOUTH', played: 20, wins: 15, draws: 3, losses: 2, goalDifference: '+25', points: 17 },
        { rank: 14, team: 'BRIGHTON', played: 20, wins: 14, draws: 4, losses: 2, goalDifference: '+18', points: 15 },
        { rank: 15, team: 'FULHAM', played: 20, wins: 12, draws: 5, losses: 3, goalDifference: '+12', points: 13 },
        { rank: 16, team: 'BRENTFORD', played: 20, wins: 10, draws: 7, losses: 3, goalDifference: '+7', points: 12 },
        { rank: 17, team: 'WEST HAM', played: 20, wins: 15, draws: 3, losses: 2, goalDifference: '+25', points: 12 },
        { rank: 18, team: 'WOLVES', played: 20, wins: 14, draws: 4, losses: 2, goalDifference: '+18', points: 11 },
        { rank: 19, team: 'IPSWICH', played: 20, wins: 12, draws: 5, losses: 3, goalDifference: '+12', points: 5 },
        { rank: 20, team: 'LEICESTER', played: 20, wins: 10, draws: 7, losses: 3, goalDifference: '+7', points: 1 },
        // Add the rest of your 20 teams here
        // This data could come from an API, Firebase, or SQL database
      ];
      setTeams(fetchedData);
  }, []); // Empty array ensures this only runs once when the component mounts

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

        <div className="secondary-container">

          <div className="window-rightside">
            <div className="standings-container-two">
              <h2>TABLICA</h2>
              <table className="standings-table-two">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>Played</th>
                    <th>Wins</th>
                    <th>Draws</th>
                    <th>Losses</th>
                    <th>Goal Difference</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team) => (
                    <tr key={team.rank}>
                      <td>{team.rank}</td>
                      <td>{team.team}</td>
                      <td>{team.played}</td>
                      <td>{team.wins}</td>
                      <td>{team.draws}</td>
                      <td>{team.losses}</td>
                      <td>{team.goalDifference}</td>
                      <td>{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  )
}


export default SecondaryPage;
