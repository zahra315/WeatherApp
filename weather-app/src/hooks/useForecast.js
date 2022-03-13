import { useState } from "react";
import axios from "axios";

const LOCATION_URL = "https://www.metaweather.com/api/location";
const DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${DOMAIN}/${LOCATION_URL}`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isForecast, setForecast] = useState(null);

  const getWoeid = async (location) => {
    const { data } = await axios(`${REQUEST_URL}/search`, {
      params: { query: location },
    });
    console.log({ data });

    if (!data || data.length === 0) {
      setError("Location NOT Founded!");
      setLoading(false);
      return;
    }
    return data;
  };

  const getForecastData = async (woeid) => {
    const data = await axios(`${REQUEST_URL}/${woeid}`);
    if (!data || data.length === 0) {
      setError("Something went wrong!");
      setLoading(false);
      return;
    }
    return data[0];
  };

  // call the API
  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);
    // console.log({ location });
    const response = await getWoeid(location);
    if (!response?.woeid) return;
    // console.log({ response });
    const data = await getForecastData(response[0].woeid);
    if (!data) return;

    console.log({ data });
  };

  return {
    isError,
    isLoading,
    isForecast,
    submitRequest,
  };
};

export default useForecast;
