import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './PostsComponent/Posts';
import PostDetails from './PostsComponent/PostDetails';
import UserSignUpForm from './FormComponent/UserSignUpForm';
import UserLoginForm from './FormComponent/UserLoginForm';
import PostForm from './FormComponent/PostForm';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { apiUriState } from '../App';

function Routes() {
	const [apiUri] = useRecoilState(apiUriState);

	const [postIDs, setPostIDs] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(apiUri + '/posts');
				console.log(response.data);
				const post_ids = response.data.map((post) => post._id);
				setPostIDs(post_ids);
			} catch (err) {
				console.log(err);
			}
		};
		getData();
	}, [apiUri]);

	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path='/login' render={() => <UserLoginForm />} />
					<Route exact path='/sign-up' render={() => <UserSignUpForm />} />
					<Route exact path='/' component={Posts} />
					<Route exact path='/post-form' render={() => <PostForm />} />
					{React.Children.toArray(
						postIDs.map((postID) => (
							<Route
								exact
								path={`/post/${postID}`}
								render={() => <PostDetails postID={postID} />}
							/>
						))
					)}
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default Routes;
