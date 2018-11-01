import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CheckBox from '@material-ui/icons/CheckBox'
import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from 'react-router-dom';

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
  grid-template-columns: 4fr 2fr auto auto;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  align-items: center;
`

class QuestionsAnswered extends Component {
  state = {
    answer: this.props.users[this.props.authedUser].answers[this.props.qid]
  }

  render() {
    const optionOneVotes = this.props.questions[this.props.qid].optionOne.votes.length;
    const optionTwoVotes = this.props.questions[this.props.qid].optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercent = Math.round((optionOneVotes / totalVotes) * 100);
    const optionTwoPercent = Math.round((optionTwoVotes / totalVotes) * 100);

    return (
        <QuestionContainer>
          <Card >
            <CardHeader avatar={<Avatar src={this.props.avatar} />} subheader='Would You Rather' />
            <CardContent style={{borderTop: '1px solid gray'}}>
              <Grid>
                <Typography style={{display: 'flex', alignItems: 'center'}}>{this.props.optionOneText}{this.state.answer === 'optionOne' && <CheckBox style={{color: 'green', marginLeft: '1rem'}} />}</Typography>
                <LinearProgress variant='determinate' value={optionOnePercent} />
                <span>{`${optionOnePercent}%`}</span>
                <span>{`${optionOneVotes} / ${totalVotes}`}</span>
                <Typography style={{display: 'flex', alignItems: 'center'}}>{this.props.optionTwoText}{this.state.answer === 'optionTwo' && <CheckBox style={{color: 'green', marginLeft: '1rem'}} />}</Typography>
                <LinearProgress variant='determinate' value={optionTwoPercent} />
                <span>{`${optionTwoPercent}%`}</span>
                <span>{`${optionTwoVotes} / ${totalVotes}`}</span>
                <Link style={{textAlign: 'center', textDecoration: 'none', color: 'white', gridColumn: '1/-1'}} to='/'>
                  <Button color='secondary' variant='outlined' style={{textTransform: 'none'}}>
                    Go Back
                  </Button>
                </Link>
              </Grid>
            </CardContent>
          </Card>
        </QuestionContainer>
    )
  }
};

const mapStateToProps = (state, props) => (
  {
    authedUser: state.authedUser,
    users: state.users,
    questions: state.questions
  }
)

export default connect(mapStateToProps)(QuestionsAnswered);