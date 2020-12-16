import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import SignIn from './pages/SignIn';
import './index.css';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
