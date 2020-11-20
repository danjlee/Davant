import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { cancelRes } from '../actions/reservation_actions';
import { openModal } from '../actions/modal_actions';

const mapDispatchToProps = (dispatch) => ({
    cancelRes: (id) => dispatch(cancelRes(id))
    // openModal: (modal, review) => dispatch(openModal(modal, review))
});

class ReservationIndexItems extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    handleClick() {
        this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
    }

    cancel(e) {
        e.preventDefault();
        this.props.cancelRes(this.props.reservation.id);
    }

    cancelCheck() {
        return this.props.cancel ? (<button className="res-cancel-btn" onClick={this.cancel}>Cancel Reservation</button>) : (<></>)
    }

    render() {
        if (!this.props.restaurant || !this.props.reservation) return null;

        const { name, address } = this.props.restaurant;
        const {date, time, party_size } = this.props.reservation;
        debugger;
        return  (
            <div className="res-index-item">
                <div className="res-item-info">
                    <span className="res-item-name" onClick={this.handleClick}>{name}</span>
                    <span className="res-item-address">{address}</span>
                    <span className="res-item-time">{date} at {time}</span>
                    <span className="res-item-party">For party of {party_size}</span>
                    {this.cancelCheck()}
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, mapDispatchToProps)(ReservationIndexItems));