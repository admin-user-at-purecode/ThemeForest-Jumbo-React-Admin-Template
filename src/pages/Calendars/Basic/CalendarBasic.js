import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Typography from "@mui/material/Typography";
import { calendarData } from "../../../mock_data/calendarsData";
import CalendarWrapper from "../../../components/CalendarWrapper/CalendarWrapper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { cardTitles } from "../../../mock_data/cardTitles";

const { events } = calendarData;
const today = new Date();
const currentYear = today.getFullYear();

const localizer = momentLocalizer(moment);

const CalendarBasic = () => {
  return (
    <>
      <Typography variant={"h1"} mb={3}>
        {cardTitles.pages.title.basicCalendar}
      </Typography>
      <Card>
        <CardContent>
          <CalendarWrapper>
            <Calendar
              localizer={localizer}
              events={events}
              step={60}
              defaultDate={new Date(currentYear, 3, 1)}
              style={{ height: 600 }}
            />
          </CalendarWrapper>
        </CardContent>
      </Card>
    </>
  );
};

export default CalendarBasic;
