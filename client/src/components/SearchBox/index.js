import React, { Component } from 'react';
import _ from 'lodash';

import { Search, Container } from 'semantic-ui-react';


class SearchBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            results: [],
            value: ""
        }
    }

    componentWillMount() {
        this.reset();
    }

    render() {
        return (
            <Search input={{ style: { width: '100%' } }}
                loading={this.state.isLoading}
                style={this.props.style}
                results={this.state.results}
                placeholder='Enter an username'
                onResultSelect={this.onItemSelect.bind(this)}
                onSearchChange={this.onSearch.bind(this)}
                resultRenderer={this.resultRender.bind(this)} fluid />
        );
    }

    resultRender({ id, avatar_url, login }) {
        return <Search.Result id={id} image={avatar_url} title={login}></Search.Result>
    }

    onSearch(event, data) {
        this.setState({ isLoading: true, value: data.value })
        if (this.props.onSearch) this.props.onSearch.call(this, data);
    }

    intellisense = function () {
        const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
        const isMatch = (result) => re.test(result.login);

        this.setState({
            isLoading: false,
            results: _.filter(this.props.items, isMatch),
        })
    }

    onItemSelect(event, data) {
        if (this.props.onItemSelect) this.props.onItemSelect.call(this, data.result);
    }

    reset() {
        this.setState({ isLoading: false, results: [], value: '' });
    }


}

export default SearchBox;