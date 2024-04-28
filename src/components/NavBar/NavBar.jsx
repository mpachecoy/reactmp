import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '..//Media/avatar 2-01 sin fondo.png'
import { Link } from 'react-router-dom';


const NavBar = () => { 
  return (
        <Navbar expand="lg" className="">
        <Container className='menu'>
            <Link to='/'><img className='logo' src= {logo} alt="" /></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='nav-collapse' id="basic-navbar-nav">
              <Nav className="btn-navbar">
                  <Link className='btn-nav btn btn-outline-secondary' to='/categoria/Comedor'>Comedor</Link>
                  <Link className='btn-nav btn btn-outline-secondary' to='/categoria/Dormitorio'>Dormitorio</Link>
                  <Link className='btn-nav btn btn-outline-secondary' to='/categoria/Living'>Living</Link>
                  <Link className='btn-nav btn btn-outline-secondary' to='/categoria/Aire Libre'>Aire Libre</Link>
                  <Link className='btn-carrito btn btn-outline-secondary' to='/'><CartWidget /></Link>       
              </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}

export default NavBar