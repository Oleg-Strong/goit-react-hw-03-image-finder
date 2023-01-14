import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onChange, children }) => {
  return (
    <button onClick={onChange} type="button" className={css.loadMoreBtn}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
};
