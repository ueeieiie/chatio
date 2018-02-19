// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserMessageTemplateStyle = styled.div`
	margin: 10px 0;
	display: flex;
	position: relative;
	background-color: lightblue;
	padding: 5px 0;
	

	p, h5 {
		margin: 0;
		padding: 0;
		font-size: 1rem;
	}
	
	.name {
		flex: 0 0 50px;
		margin-right: 15px;
	}

	.message {
		flex: 1 1 auto;
	}

	.avatar {
		display: inline-block;
		margin-right: 10px;
		
		width: 26px;
		height: 26px;

		position: relative;
		top: -2px;
	}
`;

const UserMessageTemplate = props => {
	return (
		<UserMessageTemplateStyle >
			<img className="avatar" src={props.avatar} />
			<h5 className="name"> { props.name }:  </h5>
			<p className="message"> { props.message }  </p>
		</UserMessageTemplateStyle>
	);
}

export default UserMessageTemplate;
