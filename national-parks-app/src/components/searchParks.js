import React from 'react';

class SearchPark extends React.Component {

    render(){

        console.log(this.props.parkname);

        return(
            <div>
                {this.props.parkname}
            </div>
        )
    }

}
export default SearchPark;
