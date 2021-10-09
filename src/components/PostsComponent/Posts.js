import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { apiUrlContext } from '../../App';
import axios from 'axios';

function Posts() {
	const API_URI = useContext(apiUrlContext);
	const [posts, setPosts] = useState([]);

	console.log('Post component');

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(API_URI + '/posts');
				setPosts(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		getData();
	}, [API_URI]);

	return (
		<div className='posts-container'>
			{posts.map((post) => (
				<div key={post._id} className='card-wrapper'>
					<Card style={{ width: '66vw' }}>
						<Card.Body>
							<Link to={`/post/${post._id}`}>
								<Card.Title>{post.title}</Card.Title>
							</Link>
							<Card.Subtitle className='mb-2 text-muted'>{post.subheading}</Card.Subtitle>
							<Card.Text>{post.content}</Card.Text>
							<Card.Link href='#'>Upvote</Card.Link>
							<Card.Link href='#'>Downvote</Card.Link>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
}

export default Posts;
