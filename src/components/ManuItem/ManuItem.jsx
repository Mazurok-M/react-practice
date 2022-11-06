import PropTypes from 'prop-types';

export default function MenuItem({ href, img, name }) {
  return (
    <li>
      <a href={href}>
        {img}
        {name}
      </a>
    </li>
  );
}

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};
