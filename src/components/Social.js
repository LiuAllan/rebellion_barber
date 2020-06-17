import React from 'react';
import styled from 'styled-components';

const StyledSocial = styled.div`
	.social i
	{
	  padding-right: 30px;
	  font-size: 25px;
	  color: ${props => props.theme.grey};
	}

	.social i:hover
	{
	  color: ${props => props.theme.offWhite};
	}
`;

class Social extends React.Component
{
	render()
	{
		return (
			<StyledSocial>
				<div className="social">
					<a href="https://www.youtube.com/channel/UCH8K5Wdi5k9UrprywIy7YtQ?view_as=subscriber" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-youtube"></i>
					</a>

					<a href="https://www.facebook.com/rebellionbarbershop/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-facebook-square"></i>
					</a>

					<a href="https://www.instagram.com/rebellionbarbershop/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-instagram"></i>
					</a>			
				</div>
			</StyledSocial>
			)
	}
}

export default Social;