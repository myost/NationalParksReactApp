import React, { Component } from 'react';

export default class ParkImg extends React.Component {
	render (props) {
		return (
			<div className="parkImg">
				<img
					src={this.props.imagelink}
					alt={this.props.imagename}
				/>
			</div>
		);
	}
}