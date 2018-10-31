import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from '../styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class NewQuestion extends Component {
  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}> 
        <Typography style={{margin: '2rem'}} variant='h4'>Would You Rather...</Typography>
        <Typography variant='caption'>Fill out the two possible options bellow!</Typography>
        <TextField 
          style={{width: '100%', marginTop: '2rem'}}
          label={<span style={{color: 'gray', fontSize: '1.1rem'}}>First Option</span>}
          error={true}
          multiline={true}
          rows={3}
          rowsMax={4}
           />
        <TextField 
          style={{width: '100%', marginTop: '5rem'}}
          label={<span style={{color: 'gray', fontSize: '1.1rem'}}>Second Option</span>}
          multiline={true}
          rows={3}
          rowsMax={4}
           />
        <Button 
          style={{marginTop: '1rem'}}
          size='large'
          disabled
          variant='contained'
          color='secondary'
          type='submit'>Submit Question</Button>
    </Form>
    )
  };
};

export default NewQuestion;