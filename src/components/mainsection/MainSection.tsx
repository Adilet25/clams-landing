import laptop from "../../assets/IMG (3).svg";

const MainSection = () => {
  return (
    <div className="section">
      <div className="sectionInfo">
        <h2>Безопасность в ваших руках!</h2>
        <p>
          Наш продукт, использующий искусственный интеллект для улучшения
          действующих систем видеонаблюдения, может предоставлять широкий спектр
          услуг для оптимизации и повышения эффективности систем
          видеонаблюдения.
        </p>
        <a href="#zayavka" className="btnotoz">Оставить заявку</a>
      </div>
      <img src={laptop} alt="error" />
    </div>
  );
};

export default MainSection;
