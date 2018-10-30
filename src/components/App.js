import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { handleSaveQuestionAnswer } from '../actions/questions';
import LoadingBar from 'react-redux-loading';
import '../App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';

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
})

class App extends Component {

  render() {
    const { authedUser } = this.props;

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <LoadingBar />
          <Navbar />
          {
            authedUser 
            ? <Fragment>
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={Home} />
              </Fragment>
            : <Route exact path='/login' component={Login} />
          }
        </MuiThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = state => (
  {
    authedUser: state.authedUser
  }
)

const mapDispatchToProps = dispatch => {
  return({
    getInitialData : () => dispatch(handleInitialData()),
    saveAnswer: (answer) => dispatch(handleSaveQuestionAnswer(answer))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
