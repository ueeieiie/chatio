// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Component Style
const PostMessageStyle = styled.div`
	border-top: 1px solid lightblue;
	width: 100%;
	display: flex;

	button {
		padding: 15px;
		font-size: 1.1rem;
		flex: 1 1 auto;
		background-color: #5564DF;
		color: white;
		border: 0;	
	}

	input {
		border: 0;
		outline: 0;
		padding: 15px;
		font-size: 1.1rem;

		&::placeholder {
			font-style: italic;
			color: rgba(1,1,1,0.3);
		}	
	}
`;

// PostMessage Component
const PostMessage = props => {
	let inputText;
	let value;

	const onKeypressHandler = (e) => {
		if (e.key === 'Enter') {
			if (inputText.value) {
				sendMessage(inputText.value);
				clearInput();
			}
		}
	}

	const clickHandler = () => {
		sendMessage(inputText.value);
		clearInput();
	}

	const clearInput = () => {
		inputText.value = '';
	}

	const setRef = (input) => {
		if (input) {
			inputText = input;
			inputText.focus();
		}
	}

	const stringIsBlank = (str) => {
		return (!str || /^\s*$/.test(str));
	}

	const formatMessage = (message) => {
		return stringIsBlank(message) ? false : message.trim();
	}

	const sendMessage = (message) => {
		const formatedMessage = formatMessage(message);

		if(formatedMessage) {
			props.send(formatedMessage);
		}
	}

	return (
		<PostMessageStyle>
			<input type="text"
				placeholder="Your message..."
				onKeyPress={onKeypressHandler}
				ref={input => setRef(input)}
				onChange={e => value = e.target.value}
			/>
			<button onClick={clickHandler}>Send</button>
		</PostMessageStyle>
	)
};

export default PostMessage;

PostMessage.propTypes = {
	send: PropTypes.func.isRequired
}
