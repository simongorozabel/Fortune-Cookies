import { useState } from "react";
import fortune from "../fortune.json";
import getRandomInt from "../utils/randomInt";

import blue from "/src/assets/img/blue-background.png";
import green from "/src/assets/img/green-background.png";
import purple from "/src/assets/img/purple-background.png";
import yellow from "/src/assets/img/yellow-background.png";

import fortune1 from "/src/assets/img/fortune-1.png";
import fortune20 from "/src/assets/img/fortune-20.png";
import fortune21 from "/src/assets/img/fortune-21.png";

const Quotes = () => {
  let objectPhrases = fortune[getRandomInt(fortune.length)];

  const backgroundColor = [blue, green, purple, yellow];
  let randomBackground = backgroundColor[getRandomInt(backgroundColor.length)];

  const images = [fortune1, fortune20, fortune21];
  let randomImage = images[getRandomInt(images.length)];

  const [randomPhrase, setRandomPhrase] = useState(objectPhrases);
  const [background, setBackground] = useState(randomBackground);
  const [image, setImage] = useState(randomImage);

  const e = () => {
    setRandomPhrase(!randomPhrase);
    setBackground(!background);
    setImage(!image);
  };

  return (
    <>
      <div className="quotes">
        <p>{objectPhrases.phrase}</p>
        <p>
          Author: <span className="author">{objectPhrases.author}</span>
        </p>
        <button onClick={e} className="button">
          👁️ Luck 👁️
        </button>
      </div>
      <div className="image">
        <img src={randomImage} alt="" />
      </div>
      <div className="background">
        <img src={randomBackground} alt="background" />
      </div>
    </>
  );
};

export default Quotes;
