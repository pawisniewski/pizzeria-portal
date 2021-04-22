import React from 'react';
import styles from './NewOrder.module.scss';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const NewOrder = () => (
  <div className={styles.component}>
    <h2>NewOrder view</h2>
    <Button component={Link} to={`/waiter`} variant='contained' color='primary' size='small'>Add order</Button>
  </div>
);

export default NewOrder;
