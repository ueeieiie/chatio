import React from 'react';
import styled from 'styled-components';

const MessageTemplateStyle = styled.div`
	display: flex;
	p, h5 {
		margin: 0;
		padding: 0;
		font-size: 1rem;
	}
	
	.name {
		flex: 0 0 50px;
	}

	.message {
		flex: 1 1 auto;
		margin-left: 10px;
	}
`;

const MessageTemplate = props => {
	return (
		<MessageTemplateStyle>
			<h5 className="name"> { props.name }:  </h5>
			<p className="message"> { props.message }  </p>
		</MessageTemplateStyle>
	);
}

export default MessageTemplate;
