import React from 'react';
import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const localData = JSON.parse(localStorage.getItem('token'));
	const [token, SetToken] = useState(localData || '');

	useEffect(() => {
		if (token) {
			localStorage.setItem('token', JSON.stringify(token));
		} else {
			localStorage.removeItem('token');
		}
	}, [token]);

	return (
		<AuthContext.Provider value={{ token, SetToken }}>
			{children}
		</AuthContext.Provider>
	);
};
