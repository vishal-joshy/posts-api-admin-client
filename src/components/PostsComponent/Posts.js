import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Posts({ data }) {
	console.log(data);
	return (
		<div className='posts-container'>
			{data.map((post) => (
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
