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

	const onKeypressHandler = (e) => {
		if (e.key === 'Enter') {
			if (inputText.value) {
				sendMessage();
				clearInput();
			}
		}
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

	const sendMessage = () => {
		props.send(inputText.value);
	}


	return (
		<PostMessageStyle>
			<input type="text"
				placeholder="Your message..."
				onKeyPress={onKeypressHandler}
				ref={input => setRef(input)}
			/>
			<button onClick={sendMessage}>Send</button>
		</PostMessageStyle>
	)
};

export default PostMessage;

PostMessage.propTypes = {
	send: PropTypes.func.isRequired
}
