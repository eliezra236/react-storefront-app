import React, { useState, useEffect } from "react";
import axios from "../../../variables/myAxios";
import BestSellingCard from "./BestSellingCard";
import DailySalesCard from "./DailySalesCard";
import UniqueSalesCard from "./UniqueSalesCard";

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
      .then((res) => {
        console.log(res.data)
        setLastDaysSales(res.data)})
      .catch((err) => alert(err));
  }
  return (
    <div>
      <BestSellingCard sellInfo={bestSelling} />
      <UniqueSalesCard sellInfo={uniqueBestSelling} />
      <DailySalesCard sellInfo={lastDaysSales} />
    </div>
  );
}

export default Stats;
