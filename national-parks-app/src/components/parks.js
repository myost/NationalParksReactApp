import React, { Component } from 'react';

export default class Parks extends React.Component {
	render (props){
		return(
			<div className="parks">
				<div className="parkTitle">
					<h1> {this.props.title} </h1>
				</div>
				<div className="content">
					<div className="parkImg">
						<img
							src={this.props.imagelink}
							alt={this.props.imagename}
						/>
					</div>
					<div className="description">
						<p> {this.props.desc} </p>
					</div>
				</div>
			</div>
		);
	}
}
