import React from 'react';
import SearchPark from './searchParks';
import SearchRegion from './searchRegion';
import Parks from './parks.js'

class Search extends React.Component {
    constructor(){
      super()
      this.state = { data: null };

      this.getData=this.getData.bind(this);
    }

    componentWillMount(){
        fetch('https://developer.nps.gov/api/v1/parks?limit=20&q=NAtional%20Park&fields=images&stateCode=AK&api_key=StrO7VmO29V3pT2CoZAkdAHxzJPNRjTa2QDpG37V')
        .then(res=>res.json())
        .then((data)=>{this.setState({data})});
    }

    getData(e){
        console.log("hello");
        var selector = document.getElementById("regionSelect");
        var selectedIndex = selector.selectedIndex;
        var code = selector.options[selectedIndex].value;
        console.log(code);

        fetch('https://developer.nps.gov/api/v1/parks?limit=20&q=NAtional%20Park&fields=images&stateCode='+code+'&api_key=StrO7VmO29V3pT2CoZAkdAHxzJPNRjTa2QDpG37V')
        .then(res=>res.json())
        .then((data)=>{this.setState({data})});
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

        console.log(this.props);
        console.log(this.state);

        const {data} = this.state;
        if (data === null){
            return null;
        }
        return(
            <div>
            <div className="search">
                <h2>Search for a National Park: </h2>
                <div className="input">
                <div>
                    <select id="regionSelect" onChange={this.getData}>
                    {regions.data.states.map((region, index) =>(
                        <option key={index} value={region.code}>
                            {region.name}
                        </option>
                    ))}
                    </select>
                </div>
                <div>
                    <div>
                    <select id="parkSelect">
                    {this.state.data.data.map((park, index) =>(
                        <option key={index} value={park.name}>
                            {park.name}
                        </option>
                    ))}
                    </select>
                </div>
                </div>
                </div>
            </div>
            <Parks />
            </div>
        )
    }

}
export default Search;
