import { Carousel } from "3d-react-carousal";
import './Result.css';
const slideImageResult = [
  <img src="./imgs/results_0000.png" alt="1" />,
  <img src="./imgs/results_1111.png" alt="2" />,
  <img src="./imgs/results_2222.png" alt="3" />,
  <img src="./imgs/results_3333.png" alt="4" />,
  <img src="./imgs/results_4444.png" alt="5" />,
  <img src="./imgs/results_5555.png" alt="6" />,
  <img src="./imgs/results_6666.png" alt="7" />,
  <img src="./imgs/results_7777.png" alt="8" />,
  <img src="./imgs/results_8888.png" alt="9" />,
  <img src="./imgs/results_9999.png" alt="10" />,
];

const SlideshowResult = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title"></h1>
      </header>
      <h1 className="text-topic">Screen Results</h1>
      <br />

      <Carousel slides={slideImageResult} />
    </div>
  );
};

export default SlideshowResult;
