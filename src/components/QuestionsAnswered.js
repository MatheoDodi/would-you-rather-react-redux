import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { CheckBox } from '@material-ui/icons';

const QuestionContainer = styled.div`
  width: 50%;
  margin: 6.5rem auto;
  transition: all .2s;
  &:hover {
    transform: scale(1.00005);
    box-shadow: 0 3px 10px 1px rgba(0,0,0,.15)
  }
`

const Grid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  align-items: center;
`

class QuestionsAnswered extends Component {
  render() {
    return (
        <QuestionContainer>
          <Card >
            <CardHeader avatar={<Avatar src={this.props.avatar} />} subheader='Would You Rather' />
            <CardContent style={{borderTop: '1px solid gray'}}>
              <Grid>
                <Typography>{this.props.optionOneText}</Typography><CheckBox /><span>1 / 3</span><span>65%</span>
                <Typography>{this.props.optionTwoText}</Typography><span>1 / 3</span><span>65%</span>
              </Grid>
            </CardContent>
          </Card>
        </QuestionContainer>
    )
  }
};

export default QuestionsAnswered;