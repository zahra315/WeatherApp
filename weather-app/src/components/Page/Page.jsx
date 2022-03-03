import React, { Fragment } from "react";

import Header from "../Header";
import Form from "../Form";
import Error from "../Error";
import Loader from "../Loader";
import Forecast from "../Forecast";

import styles from "./Page.module.css";
import useForecast from "../../hooks/useForecast";

const Page = () => {
  const { isError, isLoading, isForecast } = useForecast();
  return (
    <Fragment>
      <Header />
      <div className={"${styles.box} position-relative"}>
        {/*Form */}
        {isLoading && <Form />}
        {/*Error */}
        {isError && <Error message={isError} />}
        {/*Loader */}
        {isLoading && <Loader />}
      </div>
      {/*Forecast */}
      {isForecast && <Forecast />}
    </Fragment>
  );
};

export default Page;
