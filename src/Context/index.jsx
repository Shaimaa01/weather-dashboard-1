/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  // Fixed: Corrected "SeteContextProvider" and "childern" typo
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]); // Fixed: Corrected "setVaules" typo
  const [place, setPlace] = useState("Jaipur");
  const [thisLocation, setLocation] = useState("");

  // Fetch weather API
  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/forecast",
      params: {
        q: place,
        units: "metric",
        appid: API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data.cod === "200") {
        console.log(response.data);
        // Handle API response (adjusted to valid structure)
        setWeather(response.data.list[0].weather[0].main); // Fixed: Corrected to access weather data
        setValues(response.data.list);
        setLocation(response.data.city.name); // Fixed: Corrected to fetch city name
      } else {
        console.log(
          "data: I am not ready yet, waiting for me... I am coming 🤞"
        );
      }
    } catch (e) {
      console.error(e.message);
      alert("This place does not exist");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <StateContext.Provider
      value={{
        weather,
        setPlace,
        values,
        thisLocation,
      }}
    >
      {children} {/* Fixed: Corrected "childern" typo */}
    </StateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext);
