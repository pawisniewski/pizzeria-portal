import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link className={styles.link} to={`tables/booking/123abc`}>View booking</Link>
    <Link className={styles.link} to={`tables/booking/new`}>Add new booking</Link>
    <Link className={styles.link} to={`tables/events/123abc`}>View events</Link>
    <Link className={styles.link} to={`tables/events/new`}>Add new event</Link>
  </div>
);

export default Tables;