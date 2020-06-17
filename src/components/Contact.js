import React from 'react';
import styled from 'styled-components';
import Social from './Social';

const StyledContact = styled.div`
	.contact {
		background: ${props => props.theme.blue};
		min-height: 25vh;
		font-family: 'Raleway';
		text-align: center;
	}

	.contact-title {
		display: grid;
		grid-template-columns: auto;
		justify-content: center;
		align-items: center;
		padding-top: 2rem;
	}

	.contact-title-inner {
		color: ${props => props.theme.offWhite};
		text-transform: uppercase;
		border-bottom: 1px solid ${props => props.theme.offWhite};
`;

const Contact = () => (
	<StyledContact>
		<div className="contact" id="contact">
			<div className="contact-title">
				<h3 
					className="contact-title-inner"
				>
						Connect with us
				</h3>
			</div>

			<br />
			<Social />
		</div>
	</StyledContact>
);

export default Contact;