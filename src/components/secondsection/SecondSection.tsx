import safeui from "../../assets/11663742_20944577-Photoroom.png-Photoroom.png";

const SecondSection = () => {
  return (
    <div className="section changedire">
      <img src={safeui} alt="error" />
      <div className="sectionInfo ">
        <h2>Знайте кто с вами!</h2>
        <p>
          Наш продукт представляет собой сервис(API), к которому можно
          подключить уже действующую систему видеонаблюдения. Продукт позволяет
          в режиме реального времени распознавать лица людей и проверяет есть ли
          среди них те, кто находится в розыске или были добавлены в базу данных
          не желательных клиентов(черный список и т.п)
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
