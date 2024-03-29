import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import CurrentDay from "../CurrentDay";
import CurrentDayDescription from "../CurrentDayDescription";
import UpcomingDayForecast from "../UpcomingDaysForecast";

import styles from "./Forecast.module.css";
import { propTypes } from "react-bootstrap/esm/Image";

const Forecast = ({ forecast }) => (
  <Container className={styles.box}>
    <Row>
      <Col xs={12} md={4}>
        <div className={styles.card}>
          <CurrentDay {...forecast.currentDay} />
        </div>
      </Col>
      <Col xs={12} md={8} className="d-flex flex-colum justify-content-between">
        <CurrentDayDescription forecast={forecast.currentDayDetails} />
        <UpcomingDayForecast day={forecast.upcomingDays} />
      </Col>
    </Row>
  </Container>
);

Forecast.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object,
    currentDayDetails: PropTypes.array,
    upcomingDays: propTypes.array,
  }),
};

export default Forecast;
