import React, {Component} from 'react';

export default class ParkDesc extends React.Component {
	render (props) {
		return (
			<div className="description">
				<p> {this.props.descript} </p>
			</div>
		);
	}
}