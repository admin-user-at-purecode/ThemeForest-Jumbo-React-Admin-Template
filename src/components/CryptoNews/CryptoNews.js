import { useCallback, useState } from "react";
import { Chip, Typography } from "@mui/material";
import CardQuick from "../CardQuick/CardQuick";
import DdMenu from "../DdMenu/DdMenu";
import Scrollbar from "../Scrollbar/Scrollbar";
import RqTabs from "../RqTabs/RqTabs";
// import RqList from "../RqList/RqList";
import NewsItem from "./NewsItem";
import cardTitles from "../../mock_data/cardTitles";
import { useTheme } from "../../hooks/hooks";
import { Settings } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  cryptoNewsCategoriesMockData,
  cryptoNewsMockData,
} from "../../mock_data/cryptoNews";

const CryptoNews = () => {
  const { theme } = useTheme();

  const renderNewsItem = useCallback(() => {
    return <NewsItem item={cryptoNewsMockData} />;
  });

  return (
    <CardQuick
      title={
        <Typography
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
              flexWrap: "wrap",
            },
          }}
        >
          <Typography
            variant={"h4"}
            mb={0}
            sx={{
              minWidth: 245,
              [theme.breakpoints.down("md")]: {
                minWidth: "100%",
                marginBottom: 2,
              },
            }}
          >
            {cardTitles.widgets.title.cryptoNews}{" "}
            <Chip size={"small"} label={"20"} color="primary" />
          </Typography>

          <RqTabs
            data={cryptoNewsCategoriesMockData}
            sx={{ m: { md: "0 auto" } }}
          />
        </Typography>
      }
      action={
        <DdMenu
          menuItems={[
            { icon: <Settings size={20} />, title: "Setting" },
            { icon: <VisibilityIcon size={20} />, title: "See all" },
          ]}
        />
      }
      headerSx={{
        borderBottom: 1,
        borderBottomColor: "divider",
        "& .MuiCardHeader-action": {
          my: -0.75,
        },
      }}
      wrapperSx={{
        p: 0,
        "&:last-child": {
          pb: 2,
        },
        "& .MuiCollapse-entered:last-child": {
          "& .MuiListItemButton-root": {
            borderBottom: 0,
            borderBottomColor: "transparent",
          },
        },
      }}
    >
      <Scrollbar
        autoHeight
        autoHeightMin={585}
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
        {/* <RqList
          queryOptions={queryOptions}
          primaryKey={"id"}
          service={cryptoNewsService.getNews}
          primary={"id"}
          renderItem={renderNewsItem}
          componentElement={"div"}
          wrapperSx={{ pb: 1 }}
        /> */}
      </Scrollbar>
    </CardQuick>
  );
};

export default CryptoNews;
