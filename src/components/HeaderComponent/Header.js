import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
	const [username, setUsername] = useState('');

	useEffect(() => {
		if (sessionStorage.getItem('username')) {
			setUsername(sessionStorage.getItem('username'));
		}
	}, []);
	
	const logoutUser = () => {
		console.log('logout User');
		sessionStorage.clear();
		window.location.assign('/');
	};

	return (
		<div className='header'>
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='/'>Posts</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'></Nav>
						<Nav>
							{username !== '' ? (
								<>
									<Nav.Link onClick={logoutUser}>Logout</Nav.Link>
									<Nav.Link href='/post-form'>+ New Post</Nav.Link>
								</>
							) : (
								<>
									<Nav.Link href='/login'>Sign In</Nav.Link>
									<Nav.Link href='/sign-up'>Sign Up</Nav.Link>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
