import React from 'react';
import PropTypes from 'prop-types';
import styles from './Spinner.css';
import CircularProgress from 'material-ui/CircularProgress';


const Spinner = ({ size = 59.5, color = '#00BCD4' }) => (
  <div className={styles.container}>
    <CircularProgress size={Math.max(size, 4)} color={color} />
  </div>
);

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Spinner;
