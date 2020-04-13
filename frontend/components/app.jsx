import React from 'react';
import Modal from './modal';
import GreetingContainer from './greeting_container';

const App = () => (
    <div className="main-body">
        <Modal />
        <header>
            <GreetingContainer />
        </header>
        <div className="main-div">
        </div>
        <footer>
            <h5>Hello</h5>
        </footer>
    </div>
);

export default App;