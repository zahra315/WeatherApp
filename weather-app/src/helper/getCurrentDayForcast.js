import moment from "moment";

const getCurrentDayForecast = (data, title) => ({
  weekday: moment(data.applicable_date).from("dddd"),
  data: moment(data.applicable_date).from("MMM Do"),
  location: title,
  temperature: Math.round(data.the_temp),
  weatherIcon: `'https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.avg`,
  weatherDescription: data.weather_state_abbr,
});

export default getCurrentDayForecast;
