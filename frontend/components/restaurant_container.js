import { fetchRestaurant } from '../actions/restaurant_actions';
import { fetchFav, createFav, deleteFav } from '../actions/favorite_actions';
import { openModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Restaurant from './restaurant';

const mapStateToProps = (state, ownProps) => {
    const restId = ownProps.match.params.restId
    const restaurant = state.entities.restaurants[restId]
    
    return ({
        restaurant,
        users: state.entities.users,
        currentUserId: state.session.id,
        reservations: state.entities.reservations,
        reviews: state.entities.reviews
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchRestaurant: id => dispatch(fetchRestaurant(id)),
        openModal: modal => dispatch(openModal(modal)),
        fetchFav: id => dispatch(fetchFav(id)),
        createFav: restId => dispatch(createFav(restId)),
        deleteFav: restId => dispatch(deleteFav(restId))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Restaurant));