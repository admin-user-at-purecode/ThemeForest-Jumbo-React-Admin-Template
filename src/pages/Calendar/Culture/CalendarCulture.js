import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import "moment/locale/es";
import "moment/locale/fr";
import "moment/locale/ar";
import "moment/locale/en-gb";
import "moment/locale/en-in";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { MenuItem, Select } from "@mui/material";
import CalendarWrapper from "../../../components/calanderWrapper/CalendarWrapper";
import DemoCard from "../../../components/DemoCard/DemoCard";
import { calendarData, cultures } from "../../../mock_data/calendarsData";
import { cardTitles } from "../../../mock_data/cardTitles";

const { events } = calendarData;
const today = new Date();
const currentYear = today.getFullYear();

const localizer = momentLocalizer(moment);

const CalendarCulture = () => {
  const [culture, setCulture] = useState("en");

  return (
    <>
      <Typography variant={"h1"} mb={3}>
        {cardTitles.pages.title.calendarCultures}
      </Typography>
      <Typography variant={"h5"} color={"text.primary"}>
        Select a culture
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Select
          size={"small"}
          onChange={(e) => setCulture(e.target.value)}
          value={culture}
        >
          {cultures.map((item, index) => {
            return (
              <MenuItem value={item.id} key={`${item.id}${index}`}>
                {item.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <DemoCard
        demoCodeFile={"/ck-editor/basic.txt"}
        wrapperSx={{ pt: 0, bgcolor: "background.paper" }}
      >
        <CalendarWrapper>
          <Calendar
            localizer={localizer}
            events={events}
            step={60}
            culture={culture}
            defaultDate={new Date(currentYear, 3, 1)}
            style={{ height: 600 }}
          />
        </CalendarWrapper>
      </DemoCard>
    </>
  );
};

export default CalendarCulture;
