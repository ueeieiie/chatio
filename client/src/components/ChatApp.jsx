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

		const addMessage = async ({userId, username, message, avatar}) => {
			await this.setState({
				messages: [
					...this.state.messages, 
					{userId, username, message, avatar}
				]
			});	
		};

		this.socket.on('RECEIVE_MESSAGE', addMessage);
	}

	state = {
		messages: [],
		user: null
	};

	sendMessage = async (message) => {
		const { user } = this.state;
		await this.socket.emit('SEND_MESSAGE', {message, user});
	}

	setUser = async (user) => {
		await this.socket.emit('REGISTER_USER', user);
		await this.socket.on('RETURN_USER_INFO', (data) => {
			this.setState({ user: data });
		});
	}

	render() {
		const { messages, user } = this.state;

		if(user) {
			return (
				<ChatAppStyle>
					<ChatHistory messages={messages} userId={user.userId}/>
					<PostMessage send={this.sendMessage}/>
				</ChatAppStyle>
			);
		} else {
			return (
				<ChatAppStyle>
					<Login setUser={this.setUser}/>
				</ChatAppStyle>
			);
		}
	}
}
