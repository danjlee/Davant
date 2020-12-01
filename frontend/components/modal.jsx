import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import SignUpFormContainer from './signup_form_container';
import SignInFormContainer from './signin_form_container';
import CreateReviewForm from './create_review_form';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let component;
        
        if(!this.props.payload) {
            return null;
        }
        
        const { modal, review } = this.props.payload;

        switch (modal) {
            case 'signup':
                component = <SignUpFormContainer />;
                break;
            case 'signin':
                component = <SignInFormContainer />;
                break;
            case 'newreview':
                component = <CreateReviewForm review={review}/>;
                break;
            default:
                component = null;
        }

        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-close" onClick={this.props.closeModal}>&times;</div>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        payload: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);