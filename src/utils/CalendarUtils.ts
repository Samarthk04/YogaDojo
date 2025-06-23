export interface YogaClass {
  id: number;
  title: string;
  day: string;
  time: string;
  duration: number;
  instructor: string;
}

export const generateICS = (cls: YogaClass): string => {
  // Simple placeholder. In production, you'd generate a proper ICS file
  const dt = new Date().toISOString().replace(/[-:]/g, "").split(".")[0];
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `UID:${cls.id}@yoga-studio`,
    `DTSTAMP:${dt}`,
    `SUMMARY:${cls.title}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\n");
  return `data:text/calendar;charset=utf8,${encodeURIComponent(ics)}`;
};
