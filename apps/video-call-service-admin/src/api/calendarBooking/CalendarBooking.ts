export type CalendarBooking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  endTime: Date | null;
  call: string | null;
};
