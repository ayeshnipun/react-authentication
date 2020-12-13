import React from 'react';
import AuthProvider from './providers/auth-provider';

import './App.css';
import Login from "./pages/login";

const App = () => {
  return (
	  <Login/>
  );
};

export default AuthProvider(App);