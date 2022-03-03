import { useState } from "react";

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isForecast, setForecast] = useState(null);

  // call API

  return {
    isError,
    isLoading,
    isForecast,
  };
};

export default useForecast;
