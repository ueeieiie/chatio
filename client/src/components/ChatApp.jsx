// Dependencies
import React from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';

// Components
import PostMessage from './PostMessage';
import ChatHistory from './ChatHistory';
import Login from './Login';

// Component Style
const ChatAppStyle = styled.div`
	margin: 30px auto;
	border: 1px solid lightblue;
	width: 400px;
	background-color: #fbfbfb;
`;

// ChatApp Component
export default class ChatApp extends React.Component {
	constructor() {
		super();

		this.socket = io('http://localhost:3000');

		const addMessage = ({username, message}) => {
			// console.log(`SERVER DATA:__ username: ${username}, message: ${message}`,);
			
			this.setState({messages: [...this.state.messages, {username, message}]},
			() => {
				// console.log('messages:', this.state.messages)
			});
		};

		this.socket.on('RECEIVE_MESSAGE', addMessage);
	}

	state = {
		messages: [],
		users: [],
		message: null,
		username: null
	};

	sendMessage = message => {
		const { username } = this.state;
		// console.log('before emit')
		
		// this.setState({message})
		this.socket.emit('SEND_MESSAGE', {message, username});
		// console.log(`after emit message: ${message}, username: ${username}`);
	}

	setUsername = (username) => {
		this.setState({ username });
	}

	render() {
		const { messages, username } = this.state;

		if(username) {
			return (
				<ChatAppStyle>
					<ChatHistory messages={messages}/>
					<PostMessage send={this.sendMessage}/>
				</ChatAppStyle>
			);
		} else {
			return (
				<ChatAppStyle>
					<Login setUsername={this.setUsername}/>
				</ChatAppStyle>
			);
		}
	}
}
