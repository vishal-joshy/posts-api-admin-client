import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './components/Routes';
import Header from './components/HeaderComponent/Header';
import { RecoilRoot, atom } from 'recoil';

export const apiUriState = atom({
	key: 'apiUriState',
	default: 'http://localhost:8080/api',
});

export const getToken = () => ['Bearer', ' ', `${sessionStorage.getItem('token')}`].join('');

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
