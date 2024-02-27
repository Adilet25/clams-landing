import weui from "../../assets/Geek convention-bro 1.svg";

const SixSection = () => {
  return (
    <div className="container" id="about">
      <div className="section">
        <img src={weui} alt="error" />
        <div className="sectionInfo ">
          <h2>О нас</h2>
          <p>
            Наш инновационный продукт на основе искусственного интеллекта
            революционизирует сферу видеонаблюдения, обеспечивая высокоточное
            обнаружение и распознавание лиц. Мы помогаем предприятиям всех
            масштабов снизить уровень преступности, повысить безопасность и
            минимизировать финансовые потери, предоставляя интеллектуальное
            решение для эффективного управления и контроля.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SixSection;
