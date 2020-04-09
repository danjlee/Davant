import React from 'react';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    demoSubmit(e) {
        e.preventDefault();
        this.props.login({ email: 'guest@davant.com', password: 'guestlogin' })
            .then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <>
            {this.props.errors.map((error, i) => (
                <li key={`error-${i}`} className="session-error">
                    {error}
                </li>
            ))}
            </>
        )
    }

    render() {
        return (
            <>
                <div className="signin-form-container">
                    <form onSubmit={this.handleSubmit} className="session-form-box">
                        <h3>Please sign in</h3>
                        <hr className="session-hr"/>
                        {this.renderErrors()}
                        <div className="session-form">
                            <input id="user-email" type="text" value={this.state.email} onChange={this.update('email')} placeholder='Email'/>
                            <input id="user-password" type="password" value={this.state.password} onChange={this.update('password')} placeholder='Password' />
                            <input id="submit-button" className="submit-button" type="submit" value={this.props.formType}/>
                        
                        </div>
                        <hr className="session-hr" />
                        <div className="to-sign-up">
                            <p>New to D'avant?
                                <button type="button" onClick={this.props.openModal}>Create an account</button>
                            </p>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default SignInForm;