import { Carousel } from "3d-react-carousal";
import "./Interface.css";
const slideImages = [
  <img src="./imgs/XI1_Home_Dashboard.png" alt="1" />,
  <img src="./imgs/XI2_Dashboard_Network_Custom.png" alt="2" />,
  <img src="./imgs/XI3_Advanced_Graphing.png" alt="3" />,
  <img src="./imgs/XI4_Capacity_Planning_Report.png" alt="4" />,
  <img src="./imgs/XI5_Config_Wizards.png" alt="5" />,
  <img src="./imgs/XI6_Network_Replay.png" alt="6" />,
  <img src="./imgs/XI7_Snapshots.png" alt="7" />,
  <img src="./imgs/XI8_User_Management.png" alt="8" />,
];

const Slideshowing = () => {
  return (
    <interface className="Slideshow-interface">
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header>
        <h1 className="text-topic">User Interfaces Supported</h1>
        <br />

        <Carousel slides={slideImages} />
      </div>
    </interface>
  );
};

export default Slideshowing;
