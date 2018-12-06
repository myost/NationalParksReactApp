import React, { Component } from 'react';

export default class Parks extends React.Component {
	render (){
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
						<p> {this.props.descript} </p>
					</div>
				</div>
			</div>
		);
	}
}