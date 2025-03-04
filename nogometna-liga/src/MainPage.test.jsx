import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';

// Mockiranje
jest.mock('./config/firebase-config', () => ({
  auth: {}
}));
jest.mock('./en.1.json', () => [
  { date: '2025-03-04', team1: 'Team A', team2: 'Team B', score: '2-1' },
  { date: '2025-03-05', team1: 'Team C', team2: 'Team D', score: '0-0' }
]);
jest.mock('./assets/searchicon.png', () => 'mocked-search-icon.png');

const mockUser = { email: 'test@example.com' };
const mockLogout = jest.fn();

describe('MainPage Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <MainPage user={mockUser} logout={mockLogout} />
      </BrowserRouter>
    );
  });

  test('renders main page elements', () => {
    expect(screen.getByText("Nogometna liga")).toBeInTheDocument();
    expect(screen.getByText("User: test@example.com")).toBeInTheDocument();
    expect(screen.getByText("Sign Out")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Pretraži po klubu...")).toBeInTheDocument();
    expect(screen.getByText("REZULTATI")).toBeInTheDocument();
  });

  test('renders table headers', () => {
    expect(screen.getByText("Datum")).toBeInTheDocument();
    expect(screen.getByText("Domaćin")).toBeInTheDocument();
    expect(screen.getByText("Gost")).toBeInTheDocument();
    expect(screen.getByText("Rezultat")).toBeInTheDocument();
  });

  test('filters data based on search term', () => {
    const searchInput = screen.getByPlaceholderText("Pretraži po klubu...");
    fireEvent.change(searchInput, { target: { value: 'Team A' } });
    expect(screen.getByText("Team A")).toBeInTheDocument();
    expect(screen.queryByText("Team C")).not.toBeInTheDocument();
  });

  test('logout button calls logout function', () => {
    const logoutButton = screen.getByText("Sign Out");
    fireEvent.click(logoutButton);
    expect(mockLogout).toHaveBeenCalled();
  });
});
