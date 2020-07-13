import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    minWidth: 450,
    backgroundColor: '#555555',
    opacity: 0.5,
  },
});

const timeDifference = (date1, date2) => {
  var difference = date1 - date2;

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  return daysDifference;
};

export default function PlantList(props) {
  const currentDate = Date.now();

  PlantList.propTypes = {
    data: PropTypes.array,
    rowNames: PropTypes.array,
  };

  const classes = useStyles();
  const rowNames = ['Name', 'Type', 'Location', 'Light', 'Age'];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {rowNames &&
              rowNames.map((rowName) => (
                <TableCell align='right' key={rowName}>
                  {rowName}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data &&
            props.data.map((item) => (
              // TODO: consider making this component into a generalized component, depends heavily on the amount of data we are dealing with
              <TableRow key={item.name}>
                <TableCell align='right'>{item.name}</TableCell>
                <TableCell align='right'>{item.type}</TableCell>
                <TableCell align='right'>{item.location_preference}</TableCell>
                <TableCell align='right'>{item.light_requirement}</TableCell>
                <TableCell align='right'>
                  {timeDifference(currentDate, Date.parse(item.created_at))}{' '}
                  days
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
