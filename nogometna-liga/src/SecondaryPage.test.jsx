import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SecondaryPage from './SecondaryPage';

// Mockiraj
jest.mock('./en.1.clubs.json', () => [
  { name: 'Team A', played: 10, wins: 5, draws: 3, loses: 2, gd: 5, points: 18 },
  { name: 'Team B', played: 10, wins: 4, draws: 4, loses: 2, gd: 3, points: 16 }
]);
jest.mock('./config/firebase-config', () => ({
  auth: {}
}));
jest.mock('./assets/logo.png', () => 'mocked-logo.png');

const mockLogout = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('SecondaryPage Component', () => {
  const mockUser = { email: 'test@example.com' };

  test('renders login message when user is not logged in', () => {
    render(<SecondaryPage logout={mockLogout} user={null} />);
    expect(screen.getByText("Please log in to view the standings")).toBeInTheDocument();
  });

  test('renders secondary page elements when user is logged in', () => {
    render(
      <BrowserRouter>
        <SecondaryPage logout={mockLogout} user={mockUser} />
      </BrowserRouter>
    );
    expect(screen.getByText("Premier League")).toBeInTheDocument();
    expect(screen.getByText("User: test@example.com")).toBeInTheDocument();
    expect(screen.getByText("Sign Out")).toBeInTheDocument();
    expect(screen.getByText("TABLICA")).toBeInTheDocument();
  });

  test('renders table headers', () => {
    render(
      <BrowserRouter>
        <SecondaryPage logout={mockLogout} user={mockUser} />
      </BrowserRouter>
    );
    expect(screen.getByText("Ime")).toBeInTheDocument();
    expect(screen.getByText("Odigrane utakmice")).toBeInTheDocument();
    expect(screen.getByText("Pobjede")).toBeInTheDocument();
    expect(screen.getByText("Nerješene")).toBeInTheDocument();
    expect(screen.getByText("Porazi")).toBeInTheDocument();
    expect(screen.getByText("Gol razlika")).toBeInTheDocument();
    expect(screen.getByText("Bodovi")).toBeInTheDocument();
  });

  test('renders table data', () => {
    render(
      <BrowserRouter>
        <SecondaryPage logout={mockLogout} user={mockUser} />
      </BrowserRouter>
    );
    expect(screen.getByText("Team A")).toBeInTheDocument();
    expect(screen.getByText("Team B")).toBeInTheDocument();
  });

  test('logout button calls logout function', () => {
    render(
      <BrowserRouter>
        <SecondaryPage logout={mockLogout} user={mockUser} />
      </BrowserRouter>
    );
    const logoutButton = screen.getByText("Sign Out");
    fireEvent.click(logoutButton);
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });

  test('navigates to previous winners page', () => {
    render(
      <BrowserRouter>
        <SecondaryPage logout={mockLogout} user={mockUser} />
      </BrowserRouter>
    );
    const goToPreviousWinnersButton = screen.getByText("Go to Previous Winners");
    fireEvent.click(goToPreviousWinnersButton);
    expect(mockNavigate).toHaveBeenCalledWith('/previous-winners');
  });
});
