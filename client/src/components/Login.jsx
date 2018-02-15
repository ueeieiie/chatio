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

const Login = (props) => {
	let inputUsername;

	const onKeyPressHandler = (e) => {
		if(e.key === 'Enter') {
			setUsername();
		}
	}

	const setUsername = () => {
		props.setUsername(inputUsername.value);
	}

	const setRef = input => {
		if(input) {
			inputUsername = input;
			inputUsername.focus();
		}
	}

	return (
		<LoginStyle>
			<input type="text" 
				   ref={input => setRef(input)} 
				   placeholder="Enter username..."
				   onKeyPress={onKeyPressHandler}/>
			<button onClick={setUsername}>Set</button>			
		</LoginStyle>
	);
}

export default Login;
