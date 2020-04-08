import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const links = () => (
            <span className="nav-right">
                <button id="sign-up" onClick={() => this.props.openModal('signup')}>Sign up</button>
                <button id="sign-in" onClick={()=> this.props.openModal('signin')}>Sign in</button>
            </span>
        );

        const greet = () => (
            <span className="nav-right">
                <div className="container">
                    <h2 id="greeting">Hi, {this.props.currentUser.fname}</h2>

                    <div className="container">
                        <button id="sign-out" onClick={this.props.logout}>Sign out</button>
                    </div>
                </div>
            </span>
        );

        return (
            <div className="navbar">
                <span className="nav-left">
                    <Link to="/" className="home-link">
                        <span id="logo"></span>
                    </Link>
                </span>
                {this.props.currentUser ? greet() : links()}
            </div>
        )
    }
}

export default Greeting;