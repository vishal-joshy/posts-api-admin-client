import React, {useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router';


function PostDetails({ postID }) {
	const API_URI = 'http://localhost:8080/api';
	const history = useHistory();
	const [post, setPost] = useState({});
	const [isPostDeleted, setIsPostDeleted] = useState(false);

	console.log('Post Detail');

	const getToken  = ()=>['Bearer',' ',`${sessionStorage.getItem('token')}`].join('');

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(API_URI+ `/posts/${postID}`);
				setPost(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		getData();
	}, [isPostDeleted,API_URI,postID]);

	const deletePost = (post_id) => {
		if (window.confirm('Are you sure you want to delete your post?')) {
			axios
				.delete(API_URI + `/posts/${post_id}`,{
					headers:{
						'Authorization': getToken()
					}
				})
				.then((response) => {
					console.log(response);
					setIsPostDeleted(true);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	const handleRouteClick = () => {
		history.push('/');
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
				<Button variant='primary' onClick={handleRouteClick}>
					{' '}
					Main Page
				</Button>
			</div>
		);
	}
}

export default PostDetails;
