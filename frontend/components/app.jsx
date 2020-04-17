import React from 'react';
import Modal from './modal';
import GreetingContainer from './greeting_container';
import Home from './home';
import { Route, Switch } from 'react-router-dom';

const App = () => (
    <div className="main-body">
        <Modal />
        <header>
            <GreetingContainer />
        </header>
        <div className="main-div">
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
        <footer>
            <h5>JOIN US ON</h5>
            <div className="footer-links">
                <a href="https://github.com/danjlee" id="github" >
                    <img src={window.github} />
                </a>
            </div>
        </footer>
    </div>
);

export default App;