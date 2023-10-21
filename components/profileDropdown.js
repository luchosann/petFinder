import React from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import { signOut } from 'next-auth/react';

function ProfileDropdown(props) {
    return (
        <NavDropdown title={<img style={{width: 20}} alt="Profile Icon" src='/favicon.ico'/>} id="profile-dropdown">
            <Dropdown.Item href={'/profile/' + props.userName}>Mi Perfil</Dropdown.Item>
            <Dropdown.Item href="/settings">Configuración</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => {signOut( {callbackUrl: '/'} )}}> Logout </Dropdown.Item>
        </NavDropdown>
    );
}

export default ProfileDropdown;