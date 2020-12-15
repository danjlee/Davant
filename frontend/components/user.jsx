import React from 'react';
import { withRouter } from 'react-router-dom';
import ReservationIndexItem from './reserve_index_item';
import FavoriteIndexItem from './favorite_index_item';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.allFavorites = this.allFavorites.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllRes(this.props.currentUserId);
        this.props.fetchFavs(this.props.currentUserId);
    }

    handleClick() {
        this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
    }

    allFavorites() {
        let favs = this.props.favorites;

        if(Object.keys(favs).length === 0) {
            return (
                <div>No favorites</div>
            )
        } else {
            return Object.values(favs).map((fav, idx) => (
                <FavoriteIndexItem restaurant={fav.restaurant} fav={fav} key={idx} />
            ));
        }
    }


    upcomingRes() {
        let upcoming = [];
        let res = this.props.reservations;
        let today = new Date();

        res.forEach(reservation => {
            if (Date.parse(today.toISOString().substring(0, 10)) <= Date.parse(reservation.date)) {
                upcoming.push(reservation);
            }
        });

        // upcoming = this.sortDates(upcoming, false);

        if (upcoming.length !== 0) {
            return upcoming.map((res, i) => (
                <ReservationIndexItem restaurant={res.restaurant} reservation={res} cancel={true} key={i} />
            ));
        } else {
            return (
                <div className="no-res">No Upcoming Reservations.</div>
            )
        }
    }

    render() {
        return (
            <div className="user-show-container">
                <div className="res-index">
                    <div className="upcoming-res-container">
                        <h1>Upcoming Reservations</h1>
                        {this.upcomingRes()}
                    </div>
                </div>

                <div>
                    <h1>Favorite Restaurants</h1>
                    {this.allFavorites()}
                </div>

            </div>
        )
    }
}

export default withRouter(User);