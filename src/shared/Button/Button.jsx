import styles from './Button.module.scss';
import PropTypes from 'prop-types';

export const Button = ({ handleClickBtn, children }) => {
  return (
    <button type="button" className={styles.Button} onClick={handleClickBtn}>
      {children}
    </button>
  );
};

Button.propTypes = {
  handleClickBtn: PropTypes.func.isRequired,
};
