import React from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import { signOut } from 'next-auth/react';
import Image from "next/image";


function ProfileDropdown(props) {
    return (
        <NavDropdown title={ <Image src='/favicon.ico' alt="Profile icon" width={20} height={20} /> } id="profile-dropdown">
            <Dropdown.Item href={'/profile/' + props.userName}>Mi Perfil</Dropdown.Item>
            <Dropdown.Item href={'/chat'}>Mensajes</Dropdown.Item>
            <Dropdown.Item href="/settings">Configuración</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => {signOut( {callbackUrl: '/'} )}}> Logout </Dropdown.Item>
        </NavDropdown>
    );
}

export default ProfileDropdown;