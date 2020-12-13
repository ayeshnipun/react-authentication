// package imports
import React from 'react';
import { AuthContext } from '../context/auth-context';
import queryString from 'query-string'

class Login extends React.Component {
  render() {
    const auth = this.context;
    return (
		<div>
		<button
		type="primary"
		className="ant-btn-login"
		block
		onClick={() => auth.onSignIn()}
	  >
		Login
	  </button>
		<button
		type="primary"
		className="ant-btn-login"
		block
		onClick={() => auth.onSignOut()}
	  >
		Logout
	  </button>
	  </div>
    );
  }
}

Login.contextType = AuthContext;

export default Login;