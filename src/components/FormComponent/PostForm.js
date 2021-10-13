import React, { useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { apiUriState,getToken } from '../../App';



function PostForm() {
	const apiUri = useRecoilValue(apiUriState);
	const [postDetails, setPostDetails] = useState({ title: '', content: '' });
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(postDetails);
		axios.post(apiUri+'/posts', postDetails ,{headers: {
			Authorization: getToken(),
		}}).then(result=>{
			console.log(result);
			window.location.assign('/');
			
		}).catch(err=>{
			console.log(err);
		})
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
