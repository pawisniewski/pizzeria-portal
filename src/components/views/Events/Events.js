import React from 'react';
import styles from './Events.module.scss';
import PropTypes from 'prop-types';

const Events = ({match}) => {
  const id = match.params.id;

  return (
    <div className={styles.component}>
      <h2>Events view</h2>
      <h3>Event id: {id}</h3>
    </div>
  );
};

Events.propTypes = {
  match: PropTypes.object,
};

export default Events;
