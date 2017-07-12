import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Administration App</h1>
				<p>Scalable Apps here!</p>
				<Link to="about" className="btn btn-primary btn-lg">
					ABOUT
				</Link>
			</div>
		);
	}
}

export default HomePage;
