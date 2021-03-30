import React, {useState} from 'react';
import {Navbar, Nav, Button, Container, Modal, Form, NavbarBrand} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ball from '../img/tile.png';
import redball from '../img/redball.png';

import styled from 'styled-components';

const Styles=styled.div `
    a, .navbar-brand .navbar-nav .nav-link{
        color:#adb1b8;
        &:hover{
            color:white;
        }
    }`

export default function NaviBar() {
        return (
            <Styles>
            <Navbar bg='dark' expand='lg' variant='dark'>
                <Container>

                    <Navbar.Brand>
                        <img width={'80px'} src={redball}/>Football
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse>
                        <Nav className='mr-auto'>
                            <Nav.Link><Link to='/'>Leag</Link></Nav.Link>
                            <Nav.Link><Link to='/team'>Team</Link></Nav.Link>
                            <Nav.Link><Link to='/calendarLeag'>CalendarLeag</Link></Nav.Link>
                            <Nav.Link><Link to='/calendarTeam'>CalendarTeam</Link></Nav.Link>
                        </Nav>
                        <Nav>
                        <img width={'40px'} src={ball}/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
              
            </Navbar>
            </Styles>
        );
    }
