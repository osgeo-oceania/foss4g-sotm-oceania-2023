import React, { useEffect, useState } from "react";

type Event = {
  id: number;
  start: string; // HH:mm
  duration: string; // HH:mm
  title: string;
  track?: string;
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
    specialEvents?: Event[];
  };
};

type EventType =
  | "Workshop"
  | "Ceremony"
  | "Keynote"
  | "Talk"
  | "Panel"
  | "Lightning talks"
  | "Associated Event"
  | "Community Day Event"
  | "Mapathon"
  | "lunch"
  | "break";

const EVENT_COLORS: Record<EventType, string> & { default: string } = {
  Workshop: "bg-[#ef8427]",
  Ceremony: "bg-[#4ca57b]",
  Keynote: "bg-[#aa1456]",
  Talk: "bg-[#1f4182]",
  Panel: "bg-[#6ac2ea]",
  "Lightning talks": "bg-[#fab919]",
  "Associated Event": "bg-[#9a5bd7]",
  "Community Day Event": "bg-[#ea4ced]",
  Mapathon: "bg-[#d62e2e]",
  lunch: "bg-[#16a34a]",
  break: "bg-[#fab919]",
  default: "bg-[#ffffff]",
};

const getBackgroundColor = (type: EventType | string): string => {
  return EVENT_COLORS[type as EventType] || EVENT_COLORS["default"];
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
  const { specialEvents = [] } = dayConfig;

  const [timeSlots, setTimeSlots] = useState<
    { time: number; interval: number }[]
  >([]);
  const [roomsWithEvents, setRooms] = useState<EventsByRoomAndDate>({});

  useEffect(() => {
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
        let time = "";

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
        const amPmTime = `${adjustedHours}:${String(minutes).padStart(
          2,
          "0"
        )} ${isPm ? "PM" : "AM"}`;

        if (!eventsByRoomAndDate[roomName]) {
          eventsByRoomAndDate[roomName] = {};
        }

        if (!eventsByRoomAndDate[roomName][amPmTime]) {
          eventsByRoomAndDate[roomName][amPmTime] = event;
        }
      });
    });

    type Interval = {
      startTime: number;
      endTime: number;
      timeSlotInterval: number;
    };

    // Convert time to minutes for easy calculations
    const timeToMinutes = (time: string): number => {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    };

    // Decide interval based on event duration and gap to next event
    const decideInterval = (duration: number): number => {
      if (duration < 0.125) return 1;
      // if (duration < 0.5) return 5;
      if (duration < 1) return 5;

      return 15;
    };

    const events = Object.values(day["rooms"]).reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);

    events.sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));

    const intervals: Interval[] = [];

    for (let i = 0; i < events.length; i++) {
      const startTime = timeToMinutes(events[i].start) / 60;
      const duration = timeToMinutes(events[i].duration) / 60;
      const endTime =
        i === events.length - 1
          ? startTime + duration
          : timeToMinutes(events[i + 1].start) / 60;

      const intervalSize = decideInterval(duration);

      // Check if the interval already exists
      if (
        !intervals.some(
          (interval) =>
            interval.startTime === startTime && interval.endTime === endTime
        )
      ) {
        if (startTime !== endTime)
          intervals.push({
            startTime,
            endTime,
            timeSlotInterval: intervalSize,
          });
      }

      if (i === events.length - 1) {
        intervals.push({
          startTime: endTime,
          endTime: endTime + (intervalSize / 60) * 2,
          timeSlotInterval: intervalSize,
        });
      }
    }

    const mergedIntervals: Interval[] = [];
    let currentInterval: Interval | null = null;

    for (const interval of intervals) {
      if (currentInterval === null) {
        currentInterval = interval;
      } else {
        if (
          currentInterval.timeSlotInterval === interval.timeSlotInterval &&
          currentInterval.endTime === interval.startTime
        ) {
          currentInterval.endTime = interval.endTime;
        } else {
          mergedIntervals.push(currentInterval);
          currentInterval = interval;
        }
      }
    }

    // push the last interval if there is one
    if (currentInterval !== null) {
      mergedIntervals.push(currentInterval);
    }

    // Generate time slots for each period
    const timeSlotsCal: { time: number; interval: number }[] =
      mergedIntervals.flatMap(({ startTime, endTime, timeSlotInterval }) => {
        const totalMinutes = (endTime - startTime) * 60;
        return Array.from(
          { length: totalMinutes / timeSlotInterval },
          (_, i) => ({
            time: Math.round(startTime * 60 + i * timeSlotInterval),
            interval: timeSlotInterval,
          })
        );
      });

    setTimeSlots(timeSlotsCal);

    setRooms(eventsByRoomAndDate);
  }, [day, specialEvents]);

  const renderEventDetails = (event: any, interval: any, time: any) => {
    const startMinutes = timeToMinutes(event.start);
    const durationMinutes = timeToMinutes(event.duration);
    const height = (durationMinutes / interval) * 50;

    if (time !== startMinutes) return null;

    const bgColor = getBackgroundColor(event.track);

    const hoverColor =
      event.track === "lunch"
        ? "bg-green-200"
        : event.track === "break"
        ? "bg-yellow-200"
        : "bg-blue-500";

    const EventDiv = (
      <div
        key={event.id}
        className={`${bgColor} p-1 rounded absolute hover:${hoverColor}`}
        style={{
          top: `0px`,
          height: `${height - 6}px`,
          width: "95%",
          zIndex: 10,
          userSelect: "none",
          marginTop: "3px",
          color: "white",
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
            <div
              className="text-md lg:text-lg xl:text-lg"
              style={{
                textShadow: `1px 1px 1px #000`,
                padding: "10px",
              }}
            >
              <strong>{event.title}</strong>
            </div>

            {event.persons && event.persons.length > 0 && (
              <div
                className="absolute text-sm lg:text-md bottom-6 p-3"
                style={{
                  textShadow: `1px 1px 1px #000`,
                }}
              >
                Presenter:
                <br />
                <strong>
                  {event.persons && event.persons.length > 0
                    ? event.persons
                        .map((person: any) => person.public_name)
                        .join(", ")
                    : ""}
                </strong>
              </div>
            )}
            <div
              className="absolute text-sm text-white bg-blue-400 p-1 rounded bottom-1" style={{ width: 'calc(100% - 8px)' }}
            >
              <strong>{event.track}</strong>
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
                  {roomsWithEvents &&
                    roomsWithEvents[roomName] &&
                    roomsWithEvents[roomName][toAmPm(time, interval)] &&
                    renderEventDetails(
                      roomsWithEvents[roomName][toAmPm(time, interval)],
                      interval,
                      time
                    )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DayView;
