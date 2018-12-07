import React from 'react';
import ParkTitle from './parkTitle';
import ParkImg from './parkIMG';
import ParkDesc from './parkDescription';

export default class Parks extends React.Component {
	render (){
		return(
			<div className="parks">
				<ParkTitle title="Rocky Mountain National Park" />
				<div className="content">
					<ParkImg imagelink="https://rockymountainnationalpark.com/sites/all/themes/rmnp/images/fall-foliage-rocky-mountain-national-park.jpg" />
					<ParkDesc descript="Lorem ipsum dolor amet umami laboris microdosing copper mug cillum, ethical cornhole. Deserunt XOXO vaporware, kombucha drinking vinegar cronut street art crucifix. Single-origin coffee glossier blue bottle jean shorts iPhone echo park, iceland stumptown laboris tofu dreamcatcher vape. Nulla messenger bag everyday carry fingerstache, asymmetrical try-hard enim minim chillwave cloud bread est. Locavore eiusmod deserunt, shaman pariatur normcore poutine wayfarers semiotics vexillologist quis XOXO poke. Enim velit narwhal sustainable proident kinfolk jean shorts. Tote bag farm-to-table yuccie, kogi post-ironic fugiat in cillum." />
				</div>
			</div>
		);
	}
}
