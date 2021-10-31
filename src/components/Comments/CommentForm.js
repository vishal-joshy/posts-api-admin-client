import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function CommentForm({ post_id }) {
	const [comment, setComment] = useState({});

	const handleChange = (e) => {
		const tempObj = {};
		tempObj[e.target.id] = e.target.value;
		setComment({ ...comment, ...tempObj });
	};

	const handleSubmit = () => {
		axios
			.post(`http://localhost:8080/api/posts/${post_id}/comments`, comment)
			.then((result) => {
				console.log(result);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className='mb-3' controlId='name'>
				<Form.Label>Name</Form.Label>
				<Form.Control type='text' onChange={(e) => handleChange(e)} />
			</Form.Group>
			<Form.Group className='mb-3' controlId='content'>
				<Form.Label>Comment</Form.Label>
				<Form.Control as='textarea' rows={3} onChange={(e) => handleChange(e)} />
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);
}

export default CommentForm;
