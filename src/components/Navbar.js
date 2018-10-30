import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Navbar extends Component {
  render() {
    return (
      <AppBar position='static'>
        <Toolbar >
          <Typography>
            <Link className='navLink' to ='/'>
              Home
            </Link>
          </Typography>
          <Typography>
            <Link className='navLink' to ='/add'>
              New Question
            </Link>
          </Typography>
          <Typography>
            <Link className='navLink' to ='/leaderboard'>
              Leaderboard
            </Link>
          </Typography>
          <Typography style={{marginLeft: 'auto', paddingRight: '2rem'}}>
            Welcome Matthew
          </Typography>
          <Button color='secondary' variant='contained' style={{textTransform: 'none'}}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navbar;