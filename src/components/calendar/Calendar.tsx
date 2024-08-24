import moment from "moment";
import { Calendar as ReactCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./style.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Meeting",
    start: moment().add(1, "days").toDate(),
    end: moment().add(1, "days").add(2, "hours").toDate(),
  },
  {
    title: "Meeting",
    start: moment().add(1, "days").toDate(),
    end: moment().add(1, "days").add(2, "hours").toDate(),
  },
  {
    title: "Meeting",
    start: moment().add(1, "days").toDate(),
    end: moment().add(1, "days").add(2, "hours").toDate(),
  },
  {
    title: "Meeting",
    start: moment().add(1, "days").toDate(),
    end: moment().add(1, "days").add(2, "hours").toDate(),
  },
  {
    title: "Workshop",
    start: moment().add(2, "days").toDate(),
    end: moment().add(2, "days").add(1, "hours").toDate(),
  },
  {
    title: "Conference",
    start: moment().add(3, "days").toDate(),
    end: moment().add(3, "days").add(3, "hours").toDate(),
  },
];

// Custom styling for events based on title
const eventPropGetter = (event: any) => {
  let backgroundColor = "";

  // Assign different colors based on event title
  switch (event.title) {
    case "Meeting":
      backgroundColor = "#ff5722"; // Orange
      break;
    case "Workshop":
      backgroundColor = "#4caf50"; // Green
      break;
    case "Conference":
      backgroundColor = "#2196f3"; // Blue
      break;
    default:
      backgroundColor = "#3174ad"; // Default color
  }

  const style = {
    backgroundColor,
    color: "white",
    borderRadius: "5px",
    border: "none",
    padding: "5px",
  };

  return { style };
};

function Calendar() {
  return (
    <div className="!h-full">
      <ReactCalendar
        popup
        events={events}
        localizer={localizer}
        className="! h-[calc(100vh-90px)]"
        eventPropGetter={eventPropGetter}
      />
    </div>
  );
}

export default Calendar;
