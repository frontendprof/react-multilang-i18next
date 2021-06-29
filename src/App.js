import React from 'react';
import "./i18n"
import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

function App() {
  const {t}=useTranslation();
  const release_day=new Date("2021-03-07");
  const time_diff=new Date() - release_day;
  const number_of_days=Math.floor(time_diff/(1000*3600*24))

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-start">
        <h2 className="mt-3">{t("welcome_message")}</h2>
        <p>{t("days_since_release", {number_of_days})}</p>

      </div>
    </div>
  );
}

export default App;
