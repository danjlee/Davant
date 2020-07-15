import { fetchRestaurant } from '../actions/restaurant_actions';
import { openModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Restaurant from './restaurant';

const mapStateToProps = state => {
    return ({
        restaurant: state.entities.restaurants,
        currentUserId: state.session.id,
        users: state.entities.users
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchRestaurant: id => dispatch(fetchRestaurant(id)),
        openModal: modal => dispatch(openModal(modal))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Restaurant));