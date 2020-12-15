import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFav } from '../actions/favorite_actions';

const mapDispatchToProps = dispatch => ({
    deleteFav: id => dispatch(deleteFav(id))
});

class FavoriteIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, cuisine, location } = this.props.restaurant;

        return (
            <div className="fav-item">
                <div className="fav-thumb">PICTURE HERE</div>

                <div className="fav-item-info">
                    <span className="fav-item-name">{name}</span>
                    <span className="fav-location">{cuisine} {location}</span>
                    <span className="reserve-now">Reserve Now</span>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, mapDispatchToProps)(FavoriteIndexItem));

