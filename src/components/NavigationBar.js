import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css'

function NavigationBar(){
    return(
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href='#homepage'>Cassie Cassanova</Navbar.Brand>
                <Nav className='ml-auto'>
                    <Nav.Link className='NavLink' href='#homepage'>Home</Nav.Link>
                    <Nav.Link className='NavLink' href='#education'>Education</Nav.Link>
                    <Nav.Link className='NavLink' href='#experience'>Work</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar;