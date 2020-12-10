import * as FavoriteAPI from '../util/favorite_api_util';

export const RECEIVE_ALL_FAV = 'RECEIVE_ALL_FAV';
export const RECEIVE_FAV = 'RECEIVE_FAV';
export const DELETE_FAV = 'DELETE_FAV';

const receiveFavs = favorites => ({
    type: RECEIVE_ALL_FAV,
    favorites
});

const receiveFav = favorite = ({
    type: RECEIVE_FAV,
    favorite
});

const removeFav = favorite => ({
    type: DELETE_FAV,
    favorite
});

export const createFav = restId => dispatch => (
    FavoriteAPI.createFav(restId).then( fav => dispatch(receiveFav(fav)))
);

export const fetchFav = id => dispatch => (
    FavoriteApi.fetchFav(id).then( fav => dispatch(receiveFav(fav)))
);

export const fetchFavs = userId => dispatch => (
    FavoriteApi.fetchFavs(userId).then( favs => dispatch(receiveFavs(favs)))
);

export const deleteFav = restId => dispatch => (
    FavoriteApi.deleteFav(restId).then( fav => dispatch(removeFav(fav)))
);

