import React from "react";
import { siteAudiences } from "../../../mock_data/welcomeSummaryData";
import { LinearProgress, Typography } from "@mui/material";
import Div from "../../Div/Div";
import styled from "@mui/material/styles/styled";

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  flex: 1,
}));

const SiteAudienceInfo = () => {
  return (
    <>
      <Typography variant={"h5"}>Site Audience</Typography>
      {siteAudiences.map((item, index) => (
        <React.Fragment key={index}>
          <Typography variant={"body1"} color={"text.secondary"}>
            {item.label}
          </Typography>
          <Div
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 0.5,
            }}
          >
            <StyledLinearProgress
              variant={"determinate"}
              value={item.value}
              color={item.color}
            />
            <Typography
              variant={"body1"}
              color={"text.secondary"}
              ml={1}
            >{`${item.value}%`}</Typography>
          </Div>
        </React.Fragment>
      ))}
    </>
  );
};

export default SiteAudienceInfo;
