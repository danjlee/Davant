import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchRestaurants } from '../actions/restaurant_actions';




const mapDispatchToProps = dispatch => ({
    searchRestaurants: keyword => dispatch(searchRestaurants(keyword))
});

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    areaSearch(keyword) {
        this.props.searchRestaurants(keyword)
            .then(() => this.props.history.push({
                pathname: '/restaurants',
                search: `?search=${keyword}`
            }));
    }

    render() {
        return(
            <>
                <div className='home'>
                    <h1>Find your table for any occasion</h1>
                    <div className='home-image'></div>
                </div>

                <h3 className="featured-head">Featured Areas</h3>
                <div className="featured-areas">
                    <div className="featured-nyc">New York Area</div>
                    <div className="featured-la">Los Angeles</div>
                    <div className="featured-chicago">Chicago</div>
                    <div className="featured-sf">San Francisco</div>
                    <div className="featured-miami">Miami</div>
                    <div className="featured-vegas">Las Vegas</div>
                </div>

                <h3 className="featured-int-head">Featured International Areas</h3>
                <div className="featured-int">
                    <div className="featured-london">London, UK</div>
                    <div className="featured-tokyo">Tokyo, JP</div>
                    <div className="featured-sydney">Sydney / NSW, AU</div>
                    <div className="featured-berlin">Berlin, DE</div>
                    <div className="featured-mexico">Mexico City, MX</div>
                    <div className="featured-deublin">Dublin, IE</div>
                </div>

            </>
        );
    }
};

export default withRouter(connect(mapDispatchToProps)(Home));