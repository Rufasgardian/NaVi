import React from 'react';
import { Menu } from 'semantic-ui-react';


const Header = () => {
    
    return (
            <Menu>

                <Menu.Item>
                    Natus Vincere
                </Menu.Item>

                <Menu.Menu position="right">

                    <Menu.Item>New request</Menu.Item>
                    
                    <Menu.Item>All requests</Menu.Item>

                    <Menu.Item>Log out</Menu.Item>
                </Menu.Menu>
            </Menu>
    );

};

export default Header;