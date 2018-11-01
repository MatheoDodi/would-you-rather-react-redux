import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { CardContainer } from '../styles';
import Button from '@material-ui/core/Button';
import QuestionCard from './QuestionCard';
import { Div } from '../styles'

class Home extends Component {
  state = {
    selected: 'unanswered'
  }

  handleSwitchQuestions = (e, option) => {
      this.setState({ selected: option });
  }

  render() {
    const unansweredQuestionsArray = Object.keys(this.props.questions)
    .filter(qid => !Object.keys(this.props.users[this.props.authedUser].answers).includes(qid))
    .sort((a, b) => this.props.questions[b].timestamp - this.props.questions[a].timestamp)

    const answeredQuestionsArray = Object.keys(this.props.questions)
    .filter(qid => Object.keys(this.props.users[this.props.authedUser].answers).includes(qid))
    .sort((a, b) => this.props.questions[b].timestamp - this.props.questions[a].timestamp)

    let displayedOption = unansweredQuestionsArray;
    this.state.selected === 'unanswered' ? displayedOption = unansweredQuestionsArray : displayedOption = answeredQuestionsArray;

    return (
      <CardContainer>
        <Div>
          <Button 
            onClick={(e) => this.handleSwitchQuestions(e, 'unanswered')}
            style={{textTransform: 'none', color: this.state.selected === 'unanswered' && '#03A9F4'}}>
              Unanswered
          </Button>
          <Button
            onClick={(e) => this.handleSwitchQuestions(e, 'answered')}
            style={{textTransform: 'none', color: this.state.selected === 'answered' && '#03A9F4'}} >
              Answered
          </Button>
        </Div>
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
                isAnswered={this.state.selected === 'unanswered' ? false : true}
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