import React from 'react';
import { withRouter } from 'react-router-dom';
import ReservationIndexItem from './reserve_index_item';

class User extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchAllRes(this.props.currentUserId);
    }

    handleClick() {
        this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
    }

    // sortDates(array, descend) {

    // }


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

            </div>
        )
    }
}

export default withRouter(User);