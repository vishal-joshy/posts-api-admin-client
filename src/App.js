import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/HeaderComponent/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './components/PostsComponent/Posts';
import PostDetails from './components/PostsComponent/PostDetails';
import axios from 'axios';

function App() {
	const [posts, setPosts] = useState([]);

	const getData = async () => {
		const response = await axios('http://localhost:8080/api/posts');

		setPosts(response.data);
		console.log(response.data);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path='/' render={() => <Posts data={posts} />} />
					{React.Children.toArray(
						posts.map((post) => (
							<Route exact path={`/post/${post._id}`} render={() => <PostDetails data={post} />} />
						))
					)}
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
