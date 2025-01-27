import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Login from './LoginPage';
import { auth } from './config/firebase-config';

// Mocking Firebase methods
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

    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/go to sign up/i)).toBeInTheDocument();
  });
});
