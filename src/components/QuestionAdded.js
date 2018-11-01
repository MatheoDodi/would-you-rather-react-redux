import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container } from '../styles';

const QuestionAdded = () => (
  <Container>
  <Typography style={{marginBottom: '2rem'}} >
    Awesome job! The question was added successfuly!
  </Typography>
  <Link style={{textDecoration: 'none', color: 'white'}} to='/'>
    <Button color='secondary' variant='outlined' style={{textTransform: 'none', margin: '0 auto'}}>
        Back To Home
    </Button>
  </Link>
</Container>
);

export default QuestionAdded;