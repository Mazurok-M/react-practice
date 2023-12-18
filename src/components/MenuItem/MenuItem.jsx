import PT from 'prop-types';

const MenuItem = ({ href, name, img }) => {
  return (
    <li>
      <a href={href}>
        {img}
        {name}
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  href: PT.string.isRequired,
  name: PT.string.isRequired,
  img: PT.object.isRequired,
};

export default MenuItem;
