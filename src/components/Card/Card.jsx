import PropTypes from 'prop-types';
import styles from './Card.module.css'; 

export default function Card({title, count}) {

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardStat}>{count}</div>
      </div>
    </>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
