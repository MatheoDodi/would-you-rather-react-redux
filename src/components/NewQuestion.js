import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleSaveQuestion } from '../actions/questions';
import { Form } from '../styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { stat } from 'fs';

class NewQuestion extends Component {
  state={
    optionOneText: '',
    optionTwoText: ''
  }

  handleTextFieldChange = (e, option) => {
    this.setState({ [option]: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const author = this.props.authedUser;

    this.props.addQuestion({ optionOneText, optionTwoText, author });
    this.props.history.push('/')
  }

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}> 
        <Typography style={{margin: '2rem'}} variant='h4'>Would You Rather...</Typography>
        <Typography variant='caption'>Fill out the two possible options bellow!</Typography>
        <TextField 
          style={{width: '100%', marginTop: '2rem'}}
          label={<span style={{color: 'gray', fontSize: '1.1rem'}}>First Option</span>}
          multiline={true}
          rows={3}
          rowsMax={4}
          value={this.state.optionOneText}
          onChange={(e) => this.handleTextFieldChange(e, 'optionOneText')}
           />
        <TextField 
          style={{width: '100%', marginTop: '5rem'}}
          label={<span style={{color: 'gray', fontSize: '1.1rem'}}>Second Option</span>}
          multiline={true}
          rows={3}
          rowsMax={4}
          value={this.state.optionTwoText}
          onChange={(e) => this.handleTextFieldChange(e, 'optionTwoText')}
           />
        <Button 
          style={{marginTop: '1rem'}}
          size='large'
          disabled={!this.state.optionOneText || !this.state.optionTwoText}
          variant='contained'
          color='secondary'
          type='submit'>Submit Question</Button>
    </Form>
    )
  };
};

const mapStateToProps = (state, props) => (
  {
    authedUser: state.authedUser
  }
)

const mapDispatchToProps = dispatch => (
  {
    addQuestion: (question) => dispatch(handleSaveQuestion(question))
  }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewQuestion));