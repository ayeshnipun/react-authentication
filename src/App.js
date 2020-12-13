import React from 'react';
import AuthProvider from './providers/auth-provider';
import logo from './logo.svg';
import './App.css';
import Login from "./pages/login";

const App = () => {
  return (
	<div className="App">
	<header className="App-header">
	  <img src={logo} className="App-logo" alt="logo" />
	  
	  <Login/>
	</header>
  </div>
  );
};

export default AuthProvider(App);