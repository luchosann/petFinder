import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { router } from "next/router";
import ProfileDropdown from './profileDropdown';


const LoggedNav = () => {
    return (
        <Navbar className="nav">
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand onClick={() => {router.push('/dashboard')}} style={{color: '#EED7C5'}}>AdoptameUY</Navbar.Brand>
          
            <Nav style={{marginRight: 0}}>
            <Nav.Link className="headerLink" onClick={() => {router.push('/post')}} style={{color: '#EED7C5'}}>Post</Nav.Link>            
            <ProfileDropdown/>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default LoggedNav;