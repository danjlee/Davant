import React from 'react';
import Modal from './modal';
import GreetingContainer from './greeting_container';
import Home from './home';
import { Route, Switch } from 'react-router-dom';
import RestaurantIndexContainer from './restaurant_index_container';
import RestaurantContainer from './restaurant_container';
import UserContainer from "./user_container";
import { ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="main-body">
        <Modal />
        <header>
            <GreetingContainer />
        </header>
        <div className="main-div">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/restaurants" component={RestaurantIndexContainer} />
                <Route exact path="/restaurants/:restId" component={RestaurantContainer} />
                <ProtectedRoute exact path="/user" component={UserContainer} />
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