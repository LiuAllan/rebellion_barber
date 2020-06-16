// import Navbar from './Navbar';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.jpg';

// Styled Component
const StyledHeader = styled.header`
	img {
		width: 15%;
	}

	.bg-dark {
		background-color:#333 !important;
	}

	nav {
		margin: 0;
		padding: 0;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		font-family: 'Raleway';
	}

	.navbar-brand {
		margin: 0;
		padding: 0;
	}

`;


class Header extends React.Component
{
	render()
	{
		return (
			<StyledHeader>
				<Navbar 
					collapseOnSelect 
					expand="lg" 
					bg="dark" 
					variant="dark"
					fixed="top"
				>
					<Navbar.Brand href="#home">
						<img
							src={logo}
							alt=""
						/>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					  	<Navbar.Collapse id="responsive-navbar-nav">
					    	<Nav className="mr-auto"/>
					    		<Nav>
							      <Nav.Link href="#barbers">Barbers</Nav.Link>
							      <Nav.Link href="#services">Services</Nav.Link>
							      <Nav.Link href="#hours">Hours</Nav.Link>
							      <Nav.Link href="#shop">Shop</Nav.Link>
							      <Nav.Link href="#contact">Contact</Nav.Link>
					    		</Nav>
					</Navbar.Collapse>
				</Navbar>
			</StyledHeader>
		);
	}
}


export default Header;