import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="error" />
      <div>
        <a href="#subs">Тарифы</a>
        <a href="#about">О нас</a>
      </div>
    </div>
  );
};

export default Header;
