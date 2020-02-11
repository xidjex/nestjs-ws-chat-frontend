import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import GlobalStyles from './stylesGlobal';
import Routes from './routes/Routes';
import store from './redux';
import appTheme from './themes/appTheme';

const theme = createMuiTheme(appTheme);

const App: React.FC = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Provider store={store}>
			<Router>
				<Routes />
			</Router>
		</Provider>
	</ThemeProvider>
);

export default App;
