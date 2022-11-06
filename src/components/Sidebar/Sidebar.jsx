import UserImg from '../../assets/images/mock-user-ava.svg';
import Manu from 'components/Menu/Menu';

const Sidebar = () => {
  return (
    <aside>
      <div className="logo">Logo</div>
      <Manu />
      <div>
        <img src={UserImg} alt="user" />
        <span>Bill</span>
      </div>
    </aside>
  );
};

export default Sidebar;
