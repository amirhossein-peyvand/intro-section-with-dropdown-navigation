import heroDesktop from "../assets/image-hero-desktop.png";
import heroMobile from "../assets/image-hero-mobile.png";
import "../sass/MainArea.scss";
import databiz from "../assets/client-databiz.svg";
import audiophile from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";
import { useMediaQuery } from "react-responsive";

const MainArea = () => {
  const isGreaterThan800px = useMediaQuery({ query: "(min-width: 800px)" });

  return (
    <main className="mainArea">
      <section className="heroImageContainer">
        <img
          src={isGreaterThan800px ? heroDesktop : heroMobile}
          alt="heroImage"
        />
      </section>
      <section className="contentContainer">
        <div className="titleDescBtn">
          <h1 className="title">Make remote work</h1>
          <p className="desc">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="learnMoreBtn">Learn more</button>
        </div>
        <div className="logos">
          <img src={databiz} alt="databiz" />
          <img src={audiophile} alt="audiophile" />
          <img src={meet} alt="meet" />
          <img src={maker} alt="maker" />
        </div>
      </section>
    </main>
  );
};

export default MainArea;
