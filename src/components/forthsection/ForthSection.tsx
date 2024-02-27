const ForthSection = () => {
  return (
    <div className="subsSection" id="subs">
      <h2>Выберите тариф</h2>
      <div className="subsSection_variants">
        <div className="subsSection_card">
          <h3>Мелкие предприятия</h3>
          <h2>30$ / в месяц</h2>
          <p>На 30 дней за один филиал</p>
          <p className="btnotoz cardbtn">Оставить заявку</p>
        </div>
        <div className="subsSection_card">
          <h3>Крупные предприятия</h3>
          <h2>80$ / в месяц</h2>
          <p>На 30 дней за один филиал</p>
          <p className="btnotoz cardbtn">Оставить заявку</p>
        </div>
      </div>
    </div>
  );
};

export default ForthSection;
