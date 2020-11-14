import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_ALL_RESTAURANTS} from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RESTAURANT:
            return Object.assign({}, action.reviews);
        case RECEIVE_ALL_RESTAURANTS:
            return Object.assign({}, action.reviews);
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.review.id]: action.review });
        case REMOVE_REVIEW:
            let newState = Object.assign({}, state);
            delete newState[action.review.id];
            return newState;
        default:
            return state;
            
    }
};

export default ReviewsReducer;