import React, { useState, useEffect } from "react";
import axios from "../../../variables/myAxios";

function Stats() {
  const [bestSelling, setBestSelling] = useState([]);
  const [uniqueBestSelling, setUniqueBestSelling] = useState([]);
  const [lastDaysSales, setLastDaysSales] = useState([]);

  useEffect(() => {
    getBestSelling();
    getUniqueBestSelling();
    getLastDaysSales();
  }, []);

  function getBestSelling() {
    axios
      .get("/stats/bestselling/5")
      .then((res) => setBestSelling(res.data))
      .catch((err) => alert(err));
  }

  function getUniqueBestSelling() {
    axios
      .get("/stats/uniquebestselling/5")
      .then((res) => setUniqueBestSelling(res.data))
      .catch((err) => alert(err));
  }

  function getLastDaysSales() {
    axios
      .get("/stats/lastdayssales/5")
      .then((res) => setLastDaysSales(res.data))
      .catch((err) => alert(err));
  }

  return (
    <div>
      <table></table>
    </div>
  );
}

export default Stats;
