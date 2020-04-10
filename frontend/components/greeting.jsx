import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userMenu: false
        }

        this.showDropMenu = this.showDropMenu.bind(this);
        this.hideDropMenu = this.hideDropMenu.bind(this);
    }

    showDropMenu(e) {
        e.preventDefault();
        this.setState({ userMenu: true }, () => {
            document.addEventListener('click', this.hideDropMenu);
        });
    }

    hideDropMenu() {
        this.setState({ userMenu: false}, () => {
            document.removeEventListener('click', this.hideDropMenu);
        });
    }

    handleUserToggle() {
        this.setState({ userMenu: !this.state.userMenu });
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
                    <span className="user-toggle" onClick={this.showDropMenu}>
                        <h2 id="greeting">Hi, {this.props.currentUser.fname}</h2>
                        <span id="down-arrow">
                            <img src={window.downarrow} />
                        </span>
                    </span>
                    {this.state.userMenu && (
                        <div className="container">
                            <ul className="dropdown">
                                <li>My Profile</li>
                                <li>My Dining History</li>
                                <li>My Saved Restaurants</li>
                                <li onClick={this.props.logout}>Sign out</li>
                            </ul>
                        </div>
                    )}
                </div>
            </span>
        );

        return (
            <div className="navbar">
                <span className="nav-left">
                    <Link to="/" className="home-link">
                        <span id="logo">
                            <img src={window.logo} />
                        </span>
                    </Link>
                </span>
                {this.props.currentUser ? greet() : links()}
            </div>
        )
    }
}

export default Greeting;