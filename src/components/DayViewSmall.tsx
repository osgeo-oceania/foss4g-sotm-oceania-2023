import React from "react";

import { transformData } from "../utils/transformData";

type Event = {
  id: number;
  start: string; // HH:mm
  duration: string; // HH:mm
  title: string;
  type?: string;
  url?: string;
  persons?: { public_name: string }[];
};

type Day = {
  date: string;
  rooms: { [key: string]: Event[] };
};

type DayViewProps = {
  day: Day;
};

const toAmPm = (time: string): string => {
  // Splitting the time string into hours and minutes
  const [hours, minutes] = time.split(":").map(Number);

  // Calculating the AM/PM value
  const ampm = hours >= 12 ? "PM" : "AM";

  // Converting 24-hour format to 12-hour format
  const formattedHours = hours % 12 || 12;

  return `${formattedHours}:${
    minutes === 0 ? "00" : minutes.toString().padStart(2, "0")
  } ${ampm}`;
};

const DayView: React.FC<DayViewProps> = ({ day }) => {

  const transformedData = transformData(day);

  return (
    <div>
      {transformedData.map((event, index) => (
        <div key={index} className="m-4 px-8 py-4 bg-blue-200 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-sm font-light text-blue-100 bg-blue-600 rounded">{toAmPm(event.time)}</span>
            <div className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded">
              {event.type}
            </div>
          </div>

          <div className="mt-2">
            <a href={event.url} target="_blank" className="text-xl font-bold text-gray-700 hover:text-gray-600 hover:underline" rel="noreferrer">
              {event.title}
            </a>
            <p className="mt-2 text-gray-600">
              Presented by: {event.author} in room {event.room}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <a href={event.url} target="_blank" className="text-blue-600 hover:underline" rel="noreferrer">Read more</a>

            <div className="flex items-center">
              <button className="font-bold text-gray-700 cursor-pointer">
                {event.author}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayView;
