import UserImg from 'assets/images/mock-user-ava.svg';
import Menu from 'components/Menu/Menu';

const Sidebar = () => {
  return (
    <aside>
      <div className="logo">Logo</div>
      <Menu />
      <div>
        <img src={UserImg} alt="user" />
        <span>Біл Гейтс</span>
      </div>
    </aside>
  );
};

export default Sidebar;
