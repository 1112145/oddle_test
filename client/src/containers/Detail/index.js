import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image, Grid, Divider, Header, List, Label } from 'semantic-ui-react';
import _ from 'lodash';

import axios from 'axios';

const style = {
    avatar: { maxWidth: '128px' },
    listItem: { padding: '10px' }
}



class Detail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            detail: this.props.detail,
            repositories: []
        }
    }

    render() {
        return (
            <div className='center'>
                <Grid className='center' centered verticalAlign='middle'>
                    <Grid.Column computer={8} tablet={6} mobile={16} verticalAlign='middle'>
                        <Grid.Row centered>
                            <Image className='center'
                                shape='circular'
                                style={style.avatar}
                                src={this.state.detail.avatar_url || 'https://image.flaticon.com/icons/svg/145/145843.svg'} />
                            <Header as='h1' color='teal' inverted>{this.state.detail.login || 'Nguyen Dang Khoa'}</Header>
                            <Divider horizontal inverted>INFORMATION</Divider>
                            <Container>{this.renderInformation()}</Container>
                            <Divider horizontal inverted>REPOSITORIES</Divider>
                            <Container>{this.renderRepositories()}</Container>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }

    renderInformation() {
        var keys = Object.keys(this.state.detail);
        var items = [];
        keys.forEach((key, index) => {
            items.push(<List.Item key={index} verticalAlign='middle' style={style.listItem}>
                <List.Icon name="circle" inverted color='green' />
                <List.Content >
                    <Header as='h3' color='yellow' textAlign='left'>{key.toUpperCase()}</Header>
                    <Header as='h5' color='teal' textAlign='left'>{(!_.isEmpty(this.state.detail[key])) ? this.state.detail[key] : 'NONE'}</Header>
                </List.Content>
            </List.Item>)
        });

        return <List>{items}</List>

    }

    renderRepositories() {
        var items = [];
        this.state.repositories.forEach((item, index) => {
            items.push(<List.Item key={index} verticalAlign='middle' style={style.listItem}>
                <List.Icon name='github' inverted></List.Icon>
                <List.Content as='a'>{item.clone_url}</List.Content>
            </List.Item>);
        });
        return <List>{items}</List>
    }

    componentDidMount() {
        axios.get(this.props.detail.repos_url).then(function (res) {
            this.setState({ repositories: res.data });
        }.bind(this));
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.user
    }
}

export default connect(mapStateToProps)(Detail);