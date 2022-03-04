import React from "react";
import PropTypes from "prop-types";

import styles from "./Error.module.css";

const Error = ({ message }) => {
  return (
    <div className={`${styles.error} alert position-absolut`} role="alert">
      {message}
    </div>
  );
};
Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: "AN ERROR OCCURRED",
};

export default Error;
