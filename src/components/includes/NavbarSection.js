import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { reSetAuthedUser } from '../../actions/authenticatedUser';
import Avatar from './Avatar';

function NavbarSection(props) {
	const { user, dispatch } = props;

	const handleLogout = () => {
		dispatch(reSetAuthedUser());
	};

	return (
		<Fragment>
			<Navbar expand="sm" sticky="top" bg="dark" variant="dark" className="mb-3">
				<Navbar.Brand as={Link} to="/">
					<h2>
						<b>Would you rather?</b>
					</h2>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link as={NavLink} to="/" exact>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/add">
							New Question
						</Nav.Link>
						<Nav.Link as={NavLink} to="/leaderboard">
							Leaderboard
						</Nav.Link>
					</Nav>
					<Nav className="align-items-start">
						<Navbar.Text>{user.name}</Navbar.Text>
						<Avatar avatarURL={user.avatarURL} className="mx-3" />
						<Button
							variant="outline-dark"
							onClick={handleLogout}
							className="mt-3 mt-lg-0"
						>
							Logout
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(NavbarSection);
