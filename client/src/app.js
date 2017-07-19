import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavBar } from './components';
import { MainView, Detail } from './containers';
import './app.scss';

const api = 'https://api.github.com/search/users?q=tom';

class OddleTestApp extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <NavBar/>
                <Router ref={(router) => window.router = router}>
                    <div style={{marginTop: '64px'}}>
                        <Route exact path='/' component={MainView}></Route>
                        <Route exact path='/detail' component={Detail}></Route>
                    </div>
                </Router>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

export default connect(mapStateToProps)(OddleTestApp);