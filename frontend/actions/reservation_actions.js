import * as ReservationAPI from '../util/reservation_api_util';

export const RECEIVE_RES = 'RECEIVE_RES';
export const RECEIVE_ALL_RES = 'RECEIVE_ALL_RES';
export const DELETE_RES = 'DELETE_RES';

export const receiveRes = reservation => ({
    type: RECEIVE_RES,
    reservation
});

export const receiveAllRes = payload => ({
    type: RECEIVE_ALL_RES,
    payload
});

export const deleteRes = reservation => ({
    type: DELETE_RES,
    reservation
});

export const fetchRes = id => dispatch => (
    ReservationAPI.fetchReservation(id).then(res => dispatch(receiveRes(res)))
);

export const fetchAllRes = userId => dispatch => (
    ReservationAPI.fetchAllReservation(userId).then(res => dispatch(receivAllRes(res)))
);

export const createRes = res => dispatch => (
    ReservationAPI.createReservation(res).then(res => dispatch(receiveRes(res)))
);

export const cancelRes = id => dispatch => (
    ReservationAPI.deleteReservation(id).then(res => dispatch(deleteRes(res)))
);
