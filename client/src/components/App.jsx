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

