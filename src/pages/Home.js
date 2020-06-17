import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Content from '../components/Content';

//Theme here
const theme = {
	grey: '#333',
	lightGrey: '#424242',
	offWhite: '#EDEDED',
	blue: '#6f7c8c',
	anotherGrey: '#bfbfbf',
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};

export default class Home extends React.Component
{
	render()
	{
		return (
			<ThemeProvider theme={theme}>
				<div>
					<Header />
					<Content />
				</div>
			</ThemeProvider>
		);
	}
}