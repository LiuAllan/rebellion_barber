import styled from 'styled-components';

const StyledHours = styled.div`
	.hours {
		background-color: ${props => props.theme.grey};
		min-height: 125vh;
		font-family: 'Raleway';
	}

	.hours-title {
		display: grid;
		grid-template-columns: auto;
		justify-content: center;
		align-items: center;
		padding-top: 5rem;
	}

	.hours-title-inner {
		color: ${props => props.theme.offWhite};
		text-transform: uppercase;
		border-bottom: 1px solid ${props => props.theme.offWhite};
	}

	.hours-body {
		padding-top: 2rem;
	}

	.time {
		text-align: center;
	}

	.end {
		display: grid;
		grid-column: span 2;
		padding-top: 5rem;
		padding-bottom: 5rem;
	}

	.info-content {
		display: grid;
		grid-template-columns: minmax(100px, 400px) minmax(100px, 400px);
		grid-template-rows: 1fr 1fr;
		grid-gap: 20px;
		padding-top: 20px;
		justify-content: center;
		align-items: center;
	}

	img {
		max-width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 10%;
		box-shadow: ${props => props.theme.boxShadow};
	}

	p, h3{
		color: ${props => props.theme.offWhite};
	}


	b {
		color: ${props => props.theme.blue};
	}

	//Media Queries
	@media only screen and (max-width: 991px)
	{
		.hours, .info-content{
			display: grid;
			grid-gap: 0px;
		}
		
		img {
			grid-column: 1 / -1;
		}

		.info-row1, .info-row2 {
			grid-column: span 2;
		}
		
	}

`;

export default StyledHours;