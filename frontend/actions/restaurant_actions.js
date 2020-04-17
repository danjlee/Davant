import * as RestaurantApiUtil from '../util/restaurant_api_util'

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const DISPLAY_RESTAURANTS = 'DISPLAY_RESTAURANTS';

export const receiveAllRestaurants = restaurants => ({
    type: RECEIVE_ALL_RESTAURANTS,
    restaurants
});

export const receiveRestaurant = payload => ({
    type: RECEIVE_RESTAURANT,
    payload
});

export const displayRestaurants = () => ({
    type: DISPLAY_RESTAURANTS
});

export const fetchAllRestaurants = () => dispatch => {
    dispatch(displayRestaurants());

    return RestaurantApiUtil.fetchAllRestaurants
        .then(restaurants => dispatch(receiveAllRestaurants(restaurants)))
};

export const fetchRestaurant = id => dispatch => {
    dispatch(displayRestaurants());

    return RestaurantApiUtil.fetchRestaurant(id)
        .then(restaurant => dispatch(receiveRestaurant(restaurant)))
};

export const searchRestaurants = keyword => dispatch => {
    dispatch(displayRestaurants());

    return RestaurantApiUtil.searchRestaurants(keyword)
        .then(results => dispatch(receiveAllRestaurants(results)))
};



