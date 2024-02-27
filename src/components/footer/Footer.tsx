import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h2>Clams</h2>
        <p>
          Наш продукт (сервис) позволяет врежиме реального временираспознавать
          лица людей с камервидеонаблюдения для дальнейшегоанализа.
        </p>
      </div>
      <img src={logo} alt="error" className="footerlogo" />
      <div className="footerInfo">
        <div>
          <a href="#about">О нас</a>
          <a href="#subs">Тарифы</a>
          <p>
            Контакты: <br /> +996999888777
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
