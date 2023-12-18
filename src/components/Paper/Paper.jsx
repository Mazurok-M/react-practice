import PT from 'prop-types';
import css from './Paper.module.css';

const Paper = ({ children, classes, ...refProps }) => {
  return (
    <div className={`${css.paper} ${classes}`} {...refProps}>
      {children}
    </div>
  );
};

Paper.propTypes = {
  children: PT.node.isRequired,
  classes: PT.string,
};

export default Paper;
