import React from 'react';
import "./i18n"
import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

function App() {
  const {t}=useTranslation();
  return (
    <div className="App">
      <h2>{t("trans")}</h2>
    </div>
  );
}

export default App;
