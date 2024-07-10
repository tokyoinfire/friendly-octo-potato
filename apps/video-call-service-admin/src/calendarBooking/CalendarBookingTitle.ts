import { CalendarBooking as TCalendarBooking } from "../api/calendarBooking/CalendarBooking";

export const CALENDARBOOKING_TITLE_FIELD = "call";

export const CalendarBookingTitle = (record: TCalendarBooking): string => {
  return record.call?.toString() || String(record.id);
};
