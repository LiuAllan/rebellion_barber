import styled from 'styled-components';

const StyledServices = styled.div`
	.services {
		background-color: ${props => props.theme.lightGrey};
		min-height: 125vh;
		font-family: 'Raleway';
	}

	.services-title {
		display: grid;
		grid-template-columns: auto;
		justify-content: center;
		align-items: center;
		padding-top: 5rem;
	}

	.services-title-inner {
		color: ${props => props.theme.offWhite};
		text-transform: uppercase;
		border-bottom: 1px solid ${props => props.theme.offWhite};
	}

	img {
		width: 1fr;
		height: 160px;
		object-fit: cover;
	}

	.services-body {
		max-width: 800px;
		margin: auto;
		padding-top: 2rem;
	}

	.card-group {
		box-shadow: ${props => props.theme.boxShadow};
	}

	.card {
		background-color: ${props => props.theme.offWhite};
	}
`;

export default StyledServices;