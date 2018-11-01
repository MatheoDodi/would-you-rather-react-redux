import React, { Component, Fragment } from 'react';
import { handleSaveUser } from '../actions/users';
import { handleInitialData } from '../actions/shared';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Form } from '../styles';
import { connect } from 'react-redux';


class Login extends Component {
  state = {
    username : '',
    fullName: '',
  }

  handleTextFieldChange = (e, label) => {
    const input = e.target.value;
    this.setState({ [label] : input });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, fullName } = this.state;
    this.props.handleLogin(username, fullName);
    // this.props.getInitialData();
  }


  render() {
    return (
      <Fragment>
          <Form onSubmit={this.handleFormSubmit}> 
            <Typography style={{margin: '2rem', textAlign:'center'}} variant='h4'>Welcome To <br />Would You Rather?</Typography>
            <Typography variant='caption'>Please fill out your info bellow to start Playing</Typography>
            <TextField 
              style={{width: '100%'}}
              label={<span style={{color: 'gray', fontSize: '1.1rem'}}>Full Name</span>}
              value={this.state.fullName}
              onChange={(e) => this.handleTextFieldChange(e, 'fullName')} />
            <TextField 
              style={{width: '100%'}}
              label={<span style={{color: 'gray', fontSize: '1.1rem'}}>Userame</span>}
              value={this.state.username}
              onChange={(e) => this.handleTextFieldChange(e, 'username')} />
            <Button
              disabled={!this.state.username || !this.state.fullName} 
              style={{marginTop: '1rem'}}
              size='large' 
              color='secondary'
              type='submit'>Play</Button>
          </Form>
      </Fragment>
    )
  }
};

const mapStateToProps = state => (
  {
    authedUser: state.authedUser
  }
)

const mapDispatchToProps = dispatch => (
  {
    handleLogin: (username, fullName) => dispatch(handleSaveUser(username, fullName)),
    getInitialData: () => dispatch(handleInitialData())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Login);