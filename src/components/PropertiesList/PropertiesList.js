import { useState, useCallback } from "react";
import CardQuick from "../CardQuick/CardQuick";
import { Typography } from "@mui/material";
// import RqTabs from "../RqTabs/RqTabs";
// import RqList from "../RqList/RqList";
import Scrollbar from "../Scrollbar/Scrollbar";
import PropertyItem from "./PropertyItem";
// import { propertyServices } from "../../../services/property-services";
import { useTheme } from "../../hooks/hooks";
import DdMenu from "../DdMenu/DdMenu";
import { cardTitles } from "../../mock_data/cardTitles";

const PropertiesList = () => {
  const { theme } = useTheme();

  const [queryOptions, setQueryOptions] = useState({
    queryKey: "properties",
    queryParams: { category: { id: 1, name: "All", slug: "all" } },
    dataKey: "propertiesList",
  });
  const handleCategory = (category) => {
    setQueryOptions((state) => ({
      ...state,
      queryParams: { category: category },
    }));
  };

  const renderPropertyItem = useCallback((propertyItem) => {
    return <PropertyItem item={propertyItem} />;
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
              [theme.breakpoints.down("md")]: {
                width: "100%",
                marginBottom: 2,
              },
            }}
          >
            {cardTitles.widgets.title.properties1}
          </Typography>
          {/* <RqTabs
            service={propertyServices.getPropertyCategories}
            queryOptions={{
              queryKey: "property-category",
              dataKey: "propertiesCategory",
            }}
            map={{ label: "name" }}
            primaryKey={"id"}
            onChange={handleCategory}
            sx={{ m: { md: "0 auto" } }}
          /> */}
        </Typography>
      }
      action={
        <DdMenu
          menuItems={[
            { title: "More Detail", slug: "more-detail" },
            { title: "Close", slug: "close" },
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
        autoHeightMin={554}
        autoHide
        autoHideDuration={200}
        autoHideTimeout={500}
      >
        {/* <RqList
          queryOptions={queryOptions}
          primaryKey={"id"}
          service={propertyServices.getProperties}
          renderItem={renderPropertyItem}
          componentElement={"div"}
          wrapperSx={{ pb: 1 }}
        /> */}
      </Scrollbar>
    </CardQuick>
  );
};

export default PropertiesList;
