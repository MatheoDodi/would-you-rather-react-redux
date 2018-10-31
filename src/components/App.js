import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import '../App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import NeedLogin from './NeedLogin';
import Questions from './Questions';

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
            !authedUser 
            
            ? <Switch>
                <Route exact path='/login' component={Login} />
                <Route component={NeedLogin} />
              </Switch>
            : <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={Home} />
                <Route path='/question/:question_id' component={Questions} />
              </Switch>
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

export default connect(mapStateToProps)(App);
