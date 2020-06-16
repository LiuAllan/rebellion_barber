import styled from 'styled-components';

const StyledBarbers = styled.div`

	.barbers {
		background-color: #333;
		height: 170vh;
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
		color: #fff;
		// font-weight: bold;
		text-transform: uppercase;
		border-bottom: 1px solid #fff;
	}

	.barbers-body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		// background: red;
		justify-content: center;
		align-items: center;
		grid-gap: 20px;
		padding-top: 2rem;
	}

	.Michael {
		width: 50%;
		background-color: white;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 		margin-bottom: 20px;
 		margin: auto;
	}
	.Michael-container {
		text-align: center;
		padding: 5px 20px;
	}

	.Josh {
		width: 50%;
		background-color: white;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 		margin-bottom: 25px;
 		margin: auto;
	}
	.Josh-container {
		text-align: center;
		padding: 5px 20px;
	}

	.Stephen {
		width: 50%;
		background-color: white;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 		margin-bottom: 25px;
 		margin: auto;
	}
	.Stephen-container {
		text-align: center;
		padding: 5px 20px;
	}

	.Kenni {
		width: 50%;
		background-color: #fff;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 		margin-bottom: 25px;
 		margin: auto;
	}
	.Kenni-container {
		text-align: center;
		padding: 5px 20px;
	}

`;

export default StyledBarbers;