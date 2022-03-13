import { useState } from "react";
import axios from "axios";

const LOCATION_URL = "https://www.metaweather.com/api/location";
const DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${DOMAIN}/${LOCATION_URL}`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isForecast, setForecast] = useState(null);

  // call the API
  const submitRequest = async (location) => {
    // console.log({ location });
    const { data } = await axios(`${REQUEST_URL}/search`, {
      params: { query: location },
    });
    console.log({ data });

    if (!data || data.length === 0) {
      setError("Location NOT Founded!");
      return;
    }

    const response = await axios(`${REQUEST_URL}/${data[0].woeid}`);
    console.log({ response });
  };

  return {
    isError,
    isLoading,
    isForecast,
    submitRequest,
  };
};

export default useForecast;
