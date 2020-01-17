import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

// Global styles
import { GlobalStyles } from './stylesGlobal';

// Routes
import { Routes } from './routes/Routes';

// Store
import store from './redux';

const App: React.FC = () => {
  return (
    <>
        <GlobalStyles />
        <Provider store={store}>
            <Router>
                <Routes/>
            </Router>
        </Provider>
    </>
  );
};

export default App;
