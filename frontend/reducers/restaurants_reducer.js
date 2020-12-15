import { RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_FAV, DELETE_FAV } from "../actions/favorite_actions";

const RestaurantsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
      case RECEIVE_ALL_RESTAURANTS:
        return Object.assign({}, action.restaurants);
      case RECEIVE_RESTAURANT:
        return Object.assign({}, action.payload.restaurant);
      case RECEIVE_FAV:
        return Object.assign({}, oldState, { favorited: true });
      case DELETE_FAV:
        return Object.assign({}, oldState, { favorited: false });
      case RECEIVE_CURRENT_USER:
        return Object.assign({}, action.currentUser.restaurants);
      default:
        return oldState;
    }
};

export default RestaurantsReducer;