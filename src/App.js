import React from 'react';
import AuthenticationApp from './AuthApp';
import { AuthContext } from './context/authContext';
import UnAuthenticationApp from './UnAuthApp';
import './assets/main.css';

function App() {
	const { token } = React.useContext(AuthContext);

	if (token) {
		return <AuthenticationApp />;
	} else {
		return <UnAuthenticationApp />;
	}
}

export default App;
