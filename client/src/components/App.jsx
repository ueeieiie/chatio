// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import ChatApp from './ChatApp';

// Component Style
const AppStyle = styled.div`
	width: 100%;

	.title {
		text-align: center;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		color: #676767;
	}
`;

// App Component
export default class App extends React.Component {
	state = {
		name: 'udi',
	}

	render() {
		return (
			<AppStyle>
				<h1 className="title">Chat</h1>
				<ChatApp />
			</AppStyle>
		);
	}
}

