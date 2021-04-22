import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    changeStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(row){
    const {changeStatus} = this.props;
    switch (row.status) {
      case 'free':
        return (
          <>
            <Button onClick={() => changeStatus(row.id, 'ordered')} component={Link} to={`/waiter/order/new`} color='primary' size='small'>new order</Button>
            <Button onClick={() => changeStatus(row.id, 'thinking')} color='primary' size='small'>thinking</Button>
          </>
        );
      case 'thinking':
        return (
          <>
            <Button onClick={() => changeStatus(row.id, 'ordered')} component={Link} to={`/waiter/order/new`} color='primary' size='small'>new order</Button>
            <Button onClick={() => changeStatus(row.id, 'free')} color='secondary'>cancel</Button>
          </>
        );
      case 'ordered':
        return (
          <>
            <Button onClick={() => changeStatus(row.id, 'prepared')} color='primary' size='small'>prepared</Button>
            <Button onClick={() => changeStatus(row.id, 'free')} color='secondary'>cancel</Button>
          </>
        );
      case 'prepared':
        return (
          <Button onClick={() => changeStatus(row.id, 'delivered')} color='primary' size='small'>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => changeStatus(row.id, 'paid')} color='primary' size='small'>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => changeStatus(row.id, 'free')} color='primary' size='small'>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    <Button component={Link} to={`/waiter/order/${row.order}`}>
                      {row.order}
                    </Button>
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
