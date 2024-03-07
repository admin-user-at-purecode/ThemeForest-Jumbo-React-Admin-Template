import { useState, useEffect, useMemo } from "react";
import { Button, Stack } from "@mui/material";

const RqTabs = ({ data, sx }) => {
  const [activeTab, setActiveTab] = useState({ id: 1, slug: "all" });

  return (
    <Stack direction={"row"} spacing={1} sx={sx}>
      {data.map((item, index) => {
        return (
          <Button
            key={index}
            size={"small"}
            variant={
              activeTab && item.id === activeTab.id ? "contained" : "outlined"
            }
          >
            {item.name}
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
