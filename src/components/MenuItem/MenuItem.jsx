import PT from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ href, name, img }) => {
  return (
    <li>
      <NavLink to={href}>
        {img}
        {name}
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  href: PT.string.isRequired,
  name: PT.string.isRequired,
  img: PT.object.isRequired,
};

export default MenuItem;
