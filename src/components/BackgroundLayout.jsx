/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useStateContext } from "../Context";
import Clear from "../assets/imgs/Clear.jpg";
import Clouds from "../assets/imgs/Cloudy.jpg";
import Fog from "../assets/imgs/fog.png";
import Rain from "../assets/imgs/Rainy.jpg";
import Snow from "../assets/imgs/snow.jpg";
import Thunderstorm from "../assets/imgs/Stormy.jpg";

function BackgroundLayout() {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather) {
      switch (weather) {
        case "Clear":
          setImage(Clear);
          break;
        case "Clouds":
          setImage(Clouds);
          break;
        case "Fog":
          setImage(Fog);
          break;
        case "Rain":
          setImage(Rain);
          break;
        case "Snow":
          setImage(Snow);
          break;
        case "Thunderstorm":
          setImage(Thunderstorm);
          break;
        default:
          setImage(Clear); // Fallback image
      }
    }
  }, [weather]);

  console.log(image);

  return (
    <img
      src={image}
      alt="weather_image"
      className="h-screen w-full fixed left-0 top-0 -z-10"
    />
  );
}

export default BackgroundLayout;
