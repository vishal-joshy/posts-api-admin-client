import React from 'react';
import { Card } from 'react-bootstrap';

function PostDetails({ data }) {
	
	return (
		<div>
			<Card style={{ width: '80vw' }}>
				<Card.Body>
					<Card.Title>{data.title}</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>{data.subheading}</Card.Subtitle>
					<Card.Text>{data.content}</Card.Text>
					<Card.Link href='#'>Card Link</Card.Link>
					<Card.Link href='#'>Another Link</Card.Link>
				</Card.Body>
			</Card>
		</div>
	);
}

export default PostDetails;
