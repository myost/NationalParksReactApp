import React from 'react';
import SearchPark from './searchParks';
import SearchRegion from './searchRegion';

class Search extends React.Component {
    constructor(){
      super()
      this.state = { data: null };
    }


    render(){
       const regions = {
            data:{
                states: [
                    {code: "AK", name:"Alaska"}, {code: "AL", name:"Alabama"}, {code: "AR", name:"Arkansas"}, 
                    {code: "AZ", name:"Arizona"}, {code: "CA", name:"California"}, {code: "CO", name:"Colorado"}, 
                    {code: "CT", name:"Connecticut"}, {code: "DE", name:"Delaware"}, 
                    {code: "FL", name:"Florida"}, {code: "GA", name:"Georgia"}, {code: "HI", name:"Hawaii"}, 
                    {code: "IA", name:"Iowa"}, {code: "ID", name:"Idaho"}, {code: "IL", name:"Illinois"}, 
                    {code: "IN", name:"Indiana"}, {code: "KS", name:"Kansas"}, {code: "KY", name:"Kentucky"}, 
                    {code: "LA", name:"Louisiana"}, {code: "MA", name:"Massachusetts"}, {code: "MD", name:"Maryland"}, 
                    {code: "ME", name:"Maine"}, {code: "MI", name:"Michigan"}, {code: "MN", name:"Minnesota"}, 
                    {code: "MO", name:"Missouri"}, {code: "MS", name:"Mississippi"}, {code: "MT", name:"Montana"}, 
                    {code: "NC", name:"North Carolina"}, {code: "ND", name:"North Dakota"}, {code: "NE", name:"Nebraska"},
                    {code: "NH", name:"New Hampshire"}, {code: "NJ", name:"New Jersey"}, {code: "NM", name:"New Mexico"}, 
                    {code: "NV", name:"Nevada"}, {code: "NY", name:"New York"}, {code: "OH", name:"Ohio"}, 
                    {code: "OK", name:"Oklahoma"}, {code: "OR", name:"Oregon"}, {code: "PA", name:"Pennsylvania"}, 
                    {code: "RI", name:"Rhode Island"}, {code: "SC", name:"South Carolina"},
                    {code: "SD", name:"South Dakota"}, {code: "TN", name:"Tennessee"}, {code: "TX", name:"Texas"}, 
                    {code: "UT", name:"Utah"}, {code: "VA", name:"Virginia"}, {code: "VT", name:"Vermont"}, 
                    {code: "WA", name:"Washington"}, {code: "WI", name:"Wisconsin"}, 
                    {code: "WV", name:"West Virginia"}, {code: "WY", name:"Wyoming"}
                ]
            }
        }
        const parks = {
            data:
                {
                "states": "CO",
                "directionsInfo": "7 miles north on CO Highway 347 from the intersection with U.S. Highway 50 east of Montrose",
                "directionsUrl": "http://www.nps.gov/blca/planyourvisit/directions.htm",
                "url": "https://www.nps.gov/blca/index.htm",
                "weatherInfo": "Today's Weather: http://www.weather.com/weather/today/l/NPBLCA:13:US\n\nCLIMATE\nWeather can vary greatly throughout the day. Summer daytime temperatures range between 55 to 90F (13 to 32C), nights 45 to 60F (7 to 16C). Winter daytime temperatures range between 15 to 40F (-9 to 4C), nights 10 to 20F (-12 to -6C).\n\nAfternoon thunderstorms are common during the summer. Snow accumulation varies greatly year to year. Layered clothing appropriate for the season is recommended.",
                "name": "Black Canyon Of The Gunnison",
                "latLong": "lat:38.57779869, long:-107.7242756",
                "description": "Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky.",
                "images": [
                    {
                    "credit": "NPS Photo/Lynch",
                    "altText": "Black Canyon near Tomichi Point",
                    "title": "Black Canyon near Tomichi Point",
                    "id": 3402,
                    "caption": "Black Canyon near Tomichi Point",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C81655F-1DD8-B71B-0B4BCFFDB74EE723.jpg"
                    },
                    {
                    "credit": "NPS Photo/Lynch",
                    "altText": "Black Canyon near Painted Wall",
                    "title": "Black Canyon near Painted Wall",
                    "id": 3403,
                    "caption": "Black Canyon near Painted Wall",
                    "url": "https://www.nps.gov/common/uploads/structured_data/3C8166E8-1DD8-B71B-0BDEB9A4EEEED807.jpg"
                    }
                ],
                "designation": "National Park",
                "parkCode": "blca",
                "id": "BDBD573F-97EF-44E7-A579-471679F2C42A",
                "fullName": "Black Canyon Of The Gunnison National Park"
                }

        }
        console.log(this.props);

        return(
            <div className="search">
                <h2>Search for a National Park: </h2>
                <div className="input">
                <div>
                    <select>
                    {regions.data.states.map((region) =>(
                        <option value={region.code}>
                            {region.name}
                        </option>
                    ))}
                    </select>
                </div>
                <div>
                    <SearchPark parkname = {parks.data.name}/>
                </div>
                </div>
            </div>
        )
    }

}
export default Search;
