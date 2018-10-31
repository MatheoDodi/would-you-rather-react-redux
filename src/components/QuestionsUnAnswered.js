import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const QuestionContainer = styled.div`
  width: 50%;
  margin: 6.5rem auto;
  transition: all .2s;
  &:hover {
    transform: scale(1.00005);
    box-shadow: 0 3px 10px 1px rgba(0,0,0,.15)
  }
`

const Form = styled.form`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-row-gap: 2rem;
  align-items: center;
`

class QuestionsUnAnswered extends Component {
  render() {
    return (
        <QuestionContainer>
          <Card >
            <CardHeader avatar={<Avatar src={this.props.avatar} />} subheader='Would You Rather' />
            <CardContent style={{borderTop: '1px solid gray'}}>
              <Form onSubmit={this.props.submit}>
                <Typography>{this.props.optionOneText}</Typography><input name='answer' type='radio' onChange={this.props.change} checked={this.props.selectedOption === 'optionOne'} value={'optionOne'} />
                <Typography>{this.props.optionTwoText}</Typography><input name='answer' type='radio' onChange={this.props.change} checked={this.props.selectedOption === 'optionTwo'} value={'optionTwo'} />
                <Button type='submit' style={{textTransform: 'none', gridColumn: '1 / -1'}} variant='contained' color='secondary'>Submit Answer</Button>
              </Form>
            </CardContent>
          </Card>
        </QuestionContainer>
    )
  }
};

export default QuestionsUnAnswered;