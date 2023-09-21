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
  
  type TransformedData = {
    time: string;
    title: string;
    author: string;
    type: string; 
    url: string;
    room: string;
  };
  
  export const transformData = (originalData: Day): TransformedData[] => {
    const transformed: TransformedData[] = [];
  
    Object.keys(originalData.rooms).forEach((room) => {
      originalData.rooms[room].forEach((event) => {
        const type = event.title.includes("Lunch") || event.title.includes("Tea")
                    ? "Special Event"
                    : "Standard Event";
        transformed.push({
          time: event.start,
          title: event.title,
          author: event.persons?.length ? event.persons.map((person) => person.public_name).join(", ") : "",
          type: event.type || type,
          url: event.url || "",
          room,
        });
      });
    });
  
    // Sort the transformed array by time
    transformed.sort((a, b) => a.time.localeCompare(b.time));
  
    return transformed;
  };