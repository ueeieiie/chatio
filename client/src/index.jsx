// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

// Components
import App from './components/App';

// App Location
const appLocation = document.querySelector('.app');

// Render to DOM
ReactDOM.render(
	<App />,
	appLocation
);


// Global styles
injectGlobal`
	h1, h2, h3, h4, h5, h6 {
		margin: 0;
	}
`;

