import PropTypes from 'prop-types';
import styles from './InputField.module.css';

export default function InputField ({ label, value, onChange, keyName, type = "text" }) {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        className={styles.input}
        value={value}
        onChange={(event) => onChange(event, keyName)}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,  
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,  
  onChange: PropTypes.func.isRequired,
  keyName: PropTypes.string.isRequired,
  type: PropTypes.string
};

