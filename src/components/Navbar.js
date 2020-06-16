import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.jpg';



const NavStyles = styled.div`
	margin: 0;
	padding: 0;
	display: block;
	background: grey;

	p {
		float: right;
		padding: 5px;
		font-size: 0.8rem;
		color: white;

	}
`;

export default class Navbar extends React.Component
{
	render()
	{
		return (
			<NavStyles>
				<img className="logo" src={logo} alt=""/>
					<p>Barbers</p>

					<p>Services</p>

					<p>Hours</p>

					<p>Shop</p>

					<p>Contact</p>
			</NavStyles>
		);
	}
}