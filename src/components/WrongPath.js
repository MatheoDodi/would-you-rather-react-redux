import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container } from '../styles';
import Login from './Login';

const WrongPath = (props) => (
      props.authedUser 
      ? <Container>
          <Typography style={{marginBottom: '2rem'}} >
            oops! Page doesn't exist!
          </Typography>
          <Link style={{textDecoration: 'none', color: 'white'}} to='/'>
            <Button color='secondary' variant='outlined' style={{textTransform: 'none', margin: '0 auto'}}>
                Back To Home
            </Button>
          </Link>
        </Container>
      : <Login />
    )

const mapStateToProps = state => (
  {
    authedUser: state.authedUser
  }
)

export default connect(mapStateToProps)(WrongPath);