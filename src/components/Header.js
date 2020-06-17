// import Navbar from './Navbar';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy';
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

	.is-current.nav-link {
		color: white !important;
	}

	.nav-link {
		color: ${props => props.theme.anotherGrey} !important;
	}

	.active {
		color: ${props => props.theme.anotherGrey}
	}

	//Media Queries
	@media only screen and (max-width: 991px)
	{
		.navbar-brand {
			width: 100px;
		}

		img {
			width: 100%;
			min-height: auto;
			object-fit: cover;
		}
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
					    			<Scrollspy items={ ['barbers', 'services', 'hours', 'contact'] } currentClassName="is-current" componentTag={Nav} offset={-100}>
									    <Nav.Link href="#barbers">Barbers</Nav.Link>
									    <Nav.Link href="#services">Services</Nav.Link>
									    <Nav.Link href="#hours">Hours</Nav.Link>
									    <Nav.Link href="#contact">Contact</Nav.Link>
									    <Nav.Link href="https://rebellion-barbershop-apparel.myshopify.com/">Shop</Nav.Link>
									</Scrollspy>
					    		</Nav>
					    	
					</Navbar.Collapse>
				</Navbar>
			</StyledHeader>
		);
	}
}


export default Header;