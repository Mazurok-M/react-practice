import menuConfig from 'constants/menuConfig';
import MenuItem from 'components/ManuItem/ManuItem';

export default function Manu() {
  return (
    <nav>
      <ul>
        {menuConfig.map(({ name, img, href }) => (
          <MenuItem key={name} href={href} img={img} name={name} />
        ))}
      </ul>
    </nav>
  );
}
