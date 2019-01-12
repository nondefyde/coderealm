import React from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = ({ title, onClick, isOpen, isloggedIn, username }) => (
    <Navbar color="light" light expand="md">
        <Link to="/" className="nav-link brand-name">{title}</Link>
        <NavbarToggler onClick={onClick}/>
        <Collapse isOpen={isOpen} navbar>
            {!isloggedIn ? 
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/register" className="nav-link">Register</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/login" className="nav-link">Login</Link>
                    </NavItem>
                </Nav> :
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/" className="nav-link">{username}</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/" className="nav-link">Logout</Link>
                    </NavItem>
                </Nav>
            }
        </Collapse>
    </Navbar>
);

export default Header;