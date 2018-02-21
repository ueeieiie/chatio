// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
//Message Templates
import UserMessageTemplate from './MessageTemplate/UserMessageTemplate';
import OthersMessageTemplate from './MessageTemplate/OthersMessageTemplate';

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
		this.chatElement.scrollTop = this.chatElement.scrollHeight;
	}

	componentDidUpdate(){
		this.setScrollPosition();
	}
	
	render(){
		const { messages, userId } = this.props;

		return (
			<ChatHistoryStyle innerRef={input => this.setRef(input)} >
				{ 
					messages.map((m, i) => 
						m.userId === userId ? (
						   <UserMessageTemplate 
								   key={i} 
								   name={m.username} 
								   message={m.message}
								   avatar={m.avatar} />
						   )	:	(
							   <OthersMessageTemplate 
								   key={i} 
								   name={m.username} 
								   message={m.message}
								   avatar={m.avatar} />
						   ) 
					   
					)
				}
			</ChatHistoryStyle>
		);
	}
};

export default ChatHistory;

ChatHistory.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.shape({
		userId: PropTypes.string.isRequired,
		message: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired,
	})),
	userId: PropTypes.string.isRequired
}
