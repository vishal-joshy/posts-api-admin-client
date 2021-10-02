import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/HeaderComponent/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './components/PostsComponent/Posts';
import PostDetails from './components/PostsComponent/PostDetails';

function App() {
	const dummyData = [
		{
			title: 'New Blog',
			post_id: '1',
		},
		{ title: 'New BLog 2', post_id: '2' },
    { title: 'New BLog 3', post_id: '3' },
    { title: 'New BLog 4', post_id: '4' },
    { title: 'New BLog 5', post_id: '5' },
    { title: 'New BLog 6', post_id: '6' },
	];

	return (
		<div>
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path='/' render={() => <Posts data={dummyData} />} />
					<Route exact path='/post/:post_id' render={() => <PostDetails />} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
