// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import ChatApp from './ChatApp';

// Component Style
const AppStyle = styled.div`
	width: 100%;
`;

// App Component
export default class App extends React.Component {
	state = {
		name: 'udi',
	}

	render() {
		return (
			<AppStyle>
				<h1 style={{textAlign: 'center'}}>Chat</h1>
				<ChatApp />
			</AppStyle>
		);
	}
}

