import React from 'react';
import styles from './Booking.module.scss';
import PropTypes from 'prop-types';

const Booking = ({match}) => {
  const id = match.params.id;

  return (
    <div className={styles.component}>
      <h2>Booking view</h2>
      <h3>Booking id: {id}</h3>
    </div>
  );
};

Booking.propTypes = {
  match: PropTypes.object,
};

export default Booking;
