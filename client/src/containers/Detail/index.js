import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image, Grid } from 'semantic-ui-react';

class Detail extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column computer={8} tablet={6} mobile={16} verticalAlign='middle'>
                    <Grid.Row>
                        <Image src={this.props.detail.avatar_url} />
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.user
    }
}

export default connect(mapStateToProps)(Detail);