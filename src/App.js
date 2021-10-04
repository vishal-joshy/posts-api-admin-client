import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import Header from './components/HeaderComponent/Header';
import Posts from './components/PostsComponent/Posts';
import PostDetails from './components/PostsComponent/PostDetails';
import SignIn from './components/UserComponent/SignIn';
import SignUp from './components/UserComponent/SignUp';

export const apiUrlContext = React.createContext();

function App() {
	const API_URI = 'http://localhost:8080/api';
	const [postIDs, setPostIDs] = useState([]);

	console.log('App component');

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(API_URI + '/posts');
				// setPosts(response.data);
				console.log(response.data);
				const post_ids = response.data.map((post) => post._id);
				setPostIDs(post_ids);
			} catch (err) {
				console.log(err);
			}
		};
		getData();
	}, []);

	return (
		<div>
			<Header />
			
			<BrowserRouter>
				<Switch>
					<apiUrlContext.Provider value={API_URI}>
						<Route exact path='/login' render={() => <SignIn />} />
						<Route exact path='/sign-up' render={() => <SignUp />} />
						<Route exact path='/' render={() => <Posts />} />
						{React.Children.toArray(
							postIDs.map((postID) => (
								<Route exact path={`/post/${postID}`} render={() => <PostDetails postID={postID} />} />
							))
						)}
					</apiUrlContext.Provider>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
