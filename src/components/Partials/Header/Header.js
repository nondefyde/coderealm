import React from 'react';
import { Collapse, Nav, Navbar,
	NavbarToggler, NavItem,
	UncontrolledDropdown,
	DropdownMenu, DropdownItem,
	DropdownToggle
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = ({email, title, onClick, isOpen, isLoggedIn, handleClick}) => {
	return (
		<Navbar color="light" light expand="md">
			<Link to="/" className="nav-link brand-name">{title}</Link>
			<NavbarToggler onClick={onClick}/>
			<Collapse isOpen={isOpen} navbar>
				{!isLoggedIn ?
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Link to="/register" className="nav-link">Register</Link>
						</NavItem>
						<NavItem>
							<Link to="/login" className="nav-link">Login</Link>
						</NavItem>
					</Nav> :
					<Nav className="ml-auto" navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								{email}
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									<Link to="/" className="nav-link">Profile</Link>
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									<Link to="/" className="nav-link">Logout</Link>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				}
			</Collapse>
		</Navbar>
	);
};

export default Header;
