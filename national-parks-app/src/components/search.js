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
                    "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",
                    "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
                    "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",
                    "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",
                    "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"
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
                        {regions.data.states.map((region) =>(
                            <button>
                                <SearchRegion regionname={region} />
                            </button>
                            ))
                        }
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
