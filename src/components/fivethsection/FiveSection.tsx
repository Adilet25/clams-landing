const FiveSection = () => {
  return (
    <div id="zayavka" className="zayvkaSection">
      <div className="container ">
        <h2>Оставьте заявку на подключение</h2>
        <div>
          <input type="text" className="inpZayv" placeholder="email" />
          <input type="text" className="inpZayv" placeholder="Ваше имя" />
          <p className="btnotoz zayavkabtn">Оставить заявку</p>
        </div>
      </div>
    </div>
  );
};

export default FiveSection;
