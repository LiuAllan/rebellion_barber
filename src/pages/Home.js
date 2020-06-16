import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';

//Theme here

export default class Home extends React.Component
{
	render()
	{
		return (
			<div>
				<Header />
				<Content />
			</div>
		);
	}
}