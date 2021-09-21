import "./AboutUs.css";

function AboutUS() {
  return (
    <about className="about-container">
      <div className="donut">
        <img src="/imgs/do1.jpg" />
        <div className="overlay">
          <div className="text-about">donut</div>
        </div>
      </div>

      <div className="leo">
        <img src="/imgs/leo.jpg" />
        <div className="overlay">
          <div className="text-about">leo</div>
        </div>
      </div>

      <div className="pon">
        <img src="/imgs/pon.jpg" />
        <div className="overlay">
          <div className="text-about">pon</div>
        </div>
      </div>

      <div className="boss">
        <img src="/imgs/boss.jpg" />
        <div className="overlay">
          <div className="text-about">boss</div>
        </div>
      </div>
    </about>
  );
}

export default AboutUS;
