import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './components/Routes';
import Header from './components/HeaderComponent/Header';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

export const apiUriState = atom({
	key: 'apiUriState',
	default: 'http://localhost:8080/api',
});

export const userLoginStatusState = atom({
	key: 'userLoginStatusState',
	default: {
		isLoggedIn: false,
		username: '',
	},
});

function App() {
	console.log('App component');

	return (
		<RecoilRoot>
			<Header />
			<Routes />
		</RecoilRoot>
	);
}

export default App;
