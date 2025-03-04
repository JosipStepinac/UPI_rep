import React from 'react';
import { render, screen } from '@testing-library/react';
import PreviousWinners from './PreviousWinners';

jest.mock('./assets/logo.png', () => 'mocked-logo.png');

describe('PreviousWinners Component', () => {
  const mockLogout = jest.fn();
  const mockUser = { email: 'test@example.com' };

  test('renders login message when user is not logged in', () => {
    render(<PreviousWinners logout={mockLogout} user={null} />);
    expect(screen.getByText("Please log in to view the previous winners")).toBeInTheDocument();
  });

  test('renders previous winners table when user is logged in', () => {
    render(<PreviousWinners logout={mockLogout} user={mockUser} />);
    expect(screen.getByText("Premier League - Previous Winners")).toBeInTheDocument();
    expect(screen.getByText("User: test@example.com")).toBeInTheDocument();
    expect(screen.getByText("Sign Out")).toBeInTheDocument();
    expect(screen.getByText("Prethodni pobjednici")).toBeInTheDocument();
  });

  test('displays correct number of winners', () => {
    render(<PreviousWinners logout={mockLogout} user={mockUser} />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(23); // 22 pobjednika + 1 header red
  });


  test('logout button calls logout function', () => {
    render(<PreviousWinners logout={mockLogout} user={mockUser} />);
    const logoutButton = screen.getByText("Sign Out");
    logoutButton.click();
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
