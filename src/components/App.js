import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import '../App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './Navbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#B3E5FC',
      main: '#03A9F4',
      dark: '#0288D1',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#FF9800',
      main: '#FF9800',
      dark: '#F57C00',
      contrastText: '#FFFFFF'
    },
    text: '#FFFFFF',
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'roboto',
    fontSize: 12,
    htmlFontSize: 10
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        textColor: 'white',
      },
    },
  }
})

class App extends Component {
  // componentDidMount() {
  //   this.props.dispatch(handleInitialData());
  // }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Navbar />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default connect()(App);
