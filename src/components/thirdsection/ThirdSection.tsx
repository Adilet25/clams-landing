import quesui from "../../assets/Shrug-bro 1.svg";

const ThirdSection = () => {
  return (
    <div className="section">
      <div className="sectionInfo ">
        <h2>Какую проблему мы решаем?</h2>
        <p>
          Мы предлагаем эффективные решения на основе искусственного интеллекта
          для снижения уровня преступности, что способствует увеличению
          безопасности бизнеса и минимизации потерь в прибыли, вне зависимости
          от его масштаба.
        </p>
      </div>
      <img src={quesui} alt="error" />
    </div>
  );
};

export default ThirdSection;
