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
            <Navbar.Collapse className='pata' id="basic-navbar-nav">
              <Nav className="btn-navbar">
                  <Link className='btn-nav' to='/categoria/Comedor'>Comedor</Link>
                  <Link className='btn-nav' to='/categoria/Dormitorio'>Dormitorio</Link>
                  <Link className='btn-nav' to='/categoria/Living'>Living</Link>
                  <Link className='btn-nav' to='/categoria/Aire Libre'>Aire Libre</Link>
                  <Link className='btn-carrito' to='/'><CartWidget /></Link>       
              </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}

export default NavBar