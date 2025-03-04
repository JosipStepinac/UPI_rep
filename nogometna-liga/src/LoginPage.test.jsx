import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Login from './LoginPage';
import { auth } from './config/firebase-config';
import { MemoryRouter } from 'react-router-dom';

// Mockiranje firebase metoda
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
}));

jest.mock('./config/firebase-config', () => ({
  auth: {},
}));

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders login form elements', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(screen.getByText("NOGOMETNA LIGA")).toBeInTheDocument();
    expect(screen.getByText("Go to Sign Up")).toBeInTheDocument();
  });

  test('renders login form elements', () => {
    render(<Login />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: "Login" })).toBeInTheDocument();
  });

  test('renders sign up button', () => {
    render(<Login />);
    expect(screen.getByRole('button', { name: /go to sign up/i })).toBeInTheDocument();
  });
  
  test('updates input fields on change', () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText('Email');
    const passInput = screen.getByPlaceholderText('Password');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passInput, { target: { value: 'testuser' } });
    expect(usernameInput.value).toBe('testuser');
    expect(usernameInput.value).toBe('testuser');
  });

  test('login button is clickable', () => {
    render(<Login />);
    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);
  });

  test('shows an alert on login error', async () => {
    const mockError = new Error('Invalid credentials');
    signInWithEmailAndPassword.mockRejectedValue(mockError);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  
    render(<Login />);
  
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: /login/i });
  
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);
  
    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, 'test@example.com', 'password123');
      expect(window.alert).toHaveBeenCalled()
    });
  });
  
});
