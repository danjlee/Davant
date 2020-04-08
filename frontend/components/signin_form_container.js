import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../actions/session_actions';
import SignInForm from './signin_form';
import { openModal, closeModal } from '../actions/modal_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'Sign In',
        navLink: <Link to="/signup">Create an Account</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal()),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);