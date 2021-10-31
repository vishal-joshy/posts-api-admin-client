import React from "react";

function Comments({ data }) {
	
	return (
		<>
			{data.map((comment) => {
				return (
					<div key={comment._id}>
						<div>{comment.name}</div>
						<div>{comment.content}</div>
					</div>
				);
			})}
		</>
	);
}

export default Comments;
