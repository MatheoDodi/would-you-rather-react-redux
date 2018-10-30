import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { CardContainer } from '../styles';
import Typography from '@material-ui/core/Typography';
import QuestionCard from './QuestionCard';

class Home extends Component {
  componentDidMount() {
    this.props.getInitialData();
  }

  render() {
    return (
      <CardContainer>
        <ul>
          <QuestionCard />
        </ul>
      </CardContainer>
    )
  }
}

const mapStateToProps = state => (
  {
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