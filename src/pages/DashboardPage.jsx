import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import TabsComponent from "../components/Dashboard/Tabs/TabsComponent";
import axios from "axios";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        //"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("RESPONSE >> ", response);
        setCoins(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <TabsComponent coins={coins} />
    </div>
  );
};

export default DashboardPage;
