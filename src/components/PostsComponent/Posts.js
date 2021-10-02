import React from 'react';
import { Card } from 'react-bootstrap';

function Posts({ data }) {
	const handleCardClick = (post_id) => {
		window.location = `/post/${post_id}`;
	};

	console.log(data);
	return (
		<div className='posts-container'>
			{data.map((post) => (
				<div key={post.post_id} className='card-wrapper'>
					<Card style={{ width: '66vw' }} onClick={() => handleCardClick(post.post_id)}>
						<Card.Body>
							<Card.Title>{post.title}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the
								card's content.
							</Card.Text>
							<Card.Link href='#'>Card Link</Card.Link>
							<Card.Link href='#'>Another Link</Card.Link>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
}

export default Posts;
