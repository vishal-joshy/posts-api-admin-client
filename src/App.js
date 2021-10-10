import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './components/Routes';
import Header from './components/HeaderComponent/Header';

function App() {
	
	const apiUri = 'http://localhost:8080/api';

	console.log('App component');

	return (
		<div>
			<Header />
			<Routes apiUri = {apiUri}/>
		</div>
	);
}

export default App;
