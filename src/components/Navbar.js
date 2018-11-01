import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { unsetAuthedUser } from '../actions/authedUser'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Navbar extends Component {
  render() {
    return (
      <AppBar position='fixed'>
        <Toolbar >
          <Typography>
            <Link className='navLink' to ='/'>
              Home
            </Link>
          </Typography>
          <Typography>
            <Link className='navLink' to ={this.props.authedUser ? '/add' : '/'}>
              New Question
            </Link>
          </Typography>
          <Typography>
            <Link className='navLink' to ={this.props.authedUser ? '/leaderboard' : '/'}>
              Leaderboard
            </Link>
          </Typography>
          <Typography style={{color: 'white', marginLeft: 'auto', paddingRight: '2rem'}}>
            {this.props.authedUser ? `Welcome ${this.props.name}` : 'Welcome' }
          </Typography>
          {this.props.authedUser
          ? <Button
              color='secondary'
              variant='contained'
              style={{textTransform: 'none'}}
              onClick={this.props.handleLogOut}>
                Logout
            </Button>
            : null
          }
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = state => {
  const name = state.users[state.authedUser] ? state.users[state.authedUser].name : ''

  return {
    authedUser : state.authedUser,
    name
  }
}


const mapDispatchToProps = dispatch => (
  {
    handleLogOut: () => dispatch(unsetAuthedUser())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);