import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image, Grid, Divider, Header, List } from 'semantic-ui-react';

import axios from 'axios';

const style = {
    avatar: { maxWidth: '128px' },
    listItem: { padding: '10px'}
}



class Detail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            detail: this.props.detail,
            repositories: [{ clone_url: "http://example.com" }, { clone_url: "http://example.com" }, { clone_url: "http://example.com" },]
        }
    }

    render() {
        return (
            <div>
                <Grid centered verticalAlign='middle'>
                    <Grid.Column computer={8} tablet={6} mobile={16} verticalAlign='middle'>
                        <Grid.Row>
                            <Image className='center'
                                shape='circular'
                                style={style.avatar}
                                src={this.state.detail.avatar_url || 'https://image.flaticon.com/icons/svg/145/145843.svg'} />
                            <Header as='h1' color='teal' inverted>{this.state.detail.login || 'Nguyen Dang Khoa'}</Header>
                        </Grid.Row>
                        <Divider horizontal inverted>INFORMATION</Divider>
                        <Divider horizontal inverted>REPOSITORIES</Divider>
                        <Container>{this.renderRepositories()}</Container>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }

    renderInformation() {

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