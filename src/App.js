import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import MonthStatistics from "./pages/MounthStatistics/MounthStatistics";
import Header from "./shared/Header/Header";
import "./styles/index.scss";

function App() {
  return (
    <div className="global-container">
      <div className="container">
        <Header />
        <Routes>
          <Route path="react-weather/" element={<Home />} />
          <Route
            path="react-weather/month-statistics"
            exact
            element={<MonthStatistics />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
