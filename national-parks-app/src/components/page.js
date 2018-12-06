import React from 'react';
import Search from '../components/search';
import Parks from './parks.js'

class Page extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <Parks 
                	title="Rocky Mountain National Park" 
                	imagelink = "https://rockymountainnationalpark.com/sites/all/themes/rmnp/images/fall-foliage-rocky-mountain-national-park.jpg"
                	imagename = "rocky mountain national park"
                	desc = "Lorem ipsum dolor amet kombucha migas hot chicken, trust fund 3 wolf moon kogi man braid biodiesel austin letterpress woke air plant skateboard. Kickstarter +1 hexagon brunch af poke pabst kale chips echo park viral umami flannel mlkshk pork belly paleo. Kinfolk knausgaard health goth DIY XOXO, umami narwhal etsy migas. Salvia sriracha 3 wolf moon flexitarian scenester, williamsburg whatever listicle venmo echo park pinterest. Squid brunch tote bag bicycle rights you probably haven't heard of them fixie thundercats slow-carb vice kickstarter butcher church-key gluten-free skateboard woke. Slow-carb live-edge intelligentsia pabst hella kitsch green juice portland photo booth cray tumblr raw denim la croix wayfarers twee. Selvage pabst next level kale chips gluten-free."
          		/>
            </div>
        );
    }
}
export default Page;
