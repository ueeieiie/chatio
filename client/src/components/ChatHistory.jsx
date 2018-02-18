// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import MessageTemplate from './MessageTemplate';

// Component Style
const ChatHistoryStyle = styled.div`
	margin: 20px auto;
	width: 90%;
	height: 400px;
	overflow: auto;
`;

// ChatHistory Component
class ChatHistory extends React.Component  {
	setRef = (input) => {
		this.chatElement = input;
	}

	setScrollPosition = () => {
		console.log('scrollTop:', this.chatElement.scrollTop)
		console.log('scrollHeight:', this.chatElement.scrollHeight)

		this.chatElement.scrollTop = this.chatElement.scrollHeight;
	}

	componentDidUpdate(){
		this.setScrollPosition();
	}
	
	render(){
		const { messages } = this.props;

		return (
			<ChatHistoryStyle innerRef={input => this.setRef(input)} >
				{ 
					messages.map((m, i) => (
						<MessageTemplate 
							key={i} 
							name={m.username} 
							message={m.message} 
						/>)	
					)
				}
			</ChatHistoryStyle>
		);
	}
};

export default ChatHistory;
