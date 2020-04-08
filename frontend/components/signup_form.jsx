import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            location: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
            this.props.processForm(this.state)
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
        );
    }

    render() {
        return (
            <>
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="session-form-box">
                    <h3>Welcome to D'avant</h3>
                    <hr className="session-hr"/>
                    {this.renderErrors()}
                    <div className="session-form">
                        <input type="text" value={this.state.fname} onChange={this.update('fname')} placeholder='First Name *' />
                        <input type="text" value={this.state.lname} onChange={this.update('lname')} placeholder='Last Name *' />
                        <input type="text" value={this.state.email} onChange={this.update('email')} placeholder='Enter email *' />
                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder='Enter password *' />
                        <input type="text" value={this.state.location} onChange={this.update('location')} placeholder='Primary Dining Location *' />

                        <input className="submit-button" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
            </>
        );
    }
}

export default SignUpForm;