import { RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_USER } from '../actions/session_actions';

const RestaurantReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            return Object.assign({}, action.restaurants);
        case RECEIVE_RESTAURANT:
            return action.payload.restaurant
        case RECEIVE_USER:
            return Object.assign({}, action.payload.restaurants);
        default:
            return state;
    }
};

export default RestaurantReducer;