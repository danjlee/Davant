import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import Search from './search_bar';

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props);

        this.restaurant_index = this.restaurant_index.bind(this);
    }

    componentDidMount() {
        this.props.searchRestaurants(this.props.location.search.slice(8).split('%20').join(' '));
    }

    restaurant_index() {
        if (this.props.restaurants.length === 0) {
            return (
                <div className="restaurant-search-error">
                    <div>We did not find a match for your search!</div>
                    <p>Sorry, we couldn't find any results.</p>
                </div>
            )
        } else {
            return this.props.restaurants.map((rest, idx) => (
                <RestaurantIndexItem restaurant={rest} key={idx} />
            ));
        }
    }

    render() {
        return (
            <>
                <Search />
                <h3>Best Restaurants</h3>
                <div className="rest-index-container">
                    {this.restaurant_index()}
                </div>
            </>
        )
    }
}

export default RestaurantIndex;