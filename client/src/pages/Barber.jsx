
import Services from "../components/Services/Services";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import Description from "../components/Description/Description";
import Masters from "../components/Masters/Masters";
import Map from "../components/Map/Map";
import Footer from "../components/Footer/Footer";

const Barber = () => {
  return (
    <div>
      <Header />
      <Main />
      <Description />
      <Services />
      <Masters/>
      <Map />
      <Footer />
    </div>
  );
};

export default Barber;
