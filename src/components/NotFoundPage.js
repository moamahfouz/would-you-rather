import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
	return (
		<Fragment>
			<h1 className="display2 text-center">Sorry page not found</h1>
			<h1 className="display4 text-center">
				<Link to="/">Back to Home Page</Link>
			</h1>
		</Fragment>
	);
}

export default NotFoundPage;
