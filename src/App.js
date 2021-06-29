import React from 'react';
import "./i18n"
import { useTranslation } from "react-i18next";
import HttpApi from 'i18next-http-backend';


function App() {
  const {t}=useTranslation();
  return (
    <div className="App">
      <h2>{t("trans")}</h2>
    </div>
  );
}

export default App;
