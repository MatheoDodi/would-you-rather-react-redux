import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Row from './Row';

class Leaderboard extends Component {

  render() {
    const usersArray = Object.keys(this.props.users);
    const sortedUsers = usersArray.sort((a, b) => {
      return (Object.keys(this.props.users[b].answers).length + this.props.users[b].questions.length) - (Object.keys(this.props.users[a].answers).length + this.props.users[a].questions.length)
    })

    return (
      <Paper  style={{margin: '6.5rem auto', width: '80%'}}>
        <Table>
          <TableHead style={{backgroundColor: '#03A9F4', color: 'white'}}>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>User</TableCell>
              <TableCell numeric>Asked</TableCell>
              <TableCell numeric>Answered</TableCell>
              <TableCell numeric>Total Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsers.map(user => (
              <Row
                avatar={this.props.users[user].avatarURL}
                name={this.props.users[user].name}
                questions={this.props.users[user].questions.length}
                answers={Object.keys(this.props.users[user].answers).length} />
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

const mapStateToProps = state => (
  {
    users: state.users,
    questions: state.questions
  }
)
 
export default connect(mapStateToProps)(Leaderboard);