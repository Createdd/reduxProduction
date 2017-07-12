import React, { PropTypes } from 'react';

export default class CoursesPage extends React.Component {
	render() {
		return (
			<div>
				<p>Courses</p>
			</div>
		);
	}
}

CoursesPage.propTypes = {
  children: PropTypes.object.isRequired
};


