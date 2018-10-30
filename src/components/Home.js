import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class Home extends Component {
  componentDidMount() {
    this.props.getInitialData();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.users 
          ? this.props.users.map(user => {
              return console.log(user);
            })
          : null
          }
        </ul>
      </div>
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