import { useState, useEffect } from "react";
import { InputLabel, Select, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import CardQuick from "../CardQuick/CardQuick";
import cardTitles from "../../mock_data/cardTitles";
import { getCustomDateTime } from "../../utils/constants/formatHelpers";
import { currencies } from "../../mock_data/currencies";
import { currencyRates } from "../../mock_data/currencyRates";

const CurrencyCalculator = () => {
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toCurrency, setToCurrency] = useState(currencies[1]);
  const [conversionRate, setConversionRate] = useState(
    currencyRates[`${fromCurrency}-${toCurrency}`]
  );
  const [amount, setAmount] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);

  useEffect(() => {
    setConversionRate(currencyRates[`${fromCurrency.code}-${toCurrency.code}`]);
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    const convertedAmount = amount * conversionRate;
    setConvertedValue(convertedAmount.toFixed(2));
  }, [conversionRate, amount]);

  const changeFromCurrency = (e) => {
    for (let count = 0; count < currencies.length; count++) {
      if (currencies[count].code === e.target.value)
        setFromCurrency(currencies[count]);
    }
  };
  const changeToCurrency = (e) => {
    for (let count = 0; count < currencies.length; count++) {
      if (currencies[count].code === e.target.value)
        setToCurrency(currencies[count]);
    }
  };
  return (
    <CardQuick
      title={cardTitles.widgets.title.currencyCal}
      subheader={getCustomDateTime()}
    >
      <Typography
        variant={"h6"}
        color={"text.primary"}
      >{`${amount} ${fromCurrency.name} equals`}</Typography>
      <Typography
        component={"div"}
        variant={"h1"}
      >{`${convertedValue} ${toCurrency.name}`}</Typography>
      <Typography variant={"body1"} color={"text.secondary"} mb={4}>
        {`1 ${fromCurrency.name} @${conversionRate} ${toCurrency.name}`}
      </Typography>
      <Grid container spacing={2} mb={1}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="from">From</InputLabel>
            <Select
              label={"USD"}
              defaultValue={"usd"}
              small={"large"}
              fullWidth
              onChange={changeFromCurrency}
            >
              {currencies.map((currency, key) => {
                return (
                  <MenuItem key={key} value={currency.code}>
                    {currency.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="to">To</InputLabel>
            <Select
              label={"INR"}
              defaultValue={"inr"}
              small={"large"}
              onChange={changeToCurrency}
            >
              {currencies.map((currency, key) => {
                return (
                  <MenuItem key={key} value={currency.code}>
                    {currency.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              size={"large"}
              label="Amount"
              placeholder={"Amount"}
              value={amount}
              margin={"dense"}
              onChange={(e) => setAmount(e.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>
    </CardQuick>
  );
};

export default CurrencyCalculator;
