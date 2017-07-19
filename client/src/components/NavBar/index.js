import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';

class NavBar extends Component {
    render() {
        return (
            <Menu fixed='top' inverted borderless>
                <Menu.Item>
                    <Image onClick={()=>{ window.router.history.replace('/')}}
                        width='64px'
                           src='https://static1.squarespace.com/static/568a1a4c4bf118b4ed6264a3/t/568a231e05f8e23aa29302fa/1499681692304/?format=1500w' />
                </Menu.Item>
            </Menu>
        );
    }
}

export default NavBar;