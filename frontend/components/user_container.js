import { connect } from 'react-redux';
import User from './user';
import {fetchAllRes, cancelRes } from '../actions/reservation_actions';
import { fetchFavs, deleteFav } from '../actions/favorite_actions';

const mapStateToProps = state => ({
    currentUserId: state.session.id,
    reservations: Object.values(state.entities.reservations),
    restaurants: state.entities.restaurants,
    favorites: state.entities.favorites,
    reviews: state.entities.reviews

});

const mapDispatchToProps = dispatch => ({
    fetchAllRes: userId => dispatch(fetchAllRes(userId)),
    cancelRes: reservationId => dispatch(cancelRes(reservationId)),
    fetchFavs: id => dispatch(fetchFavs(id)),
    deleteFav: id => dispatch(deleteFav(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(User);