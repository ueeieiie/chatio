import React from 'react';
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
		if(e.key === 'Enter') {
			this.setState({
				disabled: true
			}, this.setUser);
		}
	}

	onClickHandler = (e) => {
		this.setState({
			disabled
		},this.setUser);

	}

	setUser = () => {
		this.props.setUser(this.inputUsername.value);
	}

	setRef = input => {
		if(input) {
			this.inputUsername = input;
			this.inputUsername.focus();
		}
	}

	render (){
		const { disabled } = this.state;

		return (
			<LoginStyle>
				<input type="text" 
					   ref={input => this.setRef(input)} 
					   placeholder="Enter username..."
					   onKeyPress={this.onKeyPressHandler} 
					   disabled={disabled}/>
				<button onClick={this.onClickHandler}>Set</button>			
			</LoginStyle>
		);
	}
}
