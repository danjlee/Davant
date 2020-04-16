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
                    <div className='home-image'>
                        <img src={window.home} />
                    </div>
                </div>

                <h3 className="featured-head">Featured Areas</h3>
                <div className="featured-areas">
                    <div className="featured-nyc">New York Area
                        <img src={window.nyc}/>
                    </div>
                    <div className="featured-la">Los Angeles
                        <img src={window.la} />
                    </div>
                    <div className="featured-chicago">Chicago
                        <img src={window.chicago} />
                    </div>
                    <div className="featured-sf">San Francisco
                        <img src={window.sf} />
                    </div>
                    <div className="featured-miami">Miami
                        <img src={window.miami} />
                    </div>
                    <div className="featured-vegas">Las Vegas
                        <img src={window.vegas} />
                    </div>
                </div>

                <h3 className="featured-int-head">Featured International Areas</h3>
                <div className="featured-int-areas">
                    <div className="featured-london">London, UK
                        <img src={window.london} />
                    </div>
                    <div className="featured-tokyo">Tokyo, JP
                        <img src={window.tokyo} />
                    </div>
                    <div className="featured-sydney">Sydney / NSW, AU
                        <img src={window.sydney} />
                    </div>
                    <div className="featured-berlin">Berlin, DE
                        <img src={window.berlin} />
                    </div>
                    <div className="featured-mexico">Mexico City, MX
                        <img src={window.mexico} />
                    </div>
                    <div className="featured-dublin">Dublin, IE
                        <img src={window.dublin} />
                    </div>
                </div>

            </>
        );
    }
};

export default withRouter(connect(mapDispatchToProps)(Home));