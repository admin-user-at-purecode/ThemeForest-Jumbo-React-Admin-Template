import React from "react";
import { Grid } from "@mui/material";
import BitcoinPrice from "../../components/BitcoinPrice/BitcoinPrice";
import RipplePrice from "../../components/BitcoinPrice/BitcoinPrice";
import EthereumPrice from "../../components/BitcoinPrice/BitcoinPrice";
import LitecoinPrice from "../../components/BitcoinPrice/BitcoinPrice";
import PortfolioBalance from "../../components/PortfolioBalance/PortfolioBalance";
import EarningExpenses from "../../components/EarningExpenses/EarningExpenses";
import WordOfTheDay1 from "../../components/WordOfTheDay1/WordOfTheDay1";
import EarnRewardCard from "../../components/EarnRewardCard/EarnRewardCard";
import CurrencyCalculator from "../../components/CurrencyCalculator/CurrencyCalculator";
import LatestPosts from "../../components/LatestPosts/LatestPosts";
import MarketingCampaign from "../../components/MarketingCampaign/MarketingCampaign";
import CryptoNews from "../../components/CryptoNews/CryptoNews";

const CryptoDashboard = () => {
  return (
    <Grid container spacing={3.75}>
      <Grid item xs={12} sm={6} lg={3}>
        <BitcoinPrice />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <RipplePrice />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <EthereumPrice />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <LitecoinPrice />
      </Grid>
      <Grid item xs={12} lg={6}>
        <PortfolioBalance />
      </Grid>
      <Grid item xs={12} lg={6}>
        <EarningExpenses />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <WordOfTheDay1 />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <EarnRewardCard />
      </Grid>
      <Grid item xs={12} lg={4}>
        <CurrencyCalculator />
      </Grid>
      <Grid item xs={12} lg={6}>
        <LatestPosts scrollHeight={356} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <MarketingCampaign />
      </Grid>
      <Grid item xs={12}>
        <CryptoNews />
      </Grid>
    </Grid>
  );
};

export default CryptoDashboard;
