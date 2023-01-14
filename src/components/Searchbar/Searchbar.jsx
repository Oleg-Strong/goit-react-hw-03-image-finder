import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ children }) => {
  return <header className={css.searchbar}>{children}</header>;
};

export default Searchbar;

Searchbar.propTypes = {
  children: PropTypes.node,
};
