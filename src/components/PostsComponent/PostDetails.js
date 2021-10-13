import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { apiUriState,getToken } from '../../App';
import { useRecoilState } from 'recoil';
import useFetch from '../useFetch';

function PostDetails({ postID }) {
	const [apiUri] = useRecoilState(apiUriState);

	const [post]= useFetch({method:'GET',endpoint:`/posts/${postID}`});
	
	console.log('Post Detail');
	const deletePost = (post_id) => {
		if (window.confirm('Are you sure you want to delete your post?')) {
			axios
				.delete(apiUri + `/posts/${post_id}`, {
					headers: {
						Authorization: getToken(),
					},
				})
				.then((response) => {
					console.log(response);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	if (post) {
		return (
			<div>
				<Card style={{ width: '80vw' }}>
					<Card.Body>
						<Card.Title>{post.title}</Card.Title>
						<Card.Text>{post.content}</Card.Text>
						<Card.Link href='#'>Card Link</Card.Link>
						<Card.Link href='#'>Another Link</Card.Link>
					</Card.Body>
				</Card>
				<Button
					variant='danger'
					onClick={() => {
						deletePost(postID);
					}}>
					Delete
				</Button>
			</div>
		);
	} else {
		return (
			<div>
				Post Removed !
				<a href='/'>
					<Button variant='primary'>
						{' '}
						Main Page
					</Button>
				</a>
			</div>
		);
	}
}

export default PostDetails;
