import React, { Component } from 'react';
import styled from 'styled-components';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ball from '../img/redball.png';




const Styles=styled.div`
    a, .navbar-brand, .navbar-nav .nav-link{
        color:#adb1b8;
        &:hover{
            color:white;
        }
    }
`

export default class Header extends Component {
  render() {
    return (
      <> 
      <Styles>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>
            <Navbar.Brand ><Link to='/home'>
                <img    
                    height="30"
                    width="30"
                    className="d-inline-block align-top"
                    alt="Logo" 
                    src={ball}
                />Football</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='mr-auto'>
                <Nav.Link><Link to='/team'>Team</Link></Nav.Link>
                <Nav.Link><Link to='/leag'>Leag</Link></Nav.Link>
                <Nav.Link><Link to='/Calendarleag'>CalendarLeag</Link></Nav.Link>
                <Nav.Link><Link to='/Calendarteam'>CalendarTeam</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </Styles>
      </>
    )
  }
}