import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { router } from "next/router";
import { useSession } from 'next-auth/react';
import ProfileDropdown from './profileDropdown';
import { useEffect, useState } from 'react';

const SiteNav = () => {
  const { data, status } = useSession(); 

  if ( status !== 'authenticated'){
    return(
        <Navbar className="nav">
          <Container className='d-flex justify-content-between'>
            <Navbar.Brand onClick={() => {router.push('/')}} style={{color: '#EED7C5'}}>AdoptameUY</Navbar.Brand>
            
            <Nav style={{marginRight: 0}}>
              <Nav.Link className="headerLink" onClick={() => {router.push('/login')}} style={{color: '#EED7C5'}}>Login</Nav.Link>
              <Nav.Link className="headerLink" onClick={() => {router.push('/register')}} style={{color: '#EED7C5'}}>Sign Up</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )
    }
    
    return(
      <Navbar className="nav">
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand onClick={() => {router.push('/dashboard')}} style={{color: '#EED7C5'}}>AdoptameUY</Navbar.Brand>
          
            <Nav style={{marginRight: 0}}>
            <Nav.Link className="headerLink" onClick={() => {router.push('/post')}} style={{color: '#EED7C5'}}>+</Nav.Link>            
            <ProfileDropdown userName={data.user.userName}/>
          </Nav>
        </Container>
      </Navbar>
  )


}
export default SiteNav;