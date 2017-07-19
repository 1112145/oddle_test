import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image, Grid } from 'semantic-ui-react';
import { setUserDetail } from '../../actions';
import { SearchBox } from '../../components';
import './style.scss';


const logoLink = 'https://static1.squarespace.com/static/568a1a4c4bf118b4ed6264a3/t/568a231e05f8e23aa29302fa/1499681692304/?format=1500w';

const style = {
    row: { padding: '20px' }
}

class MainView extends Component {
    render() {
        return (
            <div className='main-view'>
                <Grid centered >
                    <Grid.Column computer={8} tablet={6} mobile={16} verticalAlign='middle'>
                        <Grid.Row style={style.row}>
                            <Image className='center' src={logoLink} />
                        </Grid.Row>
                        <Grid.Row style={style.row}>
                            <Container>
                                <SearchBox items={this.props.users} onItemSelect={this.onSelectUser.bind(this)} />
                            </Container>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }

    onSelectUser(user) {
        this.props.dispatch(setUserDetail(user));
        window.router.history.replace('/detail');
    }
}

function mapStateToProps(state) {
    return { users: state.users }
}

export default connect(mapStateToProps)(MainView);