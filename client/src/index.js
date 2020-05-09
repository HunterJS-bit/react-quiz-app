import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';
import { createMuiTheme, StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import styled, { ThemeProvider } from 'styled-components';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

const theme = createMuiTheme();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<StylesProvider injectFirst>
				<MuiThemeProvider theme={theme}>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</MuiThemeProvider>
			</StylesProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
