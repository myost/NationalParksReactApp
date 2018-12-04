import React from 'react';
import Search from '../components/search';
import Parks from './parks.js'

class Page extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <Parks />
            </div>
        );
    }
}
export default Page;
