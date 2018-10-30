import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

const CardListItem = styled.div`
  margin: 2rem;

`

class QuestionCard extends Component {
  render() {
    return (
      <CardListItem>
        <Card>
          <CardHeader subheader='User Asks' />
          <CardContent style={{ background: '#FF9800', color: 'white'}}>
            <Typography style={{padding: '2rem 0'}} variant='h5'>Would You Rather...</Typography>
          </CardContent>
          <CardActions style={{display: 'flex', justifyContent: 'center'}}>
            <Button style={{textTransform: 'none'}} variant='contained' color='primary'>View Question</Button>
          </CardActions>
        </Card>
      </CardListItem>
    );
  }
};

export default QuestionCard;