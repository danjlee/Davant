import { DISPLAY_RESTAURANTS, RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANTS } from '../actions/restaurant_actions';

const DisplayReducer = ( state = false, action) => {
    Object.freeze(state);
    switch(action.type) {
        case LOAD_RESTAURANTS:
            return true;
        case RECEIVE_ALL_RESTAURANTS:
            return false;
        case RECEIVE_RESTAURANT:
            return false;
        default:
            return state;
    }
};

export default DisplayReducer;
