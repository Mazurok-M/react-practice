import PropTypes from 'prop-types';
import css from './Paper.module.css';

export default function Paper({ children, classes, ...otherProps }) {
  return (
    <div className={`${css.paper} ${classes}`} {...otherProps}>
      {children}
    </div>
  );
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
};
