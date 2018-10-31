import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

class Questions extends Component {
  render() {
    return (
      <Card>
        <CardHeader subheader='Would You Rather' />
        <CardContent>
          Option A
          Option B
        </CardContent>
      </Card>
    )
  }
}

export default Questions;