import React, { Component } from 'react';

export default class Parks extends React.Component {
	render (props){
		console.log(this.props.parksList);
		var parkArray = this.props.parksList;
		console.log(this.props.parkIndex);
		var index = this.props.parkIndex;
		var park = parkArray[index];
		console.log(park);
		console.log(park.name);
		return(
			<div className="parks">
				<div className="parkTitle">
					<h1> {park.fullName} </h1>
				</div>
				<div className="content">
					<div className="parkImg">
						<img
							src={park.images[0].url}
							alt={park.images[0].altText}
						/>
					</div>
					<div className="info">
						<h2>Description </h2>
						<div className="description">
							<p> {park.description} </p>
						</div>
						<h2>Weather </h2>
						<div className="weather">
							<p> {park.weatherInfo} </p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
