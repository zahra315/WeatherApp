import moment from "moment";

const getWeekly = (date) => moment(date).format("dddd").substring(0, 3);

const getUpcomingDayForecast = (data) =>
  data.slice(1).map((day) => ({
    imgUrl: day.weather_state_abbr,
    temperature: Math.round(day.max_temp),
    weekday: getWeekday(day.applicable_date),
  }));

export default getUpcomingDayForecast;
