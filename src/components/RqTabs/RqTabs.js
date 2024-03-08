import { useState, useMemo, useEffect } from "react";
import { Button, Stack } from "@mui/material";
import { useQuery } from "react-query";
import { getArrayElementFromKey } from "../../utils/systemHelpers";

const RqTabs = ({ service, primaryKey, queryOptions, map, onChange, sx }) => {
  const [activeTab, setActiveTab] = useState({ id: 1, slug: "all" });
  const listQuery = useQuery(
    [queryOptions.queryKey, { queryParams: queryOptions.queryParams }],
    service
  );
  const queryData = useMemo(() => {
    const dataArray = getArrayElementFromKey(
      listQuery?.data,
      queryOptions?.dataKey
    );
    if (!Array.isArray(dataArray)) {
      return [];
    }
    return dataArray;
  }, [listQuery?.data, queryOptions.dataKey]);

  const handleTabClick = (item) => {
    setActiveTab(item);
  };

  useEffect(() => {
    onChange(activeTab);
  }, [activeTab]);
  return (
    <Stack direction={"row"} spacing={1} sx={sx}>
      {queryData.map((item, index) => {
        return (
          <Button
            key={index}
            size={"small"}
            variant={
              activeTab && item[primaryKey] === activeTab[primaryKey]
                ? "contained"
                : "outlined"
            }
            onClick={() => handleTabClick(item)}
          >
            {item[map.label]}
          </Button>
        );
      })}
    </Stack>
  );
};

RqTabs.defaultProps = {
  map: { label: "label" },
  onChange: () => {},
};

export default RqTabs;
