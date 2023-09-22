import React, { useEffect, useState } from "react";

type Event = {
  id: number;
  start: string; // HH:mm
  duration: string; // HH:mm
  title: string;
  date?: string;
  url?: string;
  persons?: { public_name: string }[];
};

type EventsByRoomAndDate = {
  [roomName: string]: {
    [date: string]: Event;
  };
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
  return `${formattedHours}:${
    minutes === 0 ? "00" : minutes.toString().padStart(2, "0")
  } ${ampm}`;
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
  const [timeSlots, setTimeSlots] = useState<
    { time: number; interval: number }[]
  >([]);
  const [roomsWithEvents, setRooms] = useState<EventsByRoomAndDate>({});

  useEffect(() => {
    // Generate time slots for each period
    const timeSlotsCal: { time: number; interval: number }[] = periods.flatMap(
      ({ startTime, endTime, timeSlotInterval }) => {
        const totalMinutes = (endTime - startTime) * 60;
        return Array.from(
          { length: totalMinutes / timeSlotInterval },
          (_, i) => ({
            time: startTime * 60 + i * timeSlotInterval,
            interval: timeSlotInterval,
          })
        );
      }
    );

    setTimeSlots(timeSlotsCal);

    // Merge specialEvents with room events
    const roomsWithSpecialEvents = { ...day.rooms };
    for (const roomName in roomsWithSpecialEvents) {
      roomsWithSpecialEvents[roomName] = [
        ...roomsWithSpecialEvents[roomName],
        ...specialEvents, // Add the special events here
      ];
    }
    
    let eventsByRoomAndDate: EventsByRoomAndDate = {};

    Object.keys(roomsWithSpecialEvents).forEach((roomName) => {
      roomsWithSpecialEvents[roomName].forEach((event) => {
        let time = '';

        if (event.date !== undefined) {
          time = event.date.split("T")[1];
        }

        if (event.start !== null) {
          time = event.start;
        }

        // Extract hours and minutes from the string
        const [hours, minutes] = time.split(":").map(Number);

        // Determine AM or PM
        const isPm = hours >= 12;
        const adjustedHours = hours % 12 || 12; // Convert 0 to 12 for 12AM

        // Format the hours and minutes with AM/PM
        const amPmTime = `${adjustedHours}:${String(minutes).padStart(2, '0')} ${isPm ? 'PM' : 'AM'}`;
        
        if (!eventsByRoomAndDate[roomName]) {
          eventsByRoomAndDate[roomName] = {};
        }
  
        if (!eventsByRoomAndDate[roomName][amPmTime]) {
          eventsByRoomAndDate[roomName][amPmTime] = event;
        }
      });
    });

    setRooms(eventsByRoomAndDate);

  }, [day, periods, specialEvents]);


  const renderEventDetails = (event: any, interval:any, time: any) => {
    const startMinutes = timeToMinutes(event.start);
    const durationMinutes = timeToMinutes(event.duration);
    const height = (durationMinutes / interval) * 50;
  
    if (time !== startMinutes) return null;
  
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
          height: `${height - 6}px`,
          width: "95%",
          zIndex: 10,
          userSelect: "none",
          marginTop: "3px",
        }}
      >
        {event.id > 0 ? (
          <>
            <div className="text-sm text-white bg-blue-400 p-1 rounded">
              <strong>
                Start: {toAmPm(time, interval)} <br />
                Duration: {toHours(event.duration)}
              </strong>
            </div>
            <strong className="text-xs lg:text-sm xl:text-lg">
              {event.title}
            </strong>
            <div className="absolute text-xs lg:text-sm bottom-0 p-3">
              Presenter:
              <br />
              <strong>
                {event.persons && event.persons.length > 0
                  ? event.persons.map((person: any) => person.public_name).join(", ")
                  : ""}
              </strong>
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
  };

  return (
    <>
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
            <td className="border p-2 text-right pr-4">
              {toAmPm(time, interval)}
            </td>
            {Object.keys(roomsWithEvents).map((roomName, index) => (
              <td key={index} className="border p-2 relative">
              {roomsWithEvents && roomsWithEvents[roomName] && roomsWithEvents[roomName][toAmPm(time, interval)] && renderEventDetails(roomsWithEvents[roomName][toAmPm(time, interval)], interval, time)}
            </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div>
      Total events in eventsByRoomAndDate: {Object.values(roomsWithEvents).reduce(
  (acc, roomEvents) => acc + Object.keys(roomEvents).length,
  0
)}
    </div>
    </>
  );
};

export default DayView;
