import { useState } from "react";
import { Button, Collapse, TextField, Typography } from "@mui/material";
import ErrorOutlineSharpIcon from "@mui/icons-material/ErrorOutlineSharp";
import CardQuick from "../CardQuick/CardQuick";
import { isValidEmail } from "../../utils/formatHelpers";
import { cardTitles } from "../../mock_data/cardTitles";

const NewsLetterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (isValidEmail(email)) {
      setIsEmailValid(true);
      setSubscribed(true);
    } else {
      setIsEmailValid(false);
      setSubscribed(false);
    }
  };
  return (
    <CardQuick
      title={cardTitles.widgets.title.newsLetter}
      subheader={cardTitles.widgets.subheader.newsLetter}
    >
      <Collapse in={!subscribed}>
        <TextField
          fullWidth
          required
          label="Email address"
          onChange={(e) => setEmail(e.target.value)}
          error={!isEmailValid}
          helperText={
            isEmailValid ? "" : "Please provide a valid email address."
          }
          InputProps={
            !isEmailValid
              ? {
                  endAdornment: (
                    <ErrorOutlineSharpIcon sx={{ color: "error.main" }} />
                  ),
                }
              : {}
          }
          sx={{
            mb: 2,
            "& .MuiFormHelperText-root": {
              m: (theme) => theme.spacing(0.5, 0, 2),
            },
          }}
        />
        <Button
          disableElevation
          variant={"contained"}
          onClick={handleSubscribe}
          sx={{ mb: 2.5 }}
        >
          Subscribe
        </Button>
        <Typography
          variant={"body1"}
          color={"text.secondary"}
          sx={{ fontStyle: "italic", fontSize: 12 }}
        >
          Your email is safe with us, we don't spam.
        </Typography>
      </Collapse>
      <Collapse in={subscribed}>
        <Typography variant={"h2"} sx={{ color: "success" }}>
          Thank you for subscribing with us!
        </Typography>
        <Typography variant={"subtitle1"}>
          We will keep you posted with latest news and updates.
        </Typography>
      </Collapse>
    </CardQuick>
  );
};

export default NewsLetterSubscription;
