import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatDate } from '../utils/helpers';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const CardListItem = styled.div`
  margin: 3.5rem 2rem;
  transition: all .2s;
  &:hover {
    transform: scale(1.00005);
    box-shadow: 0 3px 10px 1px rgba(0,0,0,.15)
  }
`

class QuestionCard extends Component {

  render() {
    return (
      <CardListItem>
        <Card>
          <CardHeader subheader={<span style={{fontSize: '1rem'}}>{this.props.author} asked<br />{formatDate(this.props.date)}</span>} />
          <CardContent style={{ background: '#e3f2fd'}}>
            <Typography style={{padding: '1rem 0',}} variant='h6'>Would You Rather...</Typography>
            <div style={{textAlign: 'center'}}>
              <Typography style={{color: 'transparent', textShadow: '0 0 14px rgba(0,0,0,0.5)'}} >{this.props.optionOne}</Typography>
              <Typography style={{color: 'transparent', textShadow: '0 0 14px rgba(0,0,0,0.5)'}} >{this.props.optionTwo}</Typography>
            </div>
          </CardContent>
          <CardActions style={{display: 'flex', justifyContent: 'center'}}>
            <Link style={{textDecoration: 'none'}} to={`/question/${this.props.id}`}>
              <Button style={{textTransform: 'none'}} variant='contained' color='secondary'>{this.props.isAnswered ? 'View Answer' : 'View Question' }</Button>
            </Link>
          </CardActions>
        </Card>
      </CardListItem>
    );
  }
};

export default QuestionCard;