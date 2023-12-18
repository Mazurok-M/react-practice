import MenuItem from 'components/MenuItem/MenuItem';
import { default as menuConfig } from '../../constants/menuConfig';

const Menu = () => {
  return (
    <nav>
      <ul>
        {menuConfig.map(({ name, href, img }) => (
          <MenuItem key={name} href={href} img={img} name={name} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
