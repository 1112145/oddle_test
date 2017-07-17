import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';

import { SearchBox } from '../../components';

class MainView extends Component {
    render() {
        return (
            <Grid columns={1} centered>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={6} />
                    <Container style={{ marginTop: '20px' }}>
                        <SearchBox items={this.props.users} />

                    </Container>
                    <Grid.Column />
                </Grid.Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users }
}

export default connect(mapStateToProps)(MainView);