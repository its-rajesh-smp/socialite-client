import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";

const events = [{ title: "Meeting", start: new Date() }];

function Calender() {
  return (
    <div className="!h-full">
      <FullCalendar
        themeSystem="bootstrap5"
        dayCellClassNames=" overflow-hidden  "
        dayHeaderClassNames="bg-[#EFF6FD]"
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
}

function renderEventContent(eventInfo: any) {
  return (
    <div className="flex gap-2">
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  );
}

export default Calender;
