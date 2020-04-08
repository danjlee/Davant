import React from 'react';
import Modal from './modal';
import GreetingContainer from './greeting_container';

const App = () => (
    <div className="main-body">
        <Modal />
        <header>
            <h1>D'avant</h1>
            <GreetingContainer />
        </header>
        <div className="main-div">
        </div>
    </div>
);

export default App;