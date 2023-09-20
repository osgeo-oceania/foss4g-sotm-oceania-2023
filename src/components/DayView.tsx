import React from "react";

type Event = {
  id: number;
  start: string; // HH:mm
  duration: string; // HH:mm
  title: string;
  url?: string;
  persons?: { public_name: string }[];
};

export type Day = {
  date: string;
  rooms: { [key: string]: Event[] };
};

type DayViewProps = {
  day: Day;
  dayConfig: {
    periods: {
      startTime: number;
      endTime: number;
      timeSlotInterval: number;
    }[];
    specialEvents?: Event[];
  };
};

const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const toAmPm = (minute: number, interval: number) => {
  const hours = Math.floor(minute / 60);
  const minutes = minute % 60;
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${minutes === 0 ? "00" : minutes.toString().padStart(2, '0')} ${ampm}`;
};

const toHours = (duration: string) => {
  const [hours, minutes] = duration.split(":").map(Number);
  return `${hours}h ${minutes}m`;
};

const handleClick = (url: string) => {
  if (url) {
    window.open(url, "_blank");
  }
};

const DayView: React.FC<DayViewProps> = ({ day, dayConfig }) => {

  const { periods, specialEvents = [] } = dayConfig;
  // Generate time slots for each period
  const timeSlots: { time: number; interval: number }[] = periods.flatMap(
    ({ startTime, endTime, timeSlotInterval }) => {
      const totalMinutes = (endTime - startTime) * 60;
      return Array.from(
        { length: totalMinutes / timeSlotInterval },
        (_, i) => ({
          time: startTime * 60 + i * timeSlotInterval,
          interval: timeSlotInterval,
        })
      );
  });

  // Merge specialEvents with room events
  const roomsWithSpecialEvents = { ...day.rooms };
  for (const roomName in roomsWithSpecialEvents) {
    roomsWithSpecialEvents[roomName] = [
      ...roomsWithSpecialEvents[roomName],
      ...specialEvents, // Add the special events here
    ];
  }

  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr className="h-[50px]">
          <th className="border p-2 w-[100px]"></th>
          {Object.keys(day.rooms).map((roomName, index) => (
            <th key={index} className="border p-2">
              {roomName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
      {timeSlots.map(({ time, interval }, index) => (
          <tr key={time} className="h-[50px]">
            <td className="border p-2 text-right pr-4">{toAmPm(time, interval)}</td>
            {Object.keys(roomsWithSpecialEvents).map((roomName, index) => (
              <td key={index} className="border p-2 relative">
                {roomsWithSpecialEvents[roomName].map((event) => {
                  const startMinutes = timeToMinutes(event.start);
                  const durationMinutes = timeToMinutes(event.duration);
                  const height = (durationMinutes / interval) * 50;

                  if (time === startMinutes) {
                    const color =
                      event.title === "Lunch"
                        ? "bg-green-200"
                        : event.title.includes("Tea")
                        ? "bg-yellow-200"
                        : "bg-blue-200";

                    const hoverColor =
                      event.title === "Lunch"
                        ? "bg-green-200"
                        : event.title.includes("Tea")
                        ? "bg-yellow-200"
                        : "bg-red-300";

                    const EventDiv = (
                      <div
                        key={event.id}
                        className={`${color} p-1 rounded absolute hover:${hoverColor}`}
                        style={{
                          top: `0px`,
                          height: `${height}px`,
                          width: "95%",
                          zIndex: 10,
                          userSelect: "none",
                        }}
                      >
                        {event.id > 0 ? (
                          <>
                            <div className="text-sm text-white bg-blue-400 p-1 rounded">
                            <strong>Start: {toAmPm(time, interval)} <br />Duration: {toHours(event.duration)}</strong>
                            </div>
                            <strong className="text-xs lg:text-sm xl:text-lg">
                              {event.title}
                            </strong>
                            <div className="absolute text-xs lg:text-sm bottom-0 p-3">
                              Presenter:
                              <br />
                              {event.persons && event.persons.length > 0
                                ? event.persons.map((person, index) => (
                                    <strong key={index}>
                                      {person.public_name}
                                    </strong>
                                  ))
                                : ""}
                            </div>
                          </>
                        ) : (
                          <strong className="text-sm">{event.title}</strong>
                        )}
                      </div>
                    );

                    return event.url ? (
                      <div
                        onClick={() => handleClick(event.url ? event.url : "")}
                        key={event.id}
                        style={{
                          cursor: "pointer",
                          zIndex: 10,
                        }}
                      >
                        {EventDiv}
                      </div>
                    ) : (
                      EventDiv
                    );
                  }
                  return null;
                })}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DayView;
