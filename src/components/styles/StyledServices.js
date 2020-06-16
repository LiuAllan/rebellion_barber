import styled from 'styled-components';

const StyledServices = styled.div`
	.services {
		background-color: #6f7c8c;
		height: 170vh;
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
		color: #fff;
		text-transform: uppercase;
		border-bottom: 1px solid #fff;
	}
`;

export default StyledServices;