import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { cancelRes } from '../actions/reservation_actions';
import { openModal } from '../actions/modal_actions';

const mapDispatchToProps = (dispatch) => ({
    cancelRes: (id) => dispatch(cancelRes(id))
    // openModal: (modal, review) => dispatch(openModal(modal, review))
});

class ReservationIndexItems extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    
}