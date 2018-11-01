import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../actions/questions';
import QuestionsUnAnswered from './QuestionsUnAnswered';
import QuestionsAnswered from './QuestionsAnswered';
import WrongPath from './WrongPath';


class Questions extends Component {
  state = {
    isAnswered: Object.keys(this.props.users[this.props.authedUser].answers).includes(this.props.match.params.question_id),
    selectedOption: 'optionOne'
  }

  handleOptionChange = (e) => {
    const newOption = e.target.value;
    this.setState({ selectedOption: newOption });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const authedUser = this.props.authedUser;
    const qid = this.props.match.params.question_id;
    const answer = this.state.selectedOption;
    this.setState({ isAnswered: true })
    return this.props.handleSaveAnswer({authedUser, qid, answer})
  }

  render() {
    const qid = this.props.match.params.question_id;
    if (!this.props.questions[qid]) {
      return <WrongPath />
    }
    const author = this.props.questions[qid].author;
    const avatar = this.props.users[author].avatarURL;
    const optionOneText = this.props.questions[qid].optionOne.text;
    const optionTwoText = this.props.questions[qid].optionTwo.text;

      return (
        !this.state.isAnswered
        ? <QuestionsUnAnswered
            avatar={avatar}
            optionOneText={optionOneText}
            optionTwoText={optionTwoText}
            submit={this.handleFormSubmit}
            change={this.handleOptionChange}
            selectedOption={this.state.selectedOption} />
        : <QuestionsAnswered
            avatar={avatar}
            optionOneText={optionOneText}
            optionTwoText={optionTwoText}
            answer={this.state.selectedOption}
            qid={qid} />
      )
  }
}

const mapStateToProps = state => (
  {
    authedUser : state.authedUser,
    users: state.users,
    questions: state.questions
  }
)

const mapDispatchToProps = dispatch => (
  {
    handleSaveAnswer: (answer) => dispatch(handleSaveQuestionAnswer(answer))
  }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questions));