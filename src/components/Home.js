import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import { CardContainer } from '../styles';
import Button from '@material-ui/core/Button';
import QuestionCard from './QuestionCard';

class Home extends Component {
  state = {
    selected: 'unanswerd'
  }

  handleSwitchQuestions = (e, option) => {
      this.setState({ selected: option });
  }

  render() {
    if (!this.props.authedUser) return <Redirect to='/login' />
    const unansweredQuestionsArray = Object.keys(this.props.questions)
    .filter(qid => !Object.keys(this.props.users[this.props.authedUser].answers).includes(qid))
    .sort((a, b) => this.props.questions[b].timestamp - this.props.questions[a].timestamp)

    const answeredQuestionsArray = Object.keys(this.props.questions)
    .filter(qid => Object.keys(this.props.users[this.props.authedUser].answers).includes(qid))
    .sort((a, b) => this.props.questions[b].timestamp - this.props.questions[a].timestamp)

    let displayedOption = unansweredQuestionsArray;
    this.state.selected === 'unanswerd' ? displayedOption = unansweredQuestionsArray : displayedOption = answeredQuestionsArray;

    return (
      <CardContainer>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button onClick={(e) => this.handleSwitchQuestions(e, 'unanswerd')} style={{textTransform: 'none'}}>
            UNANSWERED
          </Button>
          <Button onClick={(e) => this.handleSwitchQuestions(e, 'answered')} style={{textTransform: 'none'}} >
            ANSWERED
          </Button>
        </div>
        <ul>{displayedOption.map(qid => {
            const author = this.props.questions[qid].author;
            const date = this.props.questions[qid].timestamp;

            return (
              <QuestionCard 
                id={qid}
                key={qid}
                author={author}
                date={date} 
                optionOne={this.props.questions[qid].optionOne.text}
                optionTwo={this.props.questions[qid].optionTwo.text}
                isAnswered={this.state.selected === 'unanswerd' ? false : true}
                />
              )
          })}
        </ul>
      </CardContainer>
    )
  }
}

const mapStateToProps = state => (
  {
    authedUser: state.authedUser,
    users: state.users,
    questions: state.questions
  }
)

const mapDispatchToProps = dispatch => (
  {
    getInitialData: () => dispatch(handleInitialData())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home);