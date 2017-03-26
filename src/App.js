import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/page2">About</Link></li>
                        </ul>
                        <Route exact path="/" component={Page1}/>
                        <Route path="/page2" component={Page2}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
