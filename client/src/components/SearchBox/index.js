import React, { Component } from 'react';
import _ from 'lodash';

import { Search, Image, Container } from 'semantic-ui-react';

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
            <Search results={this.state.results}  fluid onResultSelect={this.onItemSelect} 
                    onSearchChange={this.onSearch.bind(this)} resultRenderer={this.resultRender}/>
        );
    }

    resultRender({id,avatar_url,login}) {
        return <Search.Result id={id} image={avatar_url} title={login}></Search.Result>
    }

    onSearch(event, data) {
        this.setState({ isLoading: true, value: data.value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.reset()

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = (result) => re.test(result.login);

            this.setState({
                isLoading: false,
                results: _.filter(this.props.items, isMatch),
            })
        }, 500)
    }

    onItemSelect(e,result){
        console.log(result);
    }

    reset() {
        this.setState({ isLoading: false, results: [], value: '' });
    }


}

export default SearchBox;