import React from 'react';
import styles from './Orders.module.scss';
import PropTypes from 'prop-types';

const Orders = ({match}) => {
  const id = match.params.id;

  return (
    <div className={styles.component}>
      <h2>Orders view</h2>
      <h3>Order id: {id}</h3>
    </div>
  );
};

Orders.propTypes = {
  match: PropTypes.object,
};

export default Orders;
