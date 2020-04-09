import { connect } from 'react-redux';
import { signup, login } from '../actions/session_actions';
import SignUpForm from './signup_form';
import { openModal, closeModal } from '../actions/modal_actions';
import { clearErrors } from '../actions/session_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'Create Account'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal('login')),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);