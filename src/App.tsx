import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Global styles
import GlobalStyles from './stylesGlobal';

// Routes
import Routes from './routes/Routes';

// Store
import store from './redux';

// Theme
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
