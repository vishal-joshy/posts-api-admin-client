import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/HeaderComponent/Header';
import Posts from './components/PostsComponent/Posts';

function App() {
	return (
		<div>
			<Header />
			<Posts />
		</div>
	);
}

export default App;
