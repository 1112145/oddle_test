import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { setUsers } from './actions';
import { MainView, Detail } from './containers';
import './app.scss';

const api = 'https://api.github.com/search/users?q=tom';

class OddleTestApp extends Component {

    constructor(props) {
        super(props);

        axios.get(api).then((result) => {
            this.props.dispatch(setUsers(result.data.items));
        });
    }


    render() {
        return (
            <Router ref={(router)=> window.router = router}>
                <div>
                    <Route exact path='/' component={MainView}></Route>
                    <Route exact path='/detail' component={Detail}></Route>
                </div>
            </Router>

        );
    }
}

export default connect()(OddleTestApp);