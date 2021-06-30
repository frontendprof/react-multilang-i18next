import React from 'react';
import "./i18n"
import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

import "flag-icon-css/css/flag-icon.min.css"

const languages=[
  {
    code:"ar",
    name:"العربية",
    country_code:"sa"
  },
  {
    code:"en",
    name:"English",
    country_code:"us"
  },
  {
    code:"ru",
    name:"Русский",
    country_code:"ru"
  }
]

function App() {
  const {t}=useTranslation();
  const release_day=new Date("2021-03-07");
  const time_diff=new Date() - release_day;
  const number_of_days=Math.floor(time_diff/(1000*3600*24))

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Languages
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {languages.map(({code,name,country_code})=>(
              <li key={country_code}>
                <button className="dropdown-item" >
                  <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                  {name}
                  </button>
                </li>
            ))}
            
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h2>{t("welcome_message")}</h2>
        <p>{t("days_since_release", {number_of_days})}</p>

      </div>
    </div>
  );
}

export default App;
