import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container } from '../styles';

const NeedLogin = () => (
  <Container>
    <Typography style={{marginBottom: '2rem'}} >
      Please Log In to Play!
    </Typography>
    <Link style={{textDecoration: 'none', color: 'white'}} to='/login'>
      <Button color='secondary' variant='contained' style={{textTransform: 'none', margin: '0 auto'}}>
          Login
      </Button>
    </Link>
  </Container>
);

export default NeedLogin;