// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import ReservationIndexItem from './reserve_index_item';

// class User extends React.Component {
//     constructor(props) {
//         super(props);

//     }

//     componentDidMount() {
//         this.props.fetchAllRes(this.props.currentUserId);
//     }

//     handleClick() {
//         this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
//     }

//     upcomingRes() {
//         let allRes = this.props.reservations;
//         let allUpcoming = [];
//         let today = new Date();

//         allRes.forEach((reservation) => {
//             if(Date.parse(today.toISOString().substring(0, 10)) <= Date.parse(reservation.date)) {
//                 allUpcoming.push(reservations);
//             }
//         });

        
//     }
// }