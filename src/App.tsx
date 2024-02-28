import "./styles/App.css";
import Header from "./components/header/Header";
import MainSection from "./components/mainsection/MainSection";
import SecondSection from "./components/secondsection/SecondSection";
import ThirdSection from "./components/thirdsection/ThirdSection";
import ForthSection from "./components/forthsection/ForthSection";
import FiveSection from "./components/fivethsection/FiveSection";
import SixSection from "./components/sixsection/SixSection";
import Footer from "./components/footer/Footer";
import color1 from "./assets/Ellipse 22.svg";
import color2 from "./assets/Group 140.svg";
import color3 from "./assets/Vector (21).svg";
import color4 from "./assets/Group 145.svg";

function App() {
  return (
    <>
      <img src={color1} alt="" className="colors color1" />
      <img src={color2} alt="" className="colors color2" />
      <img src={color3} alt="" className="colors color3" />
      <img src={color4} alt="" className="colors color4" />

      <div className="container">
        <Header/>
        <MainSection />
        <SecondSection />
        <ThirdSection />
        <ForthSection />
      </div>
      <FiveSection />
      <SixSection />
      <Footer />
    </>
  );
}

export default App;
