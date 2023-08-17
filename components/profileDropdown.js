import React from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import Logout from './logout';

function ProfileDropdown() {
    return (
        <NavDropdown title={<img style={{width: 20}} alt="Profile Icon" src='/favicon.ico'/>} id="profile-dropdown">
            <Dropdown.Item href="/profile">Mi Perfil</Dropdown.Item>
            <Dropdown.Item href="/settings">Configuración</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item > <Logout/> </Dropdown.Item>
        </NavDropdown>
    );
}

export default ProfileDropdown;