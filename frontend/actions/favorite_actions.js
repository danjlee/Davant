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

const deleteFav = favorite => ({
    type: DELETE_FAV,
    favorite
});

export const createFav = restId => dispatch => (
    FavoriteAPI.createFav
)