import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  { 
    hour: '12:00',
    tables: [
      {id: '1', status: 'booked'},
      {id: '2', status: 'free'},
      {id: '3', status: 'event'},
    ],
  },
  {
    hour: '12:30',
    tables: [
      {id: '1', status: 'free'},
      {id: '2', status: 'booked'},
      {id: '3', status: 'free'},
    ],
  },
  {
    hour: '13:00',
    tables: [
      {id: '1', status: 'booked'},
      {id: '2', status: 'event'},
      {id: '3', status: 'free'}, 
    ],
  },
  {
    hour: '13:30',
    tables: [
      {id: '1', status: 'booked'},
      {id: '2', status: 'free'},
      {id: '3', status: 'booked'}, 
    ],
  },
  {
    hour: '14:00',
    tables: [
      {id: '1', status: 'free'},
      {id: '2', status: 'free'},
      {id: '3', status: 'booked'}, 
    ],
  },
];

const renderActions = (status) => {
  switch (status) {
    case 'free':
      return (
        <div className={styles.cellParent}>
          <div className={styles.titleCell}>
            <h2 className={styles.title}>Free</h2>
          </div>
          <div className={styles.buttonCell}>
            <Button component={Link} to={`/tables/booking/new`} variant='contained' color='primary' size='small'>Add booking</Button>
          </div>
          <div>
            <Button component={Link} to={`/tables/events/new`} variant='contained' color='primary' size='small'>Add event</Button>
          </div>
        </div>
      );
    case 'booked':
      return (
        <div className={styles.cellParent}>
          <div className={styles.titleCell}>
            <h2 className={styles.title}>Booked</h2>
          </div>
          <div>
            <Button component={Link} to={`/tables/booking/123`} variant='contained' color='secondary' size='small'>Table booked</Button>
          </div>
        </div>
      );
    case 'event':
      return (
        <div className={styles.cellParent}>
          <div className={styles.titleCell}>
            <h2 className={styles.title}>Event</h2>
          </div>
          <div>
            <Button component={Link} to={`/tables/events/123`} variant='contained' color='secondary' size='small'>Check event</Button>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map((table) => (
          <TableRow key={table.hour}>
            <TableCell component="th" scope="row">
              {table.hour}
            </TableCell>
            {table.tables.map((mapTable) => (
              <TableCell key={mapTable.id}>
                {renderActions(mapTable.status)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;
