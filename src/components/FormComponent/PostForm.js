import React, { useState } from 'react';

function PostForm() {
	const [postDetails, setPostDetails] = useState({ title: '', content: '' });
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(postDetails);
	};
	const handleChange = (e) => {
		if (e.target.id === 'title') {
			setPostDetails({ ...postDetails, title: e.target.value });
		} else {
			setPostDetails({ ...postDetails, content: e.target.value });
		}
	};
	return (
		<div>
			<form
				onSubmit={(e) => {
					handleSubmit(e);
				}}>
				<label htmlFor='post-title'>Title</label>
				<input
					type='text'
					name='post-title'
					id='title'
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<label htmlFor='post-content'>Content</label>
				<input
					type='text'
					name='post-content'
					id='content'
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
}

export default PostForm;
