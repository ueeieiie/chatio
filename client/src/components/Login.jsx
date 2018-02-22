// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Component Style
const LoginStyle = styled.div`
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
		flex: 1 1 auto;
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

export default class Login extends React.Component {
	state = {
		disabled: false
	}

	onKeyPressHandler = (e) => {
		const username = this.inputUsername.value;
		
		if (e.key === 'Enter') {
			if (!this.invalidUsername(username)) {
				this.disableInputField();
			}
		}
	}

	onClickHandler = (e) => {
		const username = this.inputUsername.value;
		
		if (!this.invalidUsername(username)) {
			console.log('username is good');
			this.disableInputField();
		}

		console.log('username is BAD');
	}
	
	setUser = () => {
		this.props.setUser(this.inputUsername.value);
	}
	
	setRef = input => {
		if (input) {
			this.inputUsername = input;
			this.inputUsername.focus();
		}
	}
	
	invalidUsername = (username) => 
		!username || /^\s*$/.test(username);

	
	disableInputField = () => {
		this.setState({ disabled: true },this.setUser);
	}

	render() {
		const { disabled } = this.state;

		return (
			<LoginStyle>
				<input 
					type="text" 
					ref={input => this.setRef(input)} 
					placeholder="Enter username..."
					onKeyPress={this.onKeyPressHandler} 
					disabled={disabled} 
				/>
				<button onClick={this.onClickHandler}>Set</button>
			</LoginStyle>
		);
	}
}

Login.propTypes = {
	setUser: PropTypes.func.isRequired
};
