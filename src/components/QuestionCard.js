import React from 'react';
import { Link } from 'react-router-dom';
import { CardListItem } from '../styles';
import { formatDate } from '../utils/helpers';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const QuestionCard = (props) => (
      <CardListItem>
        <Card>
          <CardHeader subheader={<span style={{fontSize: '1rem'}}>{props.author} asked<br />{formatDate(props.date)}</span>} />
          <CardContent style={{ background: '#e3f2fd'}}>
            <Typography style={{padding: '1rem 0',}} variant='h6'>Would You Rather...</Typography>
            <div style={{textAlign: 'center'}}>
              <Typography style={{color: 'transparent', textShadow: '0 0 14px rgba(0,0,0,0.5)'}} >{props.optionOne}</Typography>
              <Typography style={{color: 'transparent', textShadow: '0 0 14px rgba(0,0,0,0.5)', paddingBottom: '1rem'}} >{props.optionTwo}</Typography>
            </div>
          </CardContent>
          <CardActions style={{display: 'flex', justifyContent: 'center'}}>
            <Link style={{textDecoration: 'none'}} to={`/question/${props.id}`}>
              <Button style={{textTransform: 'none'}} variant='contained' color='secondary'>{props.isAnswered ? 'View Answer' : 'View Question' }</Button>
            </Link>
          </CardActions>
        </Card>
      </CardListItem>);

export default QuestionCard;