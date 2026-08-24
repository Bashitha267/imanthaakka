/**
 * Utility to generate and download .ics files or open Google Calendar links
 */

export interface CalendarEventParams {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate?: Date;
}

export function generateGoogleCalendarUrl({
  title,
  description,
  location,
  startDate,
  endDate,
}: CalendarEventParams): string {
  const end = endDate || new Date(startDate.getTime() + 4 * 60 * 60 * 1000); // default 4 hours

  const formatGCalDate = (d: Date) =>
    d.toISOString().replace(/-|:|\.\d+/g, '');

  const startStr = formatGCalDate(startDate);
  const endStr = formatGCalDate(end);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${startStr}/${endStr}`,
    details: description,
    location: location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile({
  title,
  description,
  location,
  startDate,
  endDate,
}: CalendarEventParams) {
  const end = endDate || new Date(startDate.getTime() + 4 * 60 * 60 * 1000);

  const formatIcsDate = (d: Date) =>
    d.toISOString().replace(/-|:|\.\d+/g, '');

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//KNOTSTORY//Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(startDate)}`,
    `DTEND:${formatIcsDate(end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${title.replace(/\s+/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
