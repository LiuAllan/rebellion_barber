import styled from 'styled-components';

const StyledBarbers = styled.div`

	.barbers {
		background-color: ${props => props.theme.grey};
		min-height: 100vh;
		font-family: 'Raleway';
	}

	.barbers-title {
		display: grid;
		grid-template-columns: auto;
		justify-content: center;
		align-items: center;
		padding-top: 5rem;
	}

	.barbers-title-inner {
		color: ${props => props.theme.offWhite};
		// font-weight: bold;
		text-transform: uppercase;
		border-bottom: 1px solid ${props => props.theme.offWhite};
	}

	.barbers-body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: center;
		align-items: center;
		grid-gap: 20px;
		padding-top: 2rem;
		height: 1fr;
	}

	.Michael {
		width: 50%;
		background-color: ${props => props.theme.offWhite};
		box-shadow: ${props => props.theme.boxShadow};
 		margin-bottom: 20px;
 		margin: auto;
	}
	.Michael-container {
		text-align: center;
		padding: 5px 20px;
	}

	.Josh {
		width: 50%;
		background-color: ${props => props.theme.offWhite};
		box-shadow: ${props => props.theme.boxShadow};
 		margin-bottom: 25px;
 		margin: auto;
	}
	.Josh-container {
		text-align: center;
		padding: 5px 20px;
	}

	.Stephen {
		width: 50%;
		background-color: ${props => props.theme.offWhite};
		box-shadow: ${props => props.theme.boxShadow};
 		margin-bottom: 25px;
 		margin: auto;
	}
	.Stephen-container {
		text-align: center;
		padding: 5px 20px;
	}

	.Kenni {
		width: 50%;
		background-color: ${props => props.theme.offWhite};
		box-shadow: ${props => props.theme.boxShadow};
 		margin-bottom: 25px;
 		margin: auto;
	}
	.Kenni-container {
		text-align: center;
		padding: 5px 20px;
	}

`;

export default StyledBarbers;