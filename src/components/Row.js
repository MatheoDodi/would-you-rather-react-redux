import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';

const Row = (props) => (
  <TableRow style={{textAlign: 'center'}} hover>
    <TableCell style={{padding: '1rem 1.5rem'}}><Avatar src={props.avatar}/></TableCell>
    <TableCell>{props.name}</TableCell>
    <TableCell numeric>{props.questions}</TableCell>
    <TableCell numeric>{props.answers}</TableCell>
    <TableCell numeric>{props.questions + props.answers}</TableCell>
  </TableRow>
);

export default Row;