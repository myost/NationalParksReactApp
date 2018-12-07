import React from 'react';

export default class ParkTitle extends React.Component {
	render (props){
		return(
			<div className="parkTitle">
				<h1> {this.props.title} </h1>
			</div>
		);
	}
}
