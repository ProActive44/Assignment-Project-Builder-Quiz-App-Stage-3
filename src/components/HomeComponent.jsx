import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeComponent extends Component {
    
    render() {
        return (
            <div>
                <h1>Quiz App</h1>
                <Link to={'/game'}>Play</Link>
            </div>
        );
    }
}

export default HomeComponent;