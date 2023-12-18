import PT from 'prop-types';

const Main = ({ children }) => {
  return <main>{children}</main>;
};

Main.propTypes = {
  children: PT.node.isRequired,
};

export default Main;
