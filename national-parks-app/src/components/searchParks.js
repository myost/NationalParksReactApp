import React from 'react';

class SearchPark extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.data) {
      console.log(this.props);
    }
    console.log(this.props.data.parks);
    return (
      <>
        <p>hello</p>
      </>
    );
  }
}
export default SearchPark;
