import DayView from "../../components/DayView";
import DayViewSmall from "../../components/DayViewSmall";
import { Day } from "../../components/DayView";

import { useEffect, useState } from "react";

// Define a function to get special events based on the date
const getDayConfig = (day: Day) => {
  switch (day.date) {
    case "2023-10-16":
      return {
        specialEvents: [
          { id: -1, start: "12:00", duration: "01:00", title: "Lunch", track: "lunch" },
          {
            id: -2,
            start: "10:00",
            duration: "00:15",
            title: "Morning Tea",
            track: "break",
          },
          {
            id: -3,
            start: "15:00",
            duration: "00:15",
            title: "Afternoon Tea",
            track: "break",
          },
        ],
      };
    case "2023-10-17":
      return {
        specialEvents: [
          { id: -1, start: "12:15", duration: "01:00", title: "Lunch", track: "lunch" },
          {
            id: -2,
            start: "10:30",
            duration: "00:30",
            title: "Morning Tea",
            track: "break",
          },
          {
            id: -3,
            start: "15:00",
            duration: "00:30",
            title: "Afternoon Tea",
            track: "break",
          },
        ],
      };
    case "2023-10-18":
      return {
        specialEvents: [
          { id: -1, start: "12:50", duration: "01:00", title: "Lunch", track: "lunch" },
          {
            id: -2,
            start: "10:40",
            duration: "00:30",
            title: "Morning Tea",
            track: "break",
          },
          {
            id: -3,
            start: "15:05",
            duration: "00:30",
            title: "Afternoon Tea",
            track: "break",
          },
        ],
      };
    case "2023-10-19":
      return {
        specialEvents: [
          { id: -1, start: "12:35", duration: "01:00", title: "Lunch", track: "lunch" },
          {
            id: -2,
            start: "10:50",
            duration: "00:30",
            title: "Morning Tea",
            track: "break",
          },
          {
            id: -3,
            start: "14:25",
            duration: "00:30",
            title: "Afternoon Tea",
            track: "break",
          },
        ],
      };
    default:
      return {
        periods: [{ startTime: 8, endTime: 14, timeSlotInterval: 60 }],
        specialEvents: [],
      };
  }
};

const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day)); // month is 0-indexed
  
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  };

  return new Intl.DateTimeFormat(undefined, options).format(date);
};

const ProgramPage = () => {
  const [allDaysData, setAllDaysData] = useState([]);
  const [days, setDays] = useState([]);
  const [activeDay, setActiveDay] = useState(0);
  useEffect(() => {
    // Fetch the data only when the component mounts
    fetch(
      "https://talks.osgeo.org/foss4g-sotm-oceania-2023/schedule/export/schedule.json"
    )
      .then(async (response) => await response.json())
      .then((data) => {
        setAllDaysData(data.schedule.conference.days);
        setDays(
          data.schedule.conference.days.map((day: any) => formatDate(day.date))
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <section
        style={{
          backgroundImage: "url('/imgs/auck_build_3D.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 0px",
        }}
        className="relative flex items-center justify-center h-64 bg-gray-100 bg-no-repeat bg-cover bg-center"
      ></section>
      <section className="container px-6 py-8 mx-auto lg:py-16">
        <div className="grid grid-cols-4 sm:overflow-x-auto sm:overflow-y-hidden border-b border-gray-200 whitespace-nowrap sm:flex">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 sm:text-base whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ${
                activeDay === index
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-700"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </section>
      <div className="hidden lg:block">
        {allDaysData[activeDay] && (
          <DayView
            day={allDaysData[activeDay]}
            dayConfig={getDayConfig(allDaysData[activeDay])}
          />
        )}
      </div>
      <div className="block lg:hidden">
        {allDaysData[activeDay] && (
          <DayViewSmall day={allDaysData[activeDay]} />
        )}
      </div>
    </>
  );
};

export default ProgramPage;
